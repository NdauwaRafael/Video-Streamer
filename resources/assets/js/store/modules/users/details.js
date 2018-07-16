import * as user_api from '../../api/user'

const state = {
    role: '',
    loading_users: ''
}

const mutations = {
    ADD_ROLE(state, form){
        user_api.ADD_ROLE_API(form)
            .then(({data})=>{
                    this.$notify({
                        title: 'Success',
                        message: 'Role Added Successfully',
                        type: 'success'
                    });
                    window.location.reload();
            },
                ()=>{

            })
    },

    VIEW_ROLES(state){
        user_api.VIEW_ROLES_API()
            .then(({data})=>{
                    this.$notify({
                        title: 'Success',
                        message: 'Role Added Successfully',
                        type: 'success'
                    });
            },
                ()=>{

            })
    },
    VIEW_ROLE_DETAILS(state){
        user_api.VIEW_ROLES_DETAILS_API(role)
            .then(({data})=>{
                    this.$notify({
                        title: 'Success',
                        message: 'Role Added Successfully',
                        type: 'success'
                    });
            },
                ()=>{

            })
    },
    VIEW_USERS(state){
        user_api.VIEW_USERS_API(role)
            .then(({data})=>{
            },
                ()=>{

            })
    },
    VIEW_USER_DETAILS(state, user){
        user_api.VIEW_USER_DETAILS_API(user_id)
            .then(({data})=>{
            },
                ()=>{

            })
    }
}

export default {
    state,
    mutations
}
