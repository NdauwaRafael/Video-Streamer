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
            <!--<a v-if="authenticate" href="/logout">Logout</a>-->
            <!--<a v-if="!authenticate" href="/login">-->
                <!--<el-button type="success" plain size="mini">Login</el-button>-->
            <!--</a>-->
            <!--<a v-if="!authenticate" href="/register">-->
                <!--<el-button type="danger" plain size="mini">Register</el-button>-->
            <!--</a>-->
        </div>
    </div>
</template>