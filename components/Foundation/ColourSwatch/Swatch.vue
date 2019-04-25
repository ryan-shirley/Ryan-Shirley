<template>
    <div class="colour-swatch">
        <span class="swatch" :class="className"></span>
        <p><strong class="text-uppercase">{{ text }}</strong><span class="text-muted">{{ hex }}</span></p>
    </div>
</template>
<script>
export default {
    name: "colour-swatch",
    props: {
        text: {
            type: String,
            required: true,
            description: "Text to display for the swatch"
        },
        hex: {
            type: String,
            required: true,
            description: "Hex code for the colour"
        },
        className: {
            type: String,
            required: true,
            description: "Name of class to display colour background"
        }
    }
};
</script>
