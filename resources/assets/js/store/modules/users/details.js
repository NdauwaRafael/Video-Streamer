import * as user_api from '../../api/user'

const state = {
    role: '',
    loading_users: '',
    rolePermissions: [],
    permissions: []
}

const getters = {
    role: state => state.role,
    rolePermissions: state => state.rolePermissions,
    permissions: state => state.permissions
}

const mutations = {
    ADD_ROLE(state, form) {
        user_api.ADD_ROLE_API(form)
            .then(({data}) => {
                    this.$notify({
                        title: 'Success',
                        message: 'Role Added Successfully',
                        type: 'success'
                    });
                    window.location.reload();
                },
                () => {

                })
    },
    ADD_PERMISSION(state, form) {
        user_api.ADD_PERMISSION_API(role)
            .then(() => {

                },
                () => {

                })
    },
    VIEW_ROLES(state) {
        user_api.VIEW_ROLES_API()
            .then(({data}) => {
                    this.$notify({
                        title: 'Success',
                        message: 'Role Added Successfully',
                        type: 'success'
                    });
                },
                () => {

                })
    },
    GET_ROLE_DETAILS(state, role_id) {
        user_api.GET_ROLE_DETAILS_API(role_id)
            .then(({data}) => {
                    this.$notify({
                        title: 'Success',
                        message: 'Role Added Successfully',
                        type: 'success'
                    });
                    state.role = data.data;
                },
                () => {

                })
    },
    VIEW_ROLE_DETAILS(state) {
        user_api.VIEW_ROLES_DETAILS_API(role)
            .then(({data}) => {
                    this.$notify({
                        title: 'Success',
                        message: 'Role Added Successfully',
                        type: 'success'
                    });
                },
                () => {

                })
    },
    VIEW_USERS(state) {
        user_api.VIEW_USERS_API(role)
            .then(({data}) => {

                },
                () => {

                })
    },
    VIEW_USER_DETAILS(state, user) {
        user_api.VIEW_USER_DETAILS_API(user_id)
            .then(({data}) => {
                },
                () => {

                })
    },
    GET_ROLE_PERMISSIONS(state, roleId) {
        user_api.GET_ROLE_PERMISSIONS_API(roleId)
            .then(({data}) => {
                state.rolePermissions = data;
            }, () => {

            })
    },
    GET_ALL_PERMISSIONS(state) {
        user_api.GET_ALL_PERMISSIONS_API()
            .then(() => {
                    state.permissions = data
                },
                () => {

                })
    }

}

export default {
    state,
    mutations
}
