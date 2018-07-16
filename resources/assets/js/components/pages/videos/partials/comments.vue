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
                let video_id = this.$route.params.videoId;
                this.$store.commit('LOAD_COMMENTS', video_id)
            }
        },
        mounted(){
            this.loadComments()
        }
    }
</script>
<template>
    <div>
        <div class="video_comments">
            <div class="video_comments__head">
                <div class="video_comments__head__title">

                </div>
                <div class="video_comments__head__date">

                </div>
            </div>
            <div class="video_comments__body">

            </div>
        </div>
    </div>
</template>