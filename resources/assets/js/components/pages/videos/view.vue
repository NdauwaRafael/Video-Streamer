<script>
    import {mapGetters} from 'vuex';
    export default {
        data() {
            return {
                playerOptions: {
                    muted: true,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "video/mp4",
                        src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                    }],
                    poster: "/static/images/author.jpg",
                }
            }
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            },
            ...mapGetters({
                video: 'video',
                loading_video: 'loading_video'
            })
        },
        methods: {
            onPlayerPlay(player) {
            },
            onPlayerPause(player) {
            },
            playerStateChanged(playerCurrentState) {
            },
            // player is ready
            playerReadied(player) {
                console.log('the player is readied', player)
                // you can use it to do something...
                // player.[methods]
            },
            loadVideo(){
                let video_id = this.$router.params.videoId;
                this.$store.commit('LOAD_VIDEO', video_id);
            }
        },
        mounted() {
            this.loadVideo()
        },

    }
</script>

<template>
    <video-player  class="video-player-box"
                   ref="videoPlayer"
                   :options="playerOptions"
                   :playsinline="true"
                   @play="onPlayerPlay($event)"
                   @pause="onPlayerPause($event)"
                   @statechanged="playerStateChanged($event)"
                   @ready="playerReadied">
    </video-player>
</template>

