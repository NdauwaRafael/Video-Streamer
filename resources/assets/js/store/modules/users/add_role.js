import * as user_api from '../../api/user'

const state = {
    role: ''
}

const mutations = {
    ADD_ROLE(state, role){
        user_api.ADD_USER(role)
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

    VIEW_ROLES(state){
        user_api.VIEW_ROLES()
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
        user_api.VIEW_ROLES_DETAILS(role)
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
        user_api.VIEW_USERS(role)
            .then(({data})=>{
            },
                ()=>{

            })
    },
    VIEW_USER_DETAILS(state, user){
        user_api.VIEW_USER_DETAILS(user_id)
            .then(({data})=>{
            },
                ()=>{

            })
    }
}

export default {
    state,
    mutations,
    actions
}
