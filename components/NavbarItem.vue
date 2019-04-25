<template>
    <li class="nav-item" v-bind:class="getActive()">
        <nuxt-link :to="{ name: link }" class="nav-link" exact><slot></slot></nuxt-link>
    </li>
</template>
<script>
export default {
    name: "nav-bar-item",
    props: {
        link: {
            type: String,
            required: true
        },
    },
    methods: {
        getActive() {
            if(this.$nuxt.$route.name == this.link) {
                return 'active'
            }
            return ''
        }
    }
};
</script>
