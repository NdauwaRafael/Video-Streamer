import { Http } from 'vue-resource'

export const ADD_ROLE_API = function (role) {
    return Http.post('api/role', role);
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
    return Http.get('api/user/details' + user_id);
};