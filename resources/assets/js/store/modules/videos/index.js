import * as video_api from '../../api/video'

const state = {
    video: '',
    loading_video: false
};

const getters = {
    video: state => state.video,
    loading_video: state => state.loading_video
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
};

export default {
    state,
    getters,
    mutations
}
