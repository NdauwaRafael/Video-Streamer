<script>
    import Vue from 'vue';
    Vue.component('all-videos', require('./partials/videos.vue'))
</script>

<template>
    <div class="view_videos">
        <div class="view_videos__head"></div>
        <div class="view_videos__body">
            <all-videos></all-videos>
        </div>
    </div>
</template>


<style lang="scss">

    .color-icon-label-table {
        td:first-child {
            width: 1rem;
        }
    }
</style>
