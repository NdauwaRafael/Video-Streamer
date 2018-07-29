<script>
  import { mapGetters } from 'vuex';
  import events from '../../../../events';

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
      this.loadComments();
    },
    created(){
      let vm = this;
      events.bus.$on('load_comments', function () {
        vm.loadComments();
      })
    }
  }
</script>
<template>
    <div>
        <div class="video_comments" v-for="comment in comments" v-loading="loading" element-loading-text="Loading comments...">
            <div class="video_comments__head">
                <div class="video_comments__head__title">

                </div>
                <div class="video_comments__head__date">
                    <h4>{{comment.created_at.date}}</h4>
                </div>
            </div>
            <div class="video_comments__body">
                {{comment.comment}}
            </div>
        </div>
    </div>
</template>