<script>
    import vueTableMixin from "../../../mixins/vuetable_mixin";
    import Vue from 'vue';
    Vue.component('badge-column', require('../utils/BadgeColumn.vue'))
    export default {
        mixins: [vueTableMixin],
        name: 'users',
        data() {
            return {
                apiUrl: 'api/users',
                apiMode: true,
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
                    },
                    {
                        name: 'Options',
                        title: 'Options'
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
            <!--<template slot="actions"  slot-scope="props">-->
                <!--<div class="custom-actions">-->
                    <!--<md-button class="md-icon-button" @click="onView( props.rowData, props.rowIndex)">-->
                        <!--<md-icon>visibility</md-icon>-->
                    <!--</md-button>-->

                <!--</div>-->
            <!--</template>-->
            <!--<template slot="status"  slot-scope="props">-->
                <!--<div class="label secondary"-->
                     <!--:class="{'success': props.rowData.status.slug == 'in_progress',-->
                                         <!--'warning': props.rowData.status.slug == 'on_hold',-->
                                         <!--'primary': props.rowData.status.slug == 'escalated',-->
                                           <!--'closed': props.rowData.status.slug == 'closed',-->
                                            <!--'unassigned': props.rowData.status.slug=='unassigned'}-->
<!--">-->
                    <!--{{props.rowData.status.name}}-->
                <!--</div>-->
            <!--</template>-->
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

    .color-icon-label-table {
        td:first-child {
            width: 1rem;
        }
    }
</style>
