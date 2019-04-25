<template>
    <div>

        <section class="mb-7">
            <foundation-heading>
                <template v-slot:heading>Brand Typeface</template>
                <template v-slot:text>Colours are the core of this site used to define me. Inspired by the bold colours of the ‘PINK’ brand crafted for daily work. Pink is the colour of universal love of oneself and of others. Cheers to being happy and healthy.</template>
            </foundation-heading>

            <div class="row type-example font-heading">
                <div class="col-md-4">
                    <h5 class="sample">Aa</h5>
                    <p>Montserrat</p>
                    <small>ABCDEFGHIKLMNOPQRSTVXYZ</small>
                </div>
                <div class="col-md-4 font-body">
                    <h5 class="sample">Aa</h5>
                    <p>Open Sans</p>
                    <small>ABCDEFGHIKLMNOPQRSTVXYZ</small>
                </div>
            </div>
        </section>

        <section class="mb-7">
            <foundation-heading>
                <template v-slot:heading>Type Information</template>
                <template v-slot:text>Colours are the core of this site used to define me. Inspired by the bold colours of the ‘PINK’ brand crafted for daily work. Pink is the colour of universal love of oneself and of others. Cheers to being happy and healthy.</template>
            </foundation-heading>

            <type-details 
                tag="h1" 
                text="Heading 1"
                family="Monsterrat"
                weight="400 / Regular">
            </type-details>

            <type-details 
                tag="h2" 
                text="Heading 2"
                family="Monsterrat"
                weight="400 / Regular">
            </type-details>

            <type-details 
                tag="h3" 
                text="Heading 3"
                family="Monsterrat"
                weight="400 / Regular">
            </type-details>

            <type-details 
                tag="h4" 
                text="Heading 4"
                family="Monsterrat"
                weight="400 / Regular">
            </type-details>

            <type-details 
                tag="h5" 
                text="Heading 5"
                family="Monsterrat"
                weight="400 / Regular">
            </type-details>

            <type-details 
                tag="h6" 
                text="Heading 6"
                family="Monsterrat"
                weight="400 / Regular">
            </type-details>

            <type-details 
                tag="p" 
                text="Text"
                family="Open Sans"
                weight="400 / Regular">
            </type-details>

        </section>
        <!--/.Type Details -->

    </div>
</template>
<script>
  export default {
      layout: 'foundation'
  };
</script>