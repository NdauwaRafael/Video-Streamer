var masabaTableMixin = {
    data() {
        return {
            rowCollection: {},
            tableState: {
                search: '',
                page: 1,
                per_page: this.per_page,
                total: 0,
            },
            promise: true,
            per_page: this.itemsPerPageOptionsInit[0],
            itemsPerPageOptions: this.itemsPerPageOptionsInit,
        }
    },
    props: {
        itemsPerPageOptionsInit: {default: function () {
            return [10, 25, 50, 100];
        }},
    },
    computed: {
        currentPage: function () {
            return this.tableState.page;
        },
        lastPage: function () {
            return Math.ceil(this.tableState.total / this.tableState.per_page);
        },
        itemsPerPage: function () {
            return this.tableState.per_page;
        }
    },
    mounted: function()
    {
        this.callServer();
    },
    methods: {
        callSearch: function () {
            if(this.promise)
            {
                this.promise = false;
                setTimeout(() => {
                    Vue.nextTick(() => this.callServer());
                    this.promise = true
                },400)
            }
        },
        formatPagination: function (response) {
            this.tableState.page = response.current_page;
            this.tableState.per_page = response.per_page;
            this.tableState.total = response.total;
        },
        changePagination: function (page) {
            this.tableState.page = page;
            this.callServer();
        },
        changePerPage: function () {
            this.tableState.per_page = this.per_page;
            this.callServer();
        }
    }
};

export default masabaTableMixin;
