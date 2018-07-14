const ADD_ROLE = function (role) {
    this.$http.post('api/role', role)
}

const VIEW_ROLES = function (role_id) {
    this.$http.post('api/view/roles/')
}

const VIEW_USERS = function (user_id) {
    this.$http.post('api/view/users/)
}
const VIEW_ROLE_DETAILS = function (role_id) {
    this.$http.post('api/view/roles/details' + role_id)
}

const VIEW_USER_DETAILS = function (user_id) {
    this.$http.post('api/view/users/details' + user_id)
}