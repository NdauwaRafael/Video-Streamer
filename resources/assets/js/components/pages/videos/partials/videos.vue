<script>
  import Vue from 'vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'videos',
    data () {
      return {}

    },
    computed: {
      ...mapGetters({
        videos: 'videos'
      })
    },
    methods: {
      onView () {
        this.$router.push({name: 'view_video', params: {videoId: 123}})
      },
      getVideos () {
        this.$store.commit('ALL_VIDEOS')
      },
      viewClip (video) {
        this.$router.push({name: 'view_video', params: {videoId: video.id}})
      }
    },
    mounted () {
      this.$store.commit('ALL_VIDEOS')
    }
  }

</script>
<template>
    <div class="tutorial_videos">
        <div class="video_card" v-for="(video, index) in videos" @click="viewClip(video)">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <img src="/img/cover.jpg" class="image">
                <div style="padding: 14px;">
                    <span>{{video.name}}</span>
                    <span>{{video.category}}</span>
                    <div class="bottom clearfix">
                        <time class="time"></time>
                        <el-button type="text" class="button">View Video</el-button>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>