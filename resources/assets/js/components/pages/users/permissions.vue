<script>
    import vueTableMixin from "../../../mixins/vuetable_mixin";
    import Vue from 'vue';
    Vue.component('badge-column', require('../utils/BadgeColumn.vue'));
    Vue.component('add-permission', require('./utils/add_permission.vue'))
    export default {
        mixins: [vueTableMixin],
        name: 'roles',
        data() {
            return {
                apiUrl: 'api/permissions',
                tableFields:[
                    {
                        name: '__component:badge-column',
                        title: '',
                        dataClass: 'text-center'
                    },
                    {
                        name: 'name',
                        sortField: 'name',
                        title: 'Permission Name'
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
                dialogAddPermissionDialog: false
            }
        },
        methods: {
            onView(){
//                this.$router.push({name: 'view_permission', params: { permissionId: 123 }})
            }
        }
    }
</script>

<template>
    <div class="user_roles">
        <div class="user_roles__head">
            <div>
                <el-button type="primary" @click="dialogAddPermissionDialog = true" round>Add Permissio </el-button>
                <el-dialog :modal-append-to-body="false" title="Add New Role" :visible.sync="dialogAddPermissionDialog">
                    <add-permission></add-permission>
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
