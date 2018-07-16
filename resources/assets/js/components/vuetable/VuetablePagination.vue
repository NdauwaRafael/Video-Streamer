<template>
  <div v-show="tablePagination && tablePagination.last_page > 1" class="pagination">
    <a @click="loadPage(1)" class="btn-nav" :class="[isOnFirstPage ? 'disabled' : '']">
      First
    </a>
    <a @click="loadPage('prev')" class="btn-nav" :class="[isOnFirstPage ? 'disabled' : '']">
      Previous
    </a>
    <template v-if="notEnoughPages">
      <template v-for="n in totalPage">
        <!--<a @click="loadPage(n)"-->
           <!--:class="['page', isCurrentPage(n) ? 'active' : '']"-->
           <!--v-html="n">-->
        <!--</a>-->
        <a v-if="isCurrentPage(n)">
          Page {{n}}
        </a>
      </template>
    </template>
    <template v-else>
      <template v-for="n in windowSize">
        <a @click="loadPage(windowStart+n-1)"
           :class="['page', isCurrentPage(windowStart+n-1) ? 'active' : '']"
           v-html="windowStart+n-1">
        </a>
      </template>
    </template>
    <a @click="loadPage('next')" :class="['btn-nav',isOnLastPage ? 'disabled' : '']">
          Next
    </a>
    <a @click="loadPage(totalPage)" :class="['btn-nav', isOnLastPage ? 'disabled' : '']">
      Last
    </a>
  </div>
</template>

<script>
    import PaginationMixin from './VuetablePaginationMixin.vue'
    export default {
        mixins: [PaginationMixin],
    }
</script>