<script>
  export default {
    data () {
      return {
        form: {},
        submitting: false
      }
    },
    methods: {
      onSubmit () {
          this.$http.post('/api/video', this.form)
              .then((response) => {
                  this.loading = false;
                  if(response.status == 200)
                  {
                      var data = response.body;
                      if(data.created)
                      {
                      }
                      else
                      {
                      }
                  }
              }, () => {
              });
      },
    }
  }
</script>

<template>
    <div class="add_video" v-loading="submitting">
        <div class="form_area">
            <el-form ref="form" :model="form" label-position="top" size="mini">

                <el-form-item label="Video Name">
                    <el-input v-model="form.name"  :rows="5" clearable></el-input>
                </el-form-item>

                <el-form-item label="Video Youtube Link">
                    <el-input v-model="form.attachment"  :rows="5" clearable></el-input>
                </el-form-item>

                <el-form-item label="Activity zone">
                    <el-select v-model="form.category" placeholder="please select video category">
                        <el-option label="Public" value="public"></el-option>
                        <el-option label="Private" value="private"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="Video Description">
                    <el-input
                            type="textarea"
                            clearable
                            :rows="5"
                            placeholder="Please input"
                            v-model="form.description">
                    </el-input>
                </el-form-item>

                <el-form-item size="mini">
                    <el-button type="primary" @click="onSubmit">Create</el-button>
                </el-form-item>
            </el-form>

        </div>
    </div>
</template>