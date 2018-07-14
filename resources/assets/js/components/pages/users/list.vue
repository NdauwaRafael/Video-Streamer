<script>
    import Widget from '../../vuestic-components/vuestic-widget/VuesticWidget'
    import DataTable from '../../vuestic-components/vuestic-datatable/VuesticDataTable'
    import BadgeColumn from './utils/BadgeColumn.vue'
    import Vue from 'vue'
    import FieldsDef from '../../vuestic-components/vuestic-datatable/data/fields-definition'
    import ItemsPerPageDef from '../../vuestic-components/vuestic-datatable/data/items-per-page-definition'

    Vue.component('badge-column', BadgeColumn)

    export default {
        components: {
            DataTable,
            Widget
        },
        name: 'Table',
        data () {
            return {
                apiUrl: 'api/users',
                apiMode: true,
                tableFields: FieldsDef.tableFields,
                itemsPerPage: ItemsPerPageDef.itemsPerPage,
                sortFunctions: FieldsDef.sortFunctions,
                paginationPath: ''
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
