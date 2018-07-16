<template>
    <div class="filter-bar ui basic segment grid">
        <div class="ui form">
            <div class="inline field">
                <input type="text" v-model="searchText" class="three wide column" @keyup="doSearch" placeholder="Search ...">
                <select v-model="itemsPerPage" @change="changePerPage">
                    <option v-for="option in itemsPerPageOptions" :value="option">{{ option }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        data () {
            return {
                searchText: '',
                itemsPerPage: this.itemsPerPageOptionsInit[0],
                itemsPerPageOptions: this.itemsPerPageOptionsInit,
            }
        },
        methods: {
            doSearch () {
                this.$events.fire('search-set', {'id': this.tableId, 'data': this.searchText})
            },
            changePerPage() {
                this.$events.fire('change-perPage', {'id': this.tableId, 'data': this.itemsPerPage})
            }
        },
        props: {
            itemsPerPageOptionsInit: {default: function () {
                return [10, 25, 50, 100];
            }},
            tableId:{default: 'masaba_table'}
        },
    }
</script>