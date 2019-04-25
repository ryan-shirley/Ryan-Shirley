<template>
    <nav class="navbar navbar-expand-lg navbar-light box-inner">
        <nuxt-link to="/" class="navbar-brand" exact><strong>Ryan</strong> Shirley.</nuxt-link>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
	<span class="icon-bar top-bar"></span>
	<span class="icon-bar middle-bar"></span>
	<span class="icon-bar bottom-bar"></span>				
</button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav ml-auto">
                <nav-bar-item link="index">Home</nav-bar-item>
                <nav-bar-item link="about">About</nav-bar-item>
                <nav-bar-item link="work">Work</nav-bar-item>
                <nav-bar-item link="contact">Contact</nav-bar-item>
                <!-- <nav-bar-item link="foundation-colour">Foundation</nav-bar-item> -->
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    name: "nav-bar",
    watch: {
        '$route' () {
            $('#navbarsExampleDefault').collapse('hide');
            // console.log('Route chnage.')
        }
    }
};
</script>
