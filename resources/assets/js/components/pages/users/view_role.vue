<script>
    export default {
        data:()=>({

        }),
        methods: {
            getRole(){
                let role_id = this.$route.params.roleId;
                this.$store.commi('GET_ROLE_DETAILS', role_id)
            }
        }
    }
</script>
<template>
    <div class=""></div>
</template>