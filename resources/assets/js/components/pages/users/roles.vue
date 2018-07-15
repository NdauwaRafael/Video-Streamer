<script>
    import vueTableMixin from "../../../mixins/vuetable_mixin";
    import Vue from 'vue';
    Vue.component('badge-column', require('../utils/BadgeColumn.vue'))
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
                    }
                    ],
                tableState: {},
                promise: true,
                dashboardTableItemsPerPage: 5,
            }
        }
    }
</script>

<template>
    <div class="table_container">
        <vuetable ref="vuetable"
                  :api-url="apiUrl"
                  :fields="tableFields"
                  pagination-path=""
                  @vuetable:pagination-data="onPaginationData"
                  :append-params="tableState"
                  :per-page="itemsPerPage"
        >
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
