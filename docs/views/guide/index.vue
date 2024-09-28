<template>
    <div :class="$style.root">
        <div :class="$style.side">
            <u-sidebar color="inverse">
                <u-sidebar-item to="/guide/introduce">Introduction</u-sidebar-item>
                <u-sidebar-item to="/guide/quickstart">Quickstart</u-sidebar-item>
                <u-sidebar-item href="https://github.com/saashqdev/kubevue-ui/releases" target="_blank">Update Log</u-sidebar-item>
            </u-sidebar>
        </div>
        <div :class="$style.main">
            <router-view></router-view>
        </div>
    </div>
</template>

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
    padding: 50px;
    padding-top: 30px;
}
</style>
