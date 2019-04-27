<template>
    <div class="jumbo-box work-project animated fadeInUp" :class="className">
        <div class="container">
            <div class="row align-items-center">
                <div :class="orderFirst()">
                    <p class="h6 contrast">{{ secondaryHeading }}</p>
                    <h2 class="heading-shadow mb-4">{{ heading }}</h2>
                    <p class="mb-4">{{ text }}</p>
                    <nuxt-link v-if="btnText && btnLinkInternal" :to="{ name: btnLink }" class="btn text-uppercase mb-5" :class="btnClass" exact>{{ btnText }}</nuxt-link>
                    <a v-if="btnText && !btnLinkInternal" :href="btnLink" target="_blank" class="btn text-uppercase mb-5" :class="btnClass">{{ btnText }}</a>
                </div>
                <div :class="orderSecond()">
                    <picture v-if="!outerImage">
                        <source :srcset="imagePathWebP()" type="image/webp" class="img-fluid" />
                        <source :srcset="imagePath()" type="image/png" class="img-fluid" />
                        <img :src="imagePathWebP()" class="img-fluid" />
                    </picture>
                </div>
            </div>
        </div>
        <picture v-if="outerImage">
            <source :srcset="imagePathWebP()" type="image/webp" />
            <source :srcset="imagePath()" type="image/png" />
            <img :src="imagePathWebP()" />
        </picture>
    </div>
</template>
<script>
export default {
    name: "work-project",
    props: {
        secondaryHeading: {
            type: String,
            required: true
        },
        heading: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        className: {
            type: String,
            required: true
        },
        className: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        swap: {
            type: Boolean,
            required: false
        },
        btnText: {
            type: String,
            required: false
        },
        btnLink: {
            type: String,
            required: false,
            default: ''
        },
        btnLinkInternal: {
            type: Boolean,
            required: false,
        },
        btnClass: {
            type: String,
            required: false,
            default: 'btn-light'
        },
        outerImage: {
            type: Boolean,
            required: false,
            default: false
        },
    },
    methods: {
        imagePath() {
            return require('~/static/images' + this.img + '.png')
        },
        imagePathWebP() {
            return require('~/static/images' + this.img + '.webp')
        },
        orderFirst() {
            if(this.swap) {
                return 'col-md-6 offset-md-1 order-2'
            }
            else {
                return 'col-md-6'
            }
        },
        orderSecond(){
            if(this.swap) {
                return 'col-md-5 order-2 order-md-1'
            }
            else {
                return 'col-md-5 offset-md-1'
            }
        }
    }
};
</script>
