<script>
    import Vue from 'vue';
    Vue.component('top-bar', require('./partials/top-bar.vue'));
    Vue.component('side-manu', require('./partials/side-menu.vue'));
    Vue.component('page-footer', require('./partials/footer.vue'));

    export default  {

    }
</script>
<template>
    <div class="main_page">

        <div class="side_menu">
            <side-manu></side-manu>
        </div>

        <div class="main_body">
            <div class="main_body__topbar">
                <top-bar></top-bar>
            </div>
            <div class="main_body__content">
                <slot></slot>
            </div>
            <div class="main_body__footer">
                <page-footer></page-footer>
            </div>
        </div>
    </div>
</template>