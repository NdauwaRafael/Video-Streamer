<script>
  import { mapGetters } from 'vuex'

  export default {

    data: () => ({
      checkAll: false,
      isIndeterminate: true,
      form: {
      },
      checkedPermissions: []

    }),

    computed: {
      ...mapGetters({
        permissions: 'permissions',
        rolePermissions: 'rolePermissions'
      })
    },

    methods: {
      getRolePermissions () {
        let roleId = this.$route.params.roleId
        this.$store.commit('GET_ROLE_PERMISSIONS', roleId)
      },

      getAllPemissions () {
        this.$store.commit('GET_ALL_PERMISSIONS')
      },

      save_permissions () {
        let role_id = this.$route.params.roleId
        this.form.permissions = this.checkedPermissions
        this.form.role_id = role_id
        this.$store.commit('SAVE_ROLE_PERMISSIONS', this.form)
      }
    },

    mounted () {
//            this.getRolePermissions();
      this.getAllPemissions()
    }
  }
</script>
<template>
    <div class="role_permission">
        <el-checkbox-group v-model="checkedPermissions" class="individual_permissions">
            <el-checkbox v-for="permission in permissions" :key="permission.value" :label="permission.value">
                {{permission.label}}
            </el-checkbox>
        </el-checkbox-group>

        <el-button type="primary" @click="save_permissions">Save</el-button>
    </div>
</template>


