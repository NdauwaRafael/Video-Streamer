import { Http } from 'vue-resource'

export const ADD_ROLE_API = function (form) {
    return Http.post('/api/role', form);
};

export const ADD_PERMISSION_API = function (form) {
    return Http.post('api/permission/add', form);
};

export const VIEW_ROLES_API = function (role_id) {
    return Http.get('api/view/roles/');
};

export const VIEW_USERS_API = function (user_id) {
    return Http.get('api/view/users/');
};
export const VIEW_ROLES_DETAILS_API = function (role_id) {
    return Http.get('api/role/' + role_id);
};

export const VIEW_USER_DETAILS_API = function (user_id) {
    return Http.get('api/user/details/' + user_id);
};
export const GET_ROLE_DETAILS_API = function (role_id) {
    return Http.get('api/role/details/' + role_id);
};
export const GET_ROLE_PERMISSIONS_API = function (role_id) {
    return Http.get('api/role/permissions/' + role_id);
};
export const GET_ALL_PERMISSIONS_API = function () {
    return Http.get('api/permissions');
};