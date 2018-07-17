<script>
  import { mapGetters } from 'vuex'
  import Vue from 'vue'

  Vue.component('video-comments', require('./partials/comments.vue'))
  Vue.component('create-comment', require('./partials/create_comment.vue'))
  export default {
    data () {
      return {
        playerOptions: {
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: 'video/mp4',
            src: ''
          }],
          poster: '/static/images/author.jpg',
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
    watch: {
      video: {
        handler: function () {
          this.playerOptions.sources[0].src = '/storage/documents/' + this.video.attachment;
          console.log(this.video, 'video');
        }
      }
    },
    methods: {
      onPlayerPlay (player) {
      },
      onPlayerPause (player) {
      },
      playerStateChanged (playerCurrentState) {
      },
      // player is ready
      playerReadied (player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      },
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
                <video-player class="video-player-box"
                              ref="videoPlayer"
                              :options="playerOptions"
                              :playsinline="true"
                              @play="onPlayerPlay($event)"
                              @pause="onPlayerPause($event)"
                              @statechanged="playerStateChanged($event)"
                              @ready="playerReadied">
                </video-player>
            </div>
            <div class="video_details__body__comments">
                <video :src="'/storage/'+video.attachment"></video>
                <!--<video-comments></video-comments>-->
            </div>
            <div class="video_details__body__create-comment">
                <!--<create-comment></create-comment>-->
            </div>
        </div>
    </div>


</template>

