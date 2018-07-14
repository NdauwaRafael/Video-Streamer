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
    }
}

export default {
    state,
    mutations,
    actions
}
