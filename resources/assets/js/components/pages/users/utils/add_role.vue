<template>
    <div class="form-elements">
        <div class="row">
            <div class="col-md-12">
                <vuestic-widget headerText="Add New Role">
                    <form>
                        <div class="row">
                            <div class="col-md-8">
                                <fieldset>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <input id="simple-input" v-model="role" required/>
                                            <label class="control-label" for="simple-input">Role Name</label><i
                                                class="bar"></i>
                                        </div>
                                    </div>

                                </fieldset>
                            </div>

                            <div class="col-md-4">
                                <fieldset>
                                    <button class="btn btn-primary btn-micro hover" @click="addRole">
                                        Add Role
                                    </button>
                                </fieldset>
                            </div>
                        </div>

                    </form>
                </vuestic-widget>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        name: 'form-elements',
        data() {
            return {
                role: ''
            }
        },
        methods: {
            addRole() {
                if(this.role !== '') {
                    this.$store.commit('ADD_ROLE', this.role);
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
