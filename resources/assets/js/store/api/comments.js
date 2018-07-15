
const CREATE_VIDEO_COMMENT_API = function (form) {
    this.$http.post('api/comments/create', form);
};
const LOAD_COMMENTS_API = function (video_id) {
    this.$http.post('api/comments/' + video_id);
};