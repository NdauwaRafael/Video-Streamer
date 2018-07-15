<script>
    import {mapGetters} from 'vuex';
    export default {
        data: ()=>({

        }),
        computed: {
            ...mapGetters({
                comments: 'comments',
                loading: 'loading_comments'
            })
        },
        methods: {
            loadComments(){
                let video_id = this.$router.params.videoId;
                this.$store.commit('LOAD_COMMENTS', video_id)
            }
        },
        mounted(){
            this.loadComments()
        }
    }
</script>
<template>
    <div class="video_comments">

    </div>
</template>