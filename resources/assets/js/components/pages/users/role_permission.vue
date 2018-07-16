<script>
    import {mapGetters} from 'vuex';
    export default {
        data: ()=>({
            checkAll: false,
            cities: cityOptions,
            isIndeterminate: true

        }),
        computed: {
            ...mapGetters({
                permissions: 'permissions',
                rolePermissions: 'rolePermissions'
            })
        },
        methods: {
            getRolePermissions(){
                let roleId = this.$route.params.roleId;
                this.$store.commit('GET_ROLE_PERMISSIONS', roleId);
            },

            getAllPemissions(){
                this.$store.commit('GET_ALL_PERMISSIONS');
            },

            handleCheckAllChange(val) {
                this.checkedCities = val ? cityOptions : [];
                this.isIndeterminate = false;
            },

            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            }
        },
        mounted(){
            this.getRolePermissions();
            this.getAllPemissions();
        }
    }
</script>
<template>
    <div class="role_permission">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Check all</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="rolePermissions" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="permission in permissions" :label="permission" :key="permission">{{permission}}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>


