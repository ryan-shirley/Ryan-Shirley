<template>
    <footer class="container-fluid" :class="visible" v-observe-visibility="visibilityChanged">
        <div class="top"><span class="logo"><strong>Ryan</strong> Shirley.</span></div>
        <ul class="socials">
            <li><a href="https://www.behance.net/ryan-shirley/" target="_blank"><font-awesome-icon :icon="['fab', 'behance']"/></a></li>
            <li><a href="https://linkedin.com/in/ryan-shirley-a7606a92/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']"/></a></li>
            <li><a href="https://www.instagram.com/ryan_shirley1/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']"/></a></li>
        </ul>
        <small>&copy; Ryan Shirley {{ getYear() }}</small><br />
        <small><nuxt-link :to="{ name: 'privacy-policy' }" >Privacy Policy</nuxt-link></small>
    </footer>
</template>
<script>
export default {
    name: "custom-footer",
    methods: {
        getYear() {
            var today = new Date();
            return today.getFullYear();
        },
        visibilityChanged (isVisible, entry) {
            if(isVisible) {
                this.visible = 'visible';
            }
            else {
                this.visible = '';
            }
            // this.visible = isVisible
            // console.log(entry)
        }
    },
    data() {
        return {
            visible: 'visible'
        }
    }
};
</script>
