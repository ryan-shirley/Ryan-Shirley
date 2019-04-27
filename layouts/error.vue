<template>
  <section class="error-404 bg-primary">

        <div class="container">
            <div class="row align-items-center justify-content-md-center text-center">
                <div class="col-md-8">
                    <picture>
                        <source srcset="~/static/images/404.webp" type="image/webp" class="img-fluid mb-5" />
                        <source srcset="~/static/images/404.png" type="image/png" class="img-fluid mb-5" />
                        <img src="~/static/images/404.webp" class="img-fluid mb-5" />
                    </picture>
                    <h1 v-if="error.statusCode === 404" class="h3">Oops. The page you were looking for doesn't exit.</h1>
                    <h1 v-else>An error occurred</h1>
                    <p>You may have typed the wrong address or the page has been removed.</p>
                    <pre class="text-white mb-5">Error code: {{ statusCode }}</pre>
                    <nuxt-link to="/" class="btn btn-light text-uppercase" exact>Take me back Home</nuxt-link>
                </div>
            </div>
        </div>
            
  </section>
</template>

<script>
export default {
  props: ['error'],
  head() {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
        }
      ]
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || `<%= messages.client_error %>`
    }
  }
}
</script>