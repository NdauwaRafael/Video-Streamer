<script>
    import {mapGetters} from 'vuex';
    export default {
        data: ()=>({
            checkAll: false,
            isIndeterminate: true,
            form: {},
            checkedPermissions: []

        }),
        computed: {
            ...mapGetters({
                permissions: 'permissions',
                rolePermissions: 'rolePermissions'
            })
        },
        watch: {},
        methods: {
            getRolePermissions(){
                let roleId = this.$route.params.roleId;
                this.$store.commit('GET_ROLE_PERMISSIONS', roleId);
            },

            getAllPemissions(){
                this.$store.commit('GET_ALL_PERMISSIONS');
            },

            handleCheckAllChange(val) {
//                this.checkedPermissions = val ? cityOptions : [];
                this.isIndeterminate = false;
            },

//            handleCheckedCitiesChange(value) {
//                let checkedCount = value.length;
//                this.checkAll = checkedCount === this.cities.length;
//                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
//            },
            save_permissions(){
                let roleId = this.$route.params.roleId;
                this.form.permissions = this.rolePermissions;
                this.form.roleId = roleId;
                this.$store.commit('SAVE_ROLE_PERMISSIONS', this.form)
            }
        },
        mounted(){
//            this.getRolePermissions();
            this.getAllPemissions();
        }
    }
</script>
<template>
    <div class="role_permission">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Check all</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="rolePermissions">
            <el-checkbox v-for="permission in permissions" :label="permission.id" :key="permission.id">{{permission.name}}</el-checkbox>
        </el-checkbox-group>

        <el-button type="primary" @click="save_permissions">Save</el-button>
    </div>
</template>


