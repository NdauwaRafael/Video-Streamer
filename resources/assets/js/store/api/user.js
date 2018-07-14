const ADD_ROLE_API = function (role) {
    this.$http.post('api/role', role);
};

const VIEW_ROLES_API = function (role_id) {
    this.$http.get('api/view/roles/');
};

const VIEW_USERS_API = function (user_id) {
    this.$http.get('api/view/users/');
};
const VIEW_ROLES_DETAILS = function (role_id) {
    this.$http.get('api/role/' + role_id);
};

const VIEW_USER_DETAIL_API = function (user_id) {
    this.$http.get('api/user/details' + user_id);
};