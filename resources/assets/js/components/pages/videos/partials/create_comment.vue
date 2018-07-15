<script>
    export default {
        data: ()=>({
            form: {video_id: this.$router.params.videoId}
        }),
        methods: {
            create_comment(){
                this.$store.commit('CREATE_VIDEO_COMMENT', this.form);
            }
        }
    }
</script>
<template>
    <div class="create_comments">
            <el-form v-model="form">
                <el-form-item label="Description">
                    <el-input
                            type="textarea"
                            :rows="5"
                            placeholder="Please input"
                            v-model="form.comment">
                    </el-input>
                </el-form-item>

                <el-form-item size="mini">
                    <el-button type="primary" @click="create_comment">Create</el-button>
                </el-form-item>

            </el-form>
    </div>
</template>