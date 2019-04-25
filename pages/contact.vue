<template>
    <div>
        <section class="mt-5 container">
            <div class="section-heading">
                <h2>Contact Me</h2>
                <p>A small snippet to the collection of my work to date including both design to development</p>
            </div>
            <!--/.Heading -->

            <div class="row justify-content-md-center">
                <div class="col-md-8">
                    <form @submit.prevent="onSubmit">
                        <div class="row">
                            <div class="col-md-6">
                                <custom-form-input 
                                    name="Name*" 
                                    v-model="form.name"/>
                            </div>
                            <div class="col-md-6">
                                <custom-form-input 
                                    name="Email*" 
                                    v-model="form.email"
                                    type="email" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <custom-form-input 
                                    name="Message*" 
                                    v-model="form.message"/>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary mt-5">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Form from '~/plugins/Form.js'

export default {
    data() {
        return {
            form: new Form({
                name: '',
                email: '',
                message: '',
            })
        }
    },
    head () {
        return {
            title: "Contact",
            meta: [
                { hid: 'description', name: 'description', content: '' }
            ]
        }
    },
    methods: {
            onSubmit() {
                var app = this;

                // Submits the form via emailjs.com
                this.form.submit()
                    .then(resp => {
                        console.log(resp)
                        console.log('Successful')
                    })
                    .catch(errors => console.log(errors))

            }
        }
}
</script>