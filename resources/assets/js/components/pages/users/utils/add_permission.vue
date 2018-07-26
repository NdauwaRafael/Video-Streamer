<template>
    <div class="add_role">
        <el-form :model="form" label-position="top">
            <el-form-item label="Permission name" >
                <el-input v-model="form.permission" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="addRole">Add Permission</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                form: {}
            }
        },
        methods: {
            addRole() {
                if(this.form.permission !== '') {
                    this.$store.commit('ADD_PERMISSION', this.form);
                }else {
                    this.$message.error('Oops, Cannot submit an empty form. Fill in the role name.');
                }
            }
        },

    }
</script>

<style lang="scss">
    .abc-checkbox, .abc-radio {
        display: flex !important;
        justify-content: flex-start;
    }

    input[type=checkbox]:disabled + label, input[type=radio]:disabled + label,
    input[type=checkbox]:disabled, input[type=radio]:disabled {
        cursor: not-allowed;
    }
</style>
