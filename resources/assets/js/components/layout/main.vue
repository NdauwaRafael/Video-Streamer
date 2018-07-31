<script>
    import Vue from 'vue';
    Vue.component('top-bar', require('./partials/top-bar.vue'));
    Vue.component('side-manu', require('./partials/side-menu.vue'));
    Vue.component('page-footer', require('./partials/footer.vue'));
    import events from '../../events'

    export default  {
        props: ['authenticate'],
        data: ()=>({
          toggled: false
        }),
      mounted(){
         events.bus.$on('menu-toggle', ()=>{
           this.toggled =  !this.toggled
         })
      }
    }
</script>

<template>
    <div class="main_page">
        <div class="main_page__topbar" >
            <top-bar :authenticate="authenticate" ></top-bar>
        </div>

        <div class="side_menu" :class="{'toggled': toggled}">
            <side-manu :authenticate="authenticate"></side-manu>
        </div>

        <div class="main_body" >
            <div class="main_body__content">
                <slot></slot>
            </div>
            <div class="main_body__footer">
                <page-footer></page-footer>
            </div>
        </div>
    </div>
</template>