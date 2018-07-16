<script>
    import vueTableMixin from "../../../mixins/vuetable_mixin";
    import Vue from 'vue';
    Vue.component('badge-column', require('../utils/BadgeColumn.vue'));
    Vue.component('add-role', require('./utils/add_role.vue'))
    export default {
        mixins: [vueTableMixin],
        name: 'roles',
        data() {
            return {
                apiUrl: 'api/roles',
                tableFields:[
                    {
                        name: '__component:badge-column',
                        title: '',
                        dataClass: 'text-center'
                    },
                    {
                        name: 'name',
                        sortField: 'name'
                    },
                    {
                        name: '__slot:actions',
                        title: 'Options',
                        titleClass: 'center aligned',
                        dataClass: 'center aligned'
                    }

                ],
                tableState: {},
                promise: true,
                dashboardTableItemsPerPage: 5,
                dialogAddRoleDialog: false
            }
        },
        methods: {
            onView(){
                this.$router.push({name: 'view_role', params: { roleId: 123 }})
            }

        }
    }
</script>

<template>
    <div class="user_roles">
        <div class="user_roles__head">
            <div>
                <el-button type="primary" @click="dialogAddRoleDialog = true" round>Add Role</el-button>
                <el-dialog :modal-append-to-body="false" title="Add New Role" :visible.sync="dialogAddRoleDialog">
                    <add-role></add-role>
                </el-dialog>
            </div>
        </div>
        <div class="user_roles__body">
            <div class="table_container">
                <vuetable ref="vuetable"
                          :api-url="apiUrl"
                          :fields="tableFields"
                          pagination-path=""
                          @vuetable:pagination-data="onPaginationData"
                          :append-params="tableState"
                          :per-page="itemsPerPage"
                >
                    <template slot="actions" slot-scope="props">
                        <div class="custom-actions">
                            <a @click="onView( props.rowData, props.rowIndex)">
                                <i class="material-icons">visibility</i>
                            </a>
                        </div>
                    </template>

                </vuetable>

                <div class="vuetable-pagination table_pagination">
                    <div class="items_per_page">
                        <span>Rows per Page</span>
                        <select v-model="itemsPerPage" @change="changePerPage">
                            <option v-for="option in itemsPerPageOptions" :value="option">{{ option }}</option>
                        </select>
                    </div>
                    <div>
                        <vuetable-pagination-info ref="paginationInfo"
                                                  info-class="pagination-info"
                        ></vuetable-pagination-info>
                    </div>

                    <div class="">
                        <vuetable-pagination ref="pagination"
                                             @vuetable-pagination:change-page="onChangePage"
                        ></vuetable-pagination>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>


<style lang="scss">

    .add_role_row {
        padding-bottom: 15px;
    }

    .color-icon-label-table {
        td:first-child {
            width: 1rem;
        }
    }
</style>
