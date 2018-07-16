import * as video_api from '../../api/video'
import comments from './comments';

const state = {
    video: [],
    loading_video: false,
    videos: '',
    loading_videos: false
};

const getters = {
    video: state => state.video,
    loading_video: state => state.loading_video,
    videos: state => state.videos,
    loading_videos: state => state.loading_videos,

};

const mutations = {

    LOAD_VIDEO(state, video_id){
        state.loading_video = true;
        video_api.LOAD_VIDEO_API(video_id)
            .then(({data})=>{
                    state.loading_video = false
                    state.video = data.data
                    this.$notify({
                        title: 'Success',
                        message: 'Video file loaded Successfully',
                        type: 'success'
                    });
                },
                ()=>{
                    state.loading_video = false
                })
    },

    ALL_VIDEOS(state){
        state.loading_videos = true;
        video_api.LOAD_VIDEOS_API()
            .then(({data})=>{
                    state.loading_videos = false
                    state.videos = data
                    this.$notify({
                        title: 'Success',
                        message: 'Videos loaded Successfully',
                        type: 'success'
                    });
                },
                ()=>{
                    state.loading_videos = false
                })
    },
};

export default {
    state,
    getters,
    mutations,
    modules: {
        comments
    }
}
