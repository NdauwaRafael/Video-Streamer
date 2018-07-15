
const LOAD_VIDEO_API = function (video_id) {
    this.$http.get('api/view/roles/'+video_id);
};