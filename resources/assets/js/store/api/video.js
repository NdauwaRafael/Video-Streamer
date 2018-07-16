
export const LOAD_VIDEO_API = function (video_id) {
    return this.$http.get('api/view/roles/'+video_id);
};