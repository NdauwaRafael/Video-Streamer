<script>
    import Vue from 'vue';
    import {mapGetters} from 'vuex';
    export default {
        name: 'videos',
        data() {
            return {

            }

        },
      computed: {
        ...mapGetters({
          videos: 'videos'
        })
      },
        methods: {
            onView(){
                this.$router.push({name: 'view_video', params: { videoId: 123 }})
            },
          getVideos(){
              this.$store.commit('ALL_VIDEOS');
          }
        },
      mounted(){
        this.$store.commit('ALL_VIDEOS');
      }
    }

</script>
<template>
    <div class="tutorial_videos">
        <!--~examples/assets/images/hamburger.png-->
        <div class="video_card" v-for="video in videos" >
            <el-card :body-style="{ padding: '0px' }">
                <img src="/img/cover.jpg" class="image">
                <div style="padding: 14px;">
                    <span>{{video.name}}</span>
                    <div class="bottom clearfix">
                        <time class="time"></time>
                        <el-button type="text" class="button">Operating button</el-button>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>