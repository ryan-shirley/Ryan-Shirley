<template>
    <div class="mb-5">
        <component :is="tag" class="mb-4">{{ text }}</component>
        <div class="row">
            <div class="col-md-4">
                <p>Family - <strong>{{ family }}</strong></p>
            </div>
            <div class="col-md-4">
                <p>Weight - <strong>{{ weight }}</strong></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "type-details",
    props: {
        tag: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        classes: {
            type: String,
            required: false
        },
        family: {
            type: String,
            required: true
        },
        weight: {
            type: String,
            required: true
        }
    }
};
</script>
