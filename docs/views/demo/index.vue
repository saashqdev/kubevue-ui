<template>
    <div :class="$style.root">
        <div :class="$style.side">
            <u-sidebar color="inverse" collapsible accordion expand-trigger="click">
                <u-sidebar-group title="Dashboard">
                    <u-sidebar-item exact to="/demo/dashboard/analysis">Analysis Page</u-sidebar-item>
                    <u-sidebar-item exact to="/demo/dashboard/monitor">Monitor Page</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Form Page">
                    <u-sidebar-item exact to="/demo/form/basic">Basic Form</u-sidebar-item>
                    <u-sidebar-item exact to="/demo/form/advance">Advanced Form</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="List Page">
                    <u-sidebar-item exact to="/demo/table/basic">Basic Table</u-sidebar-item>
                    <u-sidebar-item exact to="/demo/table/advance">Advanced Table</u-sidebar-item>
                    <u-sidebar-item exact to="/demo/table/select">Select List</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Details">
                    <u-sidebar-item exact to="/demo/detail/basic">Basic Details</u-sidebar-item>
                    <!-- <u-sidebar-item exact to="/demo/detail/advance">Advanced Details</u-sidebar-item> -->
                </u-sidebar-group>
                <u-sidebar-group title="Date Page">
                    <u-sidebar-item exact to="/demo/date/basic">Date Selection</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </div>
        <div :class="$style.main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
};
</script>

<style module>
.side {
    position: fixed;
    width: $sidebar-width;
    top: $navbar-height;
    bottom: 0;
    overflow: hidden;
}

.side li {
    width: $sidebar-width;
}

.main {
    margin-left: $sidebar-width;
    max-width: 1000px;
    padding: 40px;
}
</style>
