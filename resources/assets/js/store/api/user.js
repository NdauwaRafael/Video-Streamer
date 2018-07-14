const ADD_ROLE = function (role) {
    this.$http.post('api/role', role)
}