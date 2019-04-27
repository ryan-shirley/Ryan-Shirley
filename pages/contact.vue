<template>
    <div>
        <section class="mt-5 container">
            <div class="section-heading" v-if="!success">
                <h2>Contact Me</h2>
                <p>Why not get in touch if you have a potential project?</p>
            </div>
            <!--/.Heading -->

            <div class="row justify-content-md-center mb-5">
                <div class="col-md-8" v-if="!success">
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

                        <span class="badge badge-danger mt-4" v-if="fail">{{ fail }}</span>

                        <button v-if="!loading" type="submit" class="btn btn-primary mt-5">Submit</button>

                        <button v-if="loading" class="btn btn-primary mt-5 text-white" type="button" disabled>
                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                            Sending...
                        </button>
                    </form>
                </div>

                <div class="col-md-6 text-center" v-if="success">
                    <div class="alert alert-alternate-dark mb-5" role="alert">
                        <h4 class="alert-heading">Success!</h4>
                        Your message has been sent
                    </div>
                    <p>Thanks for getting in touch {{ form.name }}! I will do my best to answer your queries as quick as possible. Thanks in advance for your patience.</p>
                    <p>Have a great day!</p>
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
            }),
            success: false,
            fail: false,
            loading: false
        }
    },
    head () {
        return {
            title: "Contact - Ryan Shirley",
            meta: [
                { hid: 'description', name: 'description', content: 'The easiest way to get in touch with me is through my website. Award winning website designer Ryan Shirley.' }
            ]
        }
    },
    methods: {
            onSubmit() {
                var app = this
                app.loading = true

                // Submits the form via emailjs.com
                this.form.submit()
                    .then(resp => {
                        app.success = true
                        app.loading = false
                        ga('send', 'event', 'Form', 'submit', 'contact-form');
                    })
                    .catch(errors => {
                        console.log(errors)
                        app.loading = false
                        app.fail = 'Oops it looks like soemthing went wrong. Try contacting me via email on info@ryanshirley.ie'
                    })

            }
        }
}
</script>