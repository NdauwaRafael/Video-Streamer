<!--<script>-->

    <!--export default {-->
        <!--name: 'roles',-->
        <!--data () {-->
            <!--return {-->
                <!--apiUrl: 'api/roles',-->
                <!--tableFields:[-->
                    <!--{-->
                        <!--name: '__component:badge-column',-->
                        <!--title: '',-->
                        <!--dataClass: 'text-center'-->
                    <!--},-->
                    <!--{-->
                        <!--name: 'name',-->
                        <!--sortField: 'name'-->
                    <!--}-->
                    <!--],-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->

<!--<template>-->
    <!--<div>-->

        <!--<div class="row">-->
            <!--<div class="col-md-12">-->
                <!--<div class="row add_role_row">-->
                    <!--<div class="col-md-8">-->

                    <!--</div>-->
                    <!--<div class="md-col-4 ">-->
                        <!--<button class="btn btn-info  btn-micro" @click="showCreateRoleModal = true">-->
                            <!--Add New Role-->
                        <!--</button>-->

                        <!--<el-dialog-->
                                <!--title=""-->
                                <!--:visible.sync="showCreateRoleModal">-->

                            <!--<add-role></add-role>-->

                        <!--</el-dialog>-->

                    <!--</div>-->
                <!--</div>-->
                <!--<widget headerText="User Roles">-->
                    <!--<data-table :apiUrl="apiUrl"-->
                                <!--:tableFields="tableFields"-->
                                <!--:itemsPerPage="itemsPerPage"-->
                                <!--:sortFunctions="sortFunctions"-->
                                <!--:apiMode="apiMode"-->
                                <!--:paginationPath="paginationPath"></data-table>-->
                <!--</widget>-->
            <!--</div>-->
        <!--</div>-->

    <!--</div>-->
<!--</template>-->


<!--<style lang="scss">-->

    <!--.add_role_row {-->
        <!--padding-bottom: 15px;-->
    <!--}-->

    <!--.color-icon-label-table {-->
        <!--td:first-child {-->
            <!--width: 1rem;-->
        <!--}-->
    <!--}-->
<!--</style>-->
