import Chart from '../u-chart.vue';

export default {
    name: 'u-pie-chart',
    extends: Chart,
    props: {
        fixed: { type: Number, default: 1 },
        width: { type: String, default: '100%' },
        height: { type: String, default: '450px' },
        labels: { type: Boolean, default: true },
    },
    data() {
        return {
            RADIUS: 60,
            currentData: this.handleData(this.data),
            selectedItem: undefined,
            currentWidth: 0,
            currentHeight: 0,
            svgWidth: 0,
            svgHeight: 0,
        };
    },
    computed: {
        zero() {
            if (!this.currentData.length)
                return true;

            const lastItem = this.currentData[this.currentData.length - 1];
            return lastItem.accumulatedPercentage + lastItem.percentage === 0;
        },
    },
    watch: {
        data: {
            deep: true,
            handler(data) {
                // To solve the situation where the object value in the array changes, selectedItem needs to be reset.
                this.selectedItem = null;
                this.currentData = this.handleData(data);
                this.draw();
            },
        },
    },
    created() {
        window.addEventListener('resize', this.getSize);
    },
    mounted() {
        // SetTimeout must be used, otherwise the svg cannot be obtained
        setTimeout(() => this.draw());
    },
    destoryed() {
        this.removeEventListener('resize', this.getSize);
    },
    methods: {
        draw() {
            this.getSize();
            // Other dynamic bindings
            this.currentData.forEach((item) => item.d = this.getD(item));
        },
        getSize() {
            if (this.$el) {
                this.currentWidth = this.$el.offsetWidth;
                this.currentHeight = this.$el.offsetHeight;
            }
            if (this.$refs.svg) {
                const rect = this.$refs.svg.getBoundingClientRect();
                this.svgWidth = rect.width;
                this.svgHeight = rect.height;
                // @note: clientWidth & clientHeight are NOT standard and NOT supported in Firefox.
                // this.svgWidth = this.$refs.svg.clientWidth;
                // this.svgHeight = this.$refs.svg.clientHeight;
                this.svgSize = Math.min(this.svgWidth, this.svgHeight);
            }
        },
        handleData(data) {
            // Guaranteed to always be an Array inside
            if (!data)
                return [];

            // Pure numbers
            if (typeof data[0] !== 'object')
                data = data.map((value, index) => ({ value, name: index + 1 }));

            const sum = data.reduce((prev, item) => +(item.value || item.percent || 0) + prev, 0);

            let accumulatedPercentage = 0;
            return data.map((item) => {
                item = Object.assign({
                    d: '',
                    accumulatedPercentage: 0,
                    percentage: 0,
                    label: {},
                }, item);

                // @deprecated percent
                if (item.percent)
                    item.percentage = item.percent;
                else
                    item.percentage = +(sum === 0 ? 0 : item.value / sum * 100).toFixed(this.fixed);

                item.accumulatedPercentage = accumulatedPercentage;
                accumulatedPercentage += item.percentage;

                return item;
            });
        },
        getPosition(percentage, length) {
            percentage = percentage || 0;
            length = length || this.RADIUS;
            const arc = Math.PI * 2 * percentage * 0.01;
            return { x: length * Math.sin(arc), y: -length * Math.cos(arc) };
        },
        getD(item) {
            const start = this.getPosition(item.accumulatedPercentage);
            const end = this.getPosition(item.accumulatedPercentage + item.percentage);

            // GetLabelPosition
            const norm = Math.sqrt((start.x + end.x) * (start.x + end.x) + (start.y + end.y) * (start.y + end.y));
            const point = { x: (start.x + end.x) / norm, y: (start.y + end.y) / norm };
            if (item.percentage > 50) {
                point.x = -point.x;
                point.y = -point.y;
            }

            item.label = {
                start: { x: this.RADIUS * 1.025 * point.x, y: this.RADIUS * 1.025 * point.y },
                end: { x: this.RADIUS * 1.2 * point.x, y: this.RADIUS * 1.2 * point.y },
                direction: point.x < 0 ? 'left' : 'right',
            };

            item.label.d = `
                M ${item.label.start.x},${item.label.start.y}
                L ${item.label.end.x},${item.label.end.y}
                h ${item.label.direction === 'right' ? this.RADIUS * 0.6 : -this.RADIUS * 0.6}
            `.trim();

            let d = '';
            d += 'M ';
            d += start.x + ',' + start.y;
            d += ' A ' + this.RADIUS + ',' + this.RADIUS + ' 0 ';
            d += item.percentage > 50 ? 1 : 0;
            d += ' 1 ';
            d += end.x + ',' + end.y;
            d += ' L 0,0 Z';

            return d;
        },
        getLabelStyle(item) {
            const multiple = this.svgSize / 200;

            if (item.label.direction === 'left') {
                return {
                    right: (this.svgWidth / 2 - (item.label.end.x - 38) * multiple) + 'px',
                    top: (this.svgHeight / 2 + item.label.end.y * multiple - 12) + 'px',
                };
            } else {
                return {
                    left: (this.svgWidth / 2 + (item.label.end.x + 38) * multiple) + 'px',
                    top: (this.svgHeight / 2 + item.label.end.y * multiple - 12) + 'px',
                };
            }
        },
        getTextStyle(item) {
            const middle = this.getPosition(item.accumulatedPercentage + item.percentage / 2);
            const height = this.currentHeight;
            middle.x *= height / 100 / 2;
            middle.y *= height / 100 / 2;

            const result = [
                'margin-left: ' + (middle.x) + 'px',
                'margin-top: ' + (middle.y) + 'px',
            ];

            return result.join('; ');
        },
        onMouseOver(item) {
            this.selectedItem = item;
        },
    },
};
