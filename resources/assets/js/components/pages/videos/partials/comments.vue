<script>
  import { mapGetters } from 'vuex'

  export default {
    data: () => ({}),
    computed: {
      ...mapGetters({
        comments: 'comments',
        loading: 'loading_comments'
      })
    },
    methods: {
      loadComments () {
        let video_id = this.$route.params.videoId
        this.$store.commit('LOAD_COMMENTS', video_id)
      }
    },
    mounted () {
      this.loadComments()
    }
  }
</script>
<template>
    <div>
        <div class="video_comments" v-for="comment in comments">
            <div class="video_comments__head">
                <div class="video_comments__head__title">

                </div>
                <div class="video_comments__head__date">
                    <h4>{{comment.created_at}}</h4>
                </div>
            </div>
            <div class="video_comments__body">
                {{comment.comment}}
            </div>
        </div>
    </div>
</template>