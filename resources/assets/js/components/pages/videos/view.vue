<script>
  import { mapGetters } from 'vuex'
  import Vue from 'vue'
  import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed'

  Vue.component('video-comments', require('./partials/comments.vue'))
  Vue.component('create-comment', require('./partials/create_comment.vue'))
  export default {
    data () {
      return {
        url: '',
        video_id: ''
      }
    },
    watch: {
      video: {
        handler: function () {
          this.url = this.video.name;
          let videoId = getIdFromURL(this.url);
          let startTime = getTimeFromURL(this.url);
          this.video_id = videoId;
        }
      }
    },
    computed: {
      player () {
        return this.$refs.videoPlayer.player
      },
      ...mapGetters({
        video: 'video',
        loading_video: 'loading_video'
      })
    },
    methods: {
      loadVideo () {
        let video_id = this.$route.params.videoId
        this.$store.commit('LOAD_VIDEO', video_id)
      }
    },
    mounted () {
      this.loadVideo()
    },

  }
</script>

<template>
    <div class="video_details">
        <div class="video_details__head"></div>
        <div class="video_details__body">
            <div class="video_details__body__clip">
                <youtube :video-id="video_id" player-width="95%" :player-vars="{ autoplay: 1 }"></youtube>
            </div>
            <div class="video_details__body__comments">
                <video-comments></video-comments>
            </div>
            <div class="video_details__body__create-comment">
                <h3>Doug</h3>
                <create-comment></create-comment>
            </div>
        </div>
    </div>


</template>

