<script>
    import Widget from '../../vuestic-components/vuestic-widget/VuesticWidget'
    import DataTable from '../../vuestic-components/vuestic-datatable/VuesticDataTable'
    import BadgeColumn from './utils/BadgeColumn.vue'
    import Vue from 'vue'
    import ItemsPerPageDef from '../../vuestic-components/vuestic-datatable/data/items-per-page-definition'

    Vue.component('badge-column', BadgeColumn)

    export default {
        components: {
            DataTable,
            Widget
        },
        name: 'Table',
        data() {
            return {
                apiUrl: 'api/users',
                apiMode: true,
                itemsPerPage: ItemsPerPageDef.itemsPerPage,
                paginationPath: '',
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
                        name: 'email',
                        sortField: 'email'
                    },
                    {
                        name: 'role',
                        title: 'Role'
                    }
                ],
                sortFunctions: {
                    'name': function (item1, item2) {
                        return item1 >= item2 ? 1 : -1
                    },
                    'email': function (item1, item2) {
                        return item1 >= item2 ? 1 : -1
                    }
                }
            }

    }
    }
</script>

<template>
    <div>

        <div class="row">
            <div class="col-md-12">
                <widget headerText="All Users">
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

    .color-icon-label-table {
        td:first-child {
            width: 1rem;
        }
    }
</style>
