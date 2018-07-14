<script>
    import Widget from '../../vuestic-components/vuestic-widget/VuesticWidget'
    import DataTable from '../../vuestic-components/vuestic-datatable/VuesticDataTable'
    import BadgeColumn from './utils/BadgeColumn.vue'
    import Vue from 'vue'
    import FieldsDef from '../../vuestic-components/vuestic-datatable/data/fields-definition'
    import ItemsPerPageDef from '../../vuestic-components/vuestic-datatable/data/items-per-page-definition'
    import Modal from '../../vuestic-components/vuestic-modal/VuesticModal';
    Vue.component('badge-column', BadgeColumn);
    Vue.component('add-role', require('./utils/add_role.vue'))

    export default {
        components: {
            DataTable,
            Widget,
            Modal
        },
        name: 'Table',
        data () {
            return {
                apiUrl: 'https://vuetable.ratiw.net/api/users',
                apiMode: true,
                tableFields: FieldsDef.tableFields,
                itemsPerPage: ItemsPerPageDef.itemsPerPage,
                sortFunctions: FieldsDef.sortFunctions,
                paginationPath: '',
                showCreateRoleModal: false
            }
        }
    }
</script>

<template>
    <div>

        <div class="row">
            <div class="col-md-12">
                <div class="row add_role_row">
                    <div class="col-md-8">

                    </div>
                    <div class="md-col-4 ">
                        <button class="btn btn-info  btn-micro" @click="showCreateRoleModal = true">
                            Add New Role
                        </button>

                        <el-dialog
                                title=""
                                :visible.sync="showCreateRoleModal">

                            <add-role></add-role>

                        </el-dialog>

                    </div>
                </div>
                <widget headerText="User Roles">
                    <data-table :apiUrl="apiUrl"
                                :tableFields="tableFields"
                                :itemsPerPage="itemsPerPage"
                                :sortFunctions="sortFunctions"
                                :apiMode="apiMode"
                                :paginationPath="paginationPath"></data-table>
                </widget>
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
