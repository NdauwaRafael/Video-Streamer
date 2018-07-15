import * as comments_api from '../../api/comments'

const state = {
    comments: '',
    loading_video: false,
    creating_comment: false,
    loading_comments: false
};

const getters = {
    video: state => state.video,
    loading_video: state => state.loading_video
};

const mutations = {

    CREATE_VIDEO_COMMENT(state, form){
        state.creating_comment = true;
        comments_api.CREATE_VIDEO_COMMENT_API(form)
            .then(({data})=>{
                    state.creating_comment = false;
                    this.$notify({
                        title: 'Success',
                        message: 'Comment created Successfully',
                        type: 'success'
                    });
                },
                ()=>{
                    state.creating_comment = false
                })
    },
    LOAD_COMMENTS(state, video_id){
        state.loading_comments = true;
        comments_api.LOAD_COMMENTS_API(video_id)
            .then(({data})=>{
                state.loading_comments = false;
                state.comments = data.data
            },
                ()=>{
            state.loading_comments=false
                })
    }
};

export default {
    state,
    getters,
    mutations
}
