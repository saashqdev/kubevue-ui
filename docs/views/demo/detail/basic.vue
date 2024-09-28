<template>
    <div>
        <h1>Details Page</h1>
        <p>Details page is a relatively common requirement, which can be roughly divided into the following forms according to different usage scenarios. </p>
        <div :class="$style.part">
            <u-desc-list>
                <u-desc-list-group title="Personal information">
                    <u-desc-list-item label="username">xxxxxx</u-desc-list-item>
                    <u-desc-list-item label="Login account">1111111</u-desc-list-item>
                    <u-desc-list-item label="Login password">
                        <u-link>Modify</u-link>
                    </u-desc-list-item>
                    <u-desc-list-item label="mobile">13888888888</u-desc-list-item>
                </u-desc-list-group>
                <u-desc-list-group title="Company Information">
                    <u-desc-list-item label="Company name">xxxxxx</u-desc-list-item>
                    <u-desc-list-item label="Contact number">13688886666</u-desc-list-item>
                    <u-desc-list-item label="Contact email">xxxx@gmail.com</u-desc-list-item>
                </u-desc-list-group>
            </u-desc-list>
        </div>
        <div :class="$style.part">
            <u-info-list>
                <u-info-list-group title="Basic Information">
                    <u-info-list-item label="VPC Name">DefaultVPC</u-info-list-item>
                    <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
                    <u-info-list-item label="Network Segment">10.3.0.4/16</u-info-list-item>
                    <u-info-list-item label="Default VPC">Yes</u-info-list-item>
                    <u-info-list-item label="Creation Time">2018-02-22</u-info-list-item>
                </u-info-list-group>
            </u-info-list>
            <u-info-list column="2">
                <u-info-list-group title="Basic Information">
                    <u-info-list-item label="VPC Name">defaultVPC</u-info-list-item>
                    <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
                    <u-info-list-item label="Network Segment">10.3.0.4/16</u-info-list-item>
                    <u-info-list-item label="Default VPC">Yes</u-info-list-item>
                    <u-info-list-item label="Creation Time">2018-02-22</u-info-list-item>
                </u-info-list-group>
            </u-info-list>
        </div>
    </div>
</template>

<style module>
.part {
    margin-top: 50px;
}
</style>
