<script>
    export default {
      props: ['authenticate']
    }
</script>
<template>
    <div class="main_page__topbar__content">
        <div class="title">
            <a>
                <i class="material-icons"> menu</i>
            </a>
            <h3>Tutorials Master</h3>
        </div>

        <div class="content">
            <a v-if="authenticate" href="/logout">Logout</a>
        </div>
    </div>
</template>