
export const CREATE_VIDEO_COMMENT_API = function (form) {
    return this.$http.post('api/comments/create', form);
};
export const LOAD_COMMENTS_API = function (video_id) {
    return this.$http.post('api/comments/' + video_id);
};