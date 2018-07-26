import { Http } from 'vue-resource'
export const CREATE_VIDEO_COMMENT_API = function (form) {
    return Http.post('/api/comment/' + form.video_id, form);
};
export const LOAD_COMMENTS_API = function (video_id) {
    return Http.get('/api/comment/' + video_id);
};