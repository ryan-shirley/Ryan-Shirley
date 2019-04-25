<template>
    <div>
        <section class="mb-7">
            <foundation-heading>
                <template v-slot:heading>Brand UI Colours</template>
                <template v-slot:text>Colours are the core of this site used to define me. Inspired by the bold colours of the ‘PINK’ brand crafted for daily work. Pink is the colour of universal love of oneself and of others. Cheers to being happy and healthy.</template>
            </foundation-heading>

            <colour-swatch-list>
                    <colour-swatch 
                        text="Primary"
                        hex="#F2A8AC"
                        className="bg-primary">
                    </colour-swatch>
                    <colour-swatch 
                        text="Secondary"
                        hex="#4A90E2"
                        className="bg-secondary">
                    </colour-swatch>
                    <colour-swatch 
                        text="Alternate"
                        hex="#A9F0D1"
                        className="bg-alternate">
                    </colour-swatch>
            </colour-swatch-list>
            <!--/.Main Colours -->

            <colour-swatch-list>
                <colour-swatch 
                    text="Primary Dark"
                    hex="#D98F93"
                    className="bg-primary-dark">
                </colour-swatch>
                <colour-swatch 
                    text="Secondary Dark"
                    hex="#3177C9"
                    className="bg-secondary-dark">
                </colour-swatch>
                <colour-swatch 
                    text="Alternate Dark"
                    hex="#90D7B8"
                    className="bg-alternate-dark">
                </colour-swatch>
            </colour-swatch-list>
            <!--/.Darkened Colours -->

            <colour-swatch-list>
                <colour-swatch 
                    text="Primary Light"
                    hex="#FFC2C6"
                    className="bg-primary-light">
                </colour-swatch>
                <colour-swatch 
                    text="Secondary Light"
                    hex="#64AAFC"
                    className="bg-secondary-light">
                </colour-swatch>
                <colour-swatch 
                    text="Alternate Light"
                    hex="#C3FFEB"
                    className="bg-alternate-light">
                </colour-swatch>
            </colour-swatch-list>
            <!--/.Darkened Colours -->
        </section>
        <!--/.Brand UI Colours -->

        <section>
            <foundation-heading>
                <template v-slot:heading>Brand Typography Colours</template>
                <template v-slot:text>Colours are the core of this site used to define me. Inspired by the bold colours of the ‘PINK’ brand crafted for daily work. Pink is the colour of universal love of oneself and of others. Cheers to being happy and healthy.</template>
            </foundation-heading>

            <div class="row">
                <div class="col-md-6">
                    <h5>Headings</h5>

                    <colour-swatch-list>
                            <colour-swatch 
                                text="Primary"
                                hex="#343638"
                                className="bg-dark">
                            </colour-swatch>
                            <colour-swatch 
                                text="Secondary"
                                hex="#4A90E2"
                                className="bg-secondary">
                            </colour-swatch>
                    </colour-swatch-list>
                    <!--/.Colour Swatches -->
                </div>
                <!--/.Headings -->

                <div class="col-md-6">
                    <h5>Text</h5>

                    <colour-swatch-list>
                        <colour-swatch 
                            text="Primary"
                            hex="#777777"
                            className="bg-text-primary">
                        </colour-swatch>
                        <colour-swatch 
                            text="Secondary"
                            hex="#343638"
                            className="bg-text-secondary">
                        </colour-swatch>
                        <colour-swatch 
                            text="Alternate"
                            hex="#4A90E2"
                            className="bg-secondary">
                        </colour-swatch>
                    </colour-swatch-list>
                    <!--/.Colour Swatches -->
                </div>
                <!--/.Headings -->
            </div>
        </section>
        <!--/.Brand Typography Colours -->

    </div>
</template>
<script>
    
    export default {
        layout: 'foundation'
    };
</script>