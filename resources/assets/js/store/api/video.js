import { Http } from 'vue-resource'

export const LOAD_VIDEO_API = function (video_id) {
    return Http.get('api/video/'+video_id);
};

export const LOAD_VIDEOS_API = function () {
    return Http.get('api/video');
};