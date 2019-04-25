<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-3">
                <ul class="list-group list-group-flush">
                    <!-- <router-link :to="{ name: 'foundation.intro' }" class="list-group-item">Intro</router-link> -->
                    <nuxt-link :to="{ name: 'foundation-colour' }" class="list-group-item">Colour Palatte</nuxt-link>
                    <nuxt-link :to="{ name: 'foundation-typography' }" class="list-group-item">Typography</nuxt-link>
                </ul>
            </div>
            <!--/.Sidebar -->
            <main class="main-content col-md-8 offset-md-1">
                <nuxt />
            </main>
        </div>
        <!--/.Row -->
    </div>
    <!--/.Container -->
</template>