import Vuetable from '../components/vuetable/Vuetable.vue'
import VuetablePagination from '../components/vuetable/VuetablePagination.vue'
import VuetablePaginationInfo from '../components/vuetable/VuetablePaginationInfo.vue'

var vueTableMixin = {
    components: {
        Vuetable,
        VuetablePagination,
        VuetablePaginationInfo,
    },
    data() {
        return {
            tableId: 'masaba_table',
            itemsPerPage: this.itemsPerPageOptionsInit[0],
            itemsPerPageOptions: this.itemsPerPageOptionsInit,
        }
    },
    props: {
        itemsPerPageOptionsInit: {default: function () {
            return [5,10, 25, 50, 100];
        }},
    },
    methods: {
        onPaginationData(paginationData)
        {
            this.$refs.pagination.setPaginationData(paginationData);
            this.$refs.paginationInfo.setPaginationData(paginationData)
        },
        onChangePage (page)
        {
            this.$refs.vuetable.changePage(page)
        },
        changePerPage() {
            this.tableState.per_page = this.itemsPerPage;
            Vue.nextTick(() => this.$refs.vuetable.refresh())
        }
    },
    events: {
        'search-set'(searchText) {
            if(searchText.id == this.tableId)
            {
                this.tableState.search = searchText.data;

                if(this.promise)
                {
                    this.promise = false;
                    setTimeout(() => {
                        if(this.$refs.vuetable != undefined)
                        {
                            Vue.nextTick(() => this.$refs.vuetable.refresh());
                            this.promise = true
                        }
                    },400)
                }
            }
        },
        'filter-set'(filters){
            if(filters.id == this.tableId) {
                if(filters != {}){
                    this.tableState.filter = filters.data

                    if(this.promise)
                    {
                        this.promise = false;
                        setTimeout(() => {
                            if(this.$refs.vuetable != undefined)
                            {
                                Vue.nextTick(() => this.$refs.vuetable.refresh());
                                this.promise = true
                            }
                        },400)
                    }
                }
            }

        }
    }
};

export default vueTableMixin;
