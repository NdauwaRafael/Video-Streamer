<script>
    import vueTableMixin from "../../../../mixins/vuetable_mixin";
    import Vue from 'vue';

    Vue.component('badge-column', require('../../utils/BadgeColumn.vue'))
    export default {
        mixins: [vueTableMixin],
        name: 'users',
        data() {
            return {
                apiUrl: 'api/video',
                apiMode: true,
                tableFields: [
                    {
                        name: '__component:badge-column',
                        title: '',
                        dataClass: 'text-center'
                    },
                    {
                        name: 'name',
                        sortField: 'name',
                        title: 'Video Name'
                    },
                    {
                        name: 'category',
                        sortField: 'email',
                        title: 'Video Category'

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

            }

        },
        methods: {
            onView(){
                this.$router.push({name: 'view_video', params: { videoId: 123 }})
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
</template>