<script>
    export default {
        data:()=>({

        }),
        methods: {
            getRole(){
                let role_id = this.$route.params.roleId;
                this.$store.commi('GET_ROLE_DETAILS', role_id)
            },
            addPermission(){
                let role_id = this.$route.params.roleId;
                this.$router.push({name: 'add_permissions_to_role', params: { roleId }})
            }
        }
    }
</script>
<template>
    <div class="role_details">
        <div class="role_details__head">
            <el-button type="primary" @click="addPermission" >Add Permission to role</el-button>
        </div>
        <div class="role_details__body">

        </div>
    </div>
</template>