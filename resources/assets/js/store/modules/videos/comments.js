import * as comments_api from '../../api/comments'
import events from '../../../events';
const state = {
    comments: '',
    loading_video: false,
    creating_comment: false,
    loading_comments: false
};

const getters = {
    comments: state => state.comments,
    loading_comments: state => state.loading_comments,
    creating_comment: state => state.creating_comment
};

const mutations = {

    CREATE_VIDEO_COMMENT(state, form){
        state.creating_comment = true;
        comments_api.CREATE_VIDEO_COMMENT_API(form)
            .then(({data})=>{
                    state.creating_comment = false;
                Notification.success({
                        title: 'Success',
                        message: 'Comment created Successfully',
                        type: 'success'
                    });
                events.bus.$emit('load_comments')
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
                state.comments = data
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
