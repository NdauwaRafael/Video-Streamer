export const ADD_ROLE_API = function (role) {
    return this.$http.post('api/role', role);
};

export const VIEW_ROLES_API = function (role_id) {
    return this.$http.get('api/view/roles/');
};

export const VIEW_USERS_API = function (user_id) {
    return this.$http.get('api/view/users/');
};
export const VIEW_ROLES_DETAILS_API = function (role_id) {
    return this.$http.get('api/role/' + role_id);
};

export const VIEW_USER_DETAILS_API = function (user_id) {
    return this.$http.get('api/user/details' + user_id);
};