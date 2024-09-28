<template>
    <div>
        <h1>Date Selection</h1>
        <p>Date selection is a common requirement, which can be divided into the following four types according to usage scenarios</p>
        <div :class="$style.part">
            <h3>Calendar</h3>
            <u-linear-layout>
                <u-calendar :class="$style.inline" date="2018-08-08"></u-calendar>
                <u-calendar :class="$style.inline" date="2018-08-08" min-date="2018-08-02" max-date="2018-08-18"></u-calendar >
            </u-linear-layout>
        </div>
        <div :class="$style.part">
            <h3>Date Selection</h3>
            <div :class="$style.label">
                <label>Application Date:</label>
                <u-date-picker></u-date-picker>
                <span :class="$style.btn"> to </span>
                <u-date-picker></u-date-picker>
            </div>
            <div :class="$style.label">
                <label>Review Date:</label>
                <u-date-picker></u-date-picker>
                <span :class="$style.btn"> to </span>
                <u-date-picker></u-date-picker>
            </div>
        </div>
        <div :class="$style.part">
            <h3>Time Selection</h3>
            <div :class="$style.label">
                <label>Start Time:</label>
                <u-time-picker width="56" time="15:46:33"></u-time-picker>
            </div>
            <div :class="$style.label">
                <label>End Time:</label>
                <u-time-picker width="56" time="16:46:33"></u-time-picker>
            </div>
        </div>
        <div :class="$style.part">
            <h3>Date and Time Selection</h3>
            <u-date-time-picker date="2018-08-08" autofocus></u-date-time-picker>
        </div>
    </div>
</template>

<style module>
.part {
    margin-bottom: 50px;
}
.inline {
    display: inline-block;
}
.btn {
    margin: 0 5px !important;
    color: #999;
}
.label {
    margin-top: 10px;
}
</style>
