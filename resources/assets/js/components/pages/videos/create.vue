<script>
    export default {
        data() {
            return {
                form: {
                }
            };
        },
        methods: {
            onSubmit() {
            }
        }
    };
</script>

<template>
    <div class="add_video">
        <div class="form_area">
            <el-form ref="form" :model="form" label-position="top" size="mini">

                <el-form-item label="Video Name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>

                <el-form-item label="Activity zone">
                    <el-select v-model="form.category" placeholder="please select video category">
                        <el-option label="Public" value="public"></el-option>
                        <el-option label="Private" value="private"></el-option>
                    </el-select>
                </el-form-item>


                <el-form-item label="Description">
                    <el-input
                            type="textarea"
                            :rows="5"
                            placeholder="Please input"
                            v-model="form.description">
                    </el-input>
                </el-form-item>

                <el-form-item label="Upload File">

                    <el-upload
                            class="upload-demo"
                            drag
                            v-model="form.video"
                            action="https://jsonplaceholder.typicode.com/posts/"
                    >
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">Drop your Video here or <em>click to upload</em></div>
                        <div class="el-upload__tip" slot="tip">files with a size less than 500mb</div>
                    </el-upload>
                </el-form-item>

                <el-form-item size="mini">
                    <el-button type="primary" @click="onSubmit">Create</el-button>
                </el-form-item>
            </el-form>

        </div>
    </div>
</template>