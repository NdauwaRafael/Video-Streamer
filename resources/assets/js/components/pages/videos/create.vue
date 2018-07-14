<script>
    import VuesticWizard from '../../vuestic-components/vuestic-wizard/VuesticWizard';
    import VuesticSimpleSelect from '../../vuestic-components/vuestic-simple-select/VuesticSimpleSelect';
    import { Upload } from 'element-ui';
    export default {
        components: {
            VuesticWizard,
            VuesticSimpleSelect,
            'el-upload': Upload
        },
        data () {
            return {
                hsSteps: [
                    {
                        label: 'Step 1. File Name',
                        slot: 'page1',
                        onNext: () => {
                            this.validateFormField('filename')
                        },
                        isValid: () => {
                            return this.isFormFieldValid('filename')
                        }
                    },
                    {
                        label: 'Step 2. Upload Video',
                        slot: 'page2'
                    },
                    {
                        label: 'Step 3. Add Description',
                        slot: 'page3',
                        onNext: () => {
                            this.validateFormField('description')
                        },
                        isValid: () => {
                            this.validateFormField('description')
                        }


                    },
                    {
                        label: 'Step 4. Confirm',
                        slot: 'page4'
                    }
                ],

                form: {},
                VideoName: '',
                file: '',
                description: '',
                hrCountry: '',
                vrName: '',
                vrCountry: '',
                vsName: '',
                vsCountry: '',
                email: '',
                chosenCountry: ''
            }
        },
        methods: {
            isFormFieldValid (field) {
                let isValid = false;
                if (this.formFields[field]) {
                    isValid = this.formFields[field].validated && this.formFields[field].valid
                }
                return isValid
            },
            validateFormField (fieldName) {
                this.$validator.validate(fieldName, this[fieldName])
            }
        }
    }
</script>

<template>
    <div class="form-wizard-page">
        <div class="row">
            <div class="col-md-12">
                <vuestic-widget class="no-h-padding" headerText="Simple Wizard">
                    <vuestic-wizard
                            :steps="hsSteps">
                        <div slot="page1" class="form-wizard-tab-content">
                            <p>In order to identify your specified tutorial Video it is advisable to provide your videos with unique names that are easy to remember and identify with.
                                Kindly provide a relevant name for the tutorial you are about to add in the specified field below!"</p>
                            <div class="form-group with-icon-right" :class="{'has-error': errors.has('filename'), 'valid': isFormFieldValid('filename')}">
                                <div class="input-group">
                                    <input
                                            name="filename"
                                            v-model="form.filename"
                                            v-validate="'required'"
                                            required title=""/>
                                    <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                                    <i class="fa fa-check valid-icon icon-right input-icon"></i>
                                    <label class="control-label">Video Name</label><i class="bar"></i>
                                    <small v-show="errors.has('filename')" class="help text-danger">{{ errors.first('filename') }}</small>
                                </div>
                            </div>
                        </div>
                        <div slot="page2" class="form-wizard-tab-content" >
                            <p>Attach the file!"</p>
                            <el-upload
                                    class="upload-demo"
                                    drag
                                    :auto-upload = 'false'
                                    action="https://jsonplaceholder.typicode.com/posts/" >
                                <i class="el-icon-upload"></i>
                                <div class="el-upload__text">Drop your Video here or <em>click to upload</em></div>
                                <div class="el-upload__tip" slot="tip">mp4/mpeg4 files with a size less than 500mb</div>
                            </el-upload>
                        </div>

                        <div slot="page3" class="form-wizard-tab-content" :class="{'has-error': errors.has('description'), 'valid': isFormFieldValid('description')}">
                            <p>To capture your audience attention, It is advisable you provide a short naration to introduce the viewer to the video. In this section, you can also provide any explanation or apologize for any shortcomings that might occur in the video!"</p>

                            <div class="form-group">
                                <div class="input-group">
                                    <textarea type="text" name="description" v-model="form.description" id="simple-textarea" v-validate="'required'"></textarea>
                                    <label class="control-label" for="simple-textarea">Textarea</label><i class="bar"></i>
                                    <small v-show="errors.has('description')" class="help text-danger">{{ errors.first('description') }}</small>
                                </div>
                            </div>

                        </div>
                        <div slot="page4" class="form-wizard-tab-content">
                            <h4>Confirm selection</h4>
                            <p>
                                By submitting this form, you give consent to tutorial master to publish and make available
                                this video to public domain. Any conflicts arised from this action is not held accountable to the company
                                but to the individual who published it. If you agree, proceed!"
                            </p>
                        </div>
                        <div slot="wizardCompleted" class="form-wizard-tab-content">
                            <h4>Wizard completed!</h4>
                        </div>
                    </vuestic-wizard>
                </vuestic-widget>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    @import "../../../../sass/_variables.scss";
    @import "../../../../../../node_modules/bootstrap/scss/variables";
    @import "../../../../../../node_modules/bootstrap/scss/mixins/breakpoints";

    .widget.simple-vertical-wizard-widget {
        .widget-body {
            padding: 0 $widget-padding;
            @include media-breakpoint-down(sm) {
                padding: $widget-padding 0;
            }
        }
    }

    .form-wizard-page {
        .form-group {
            min-width: 200px;
            max-width: 360px;
            width: 80%;
        }
    }
</style>
