<template>
    <div class="mb-5">
        <h3><slot name="heading"></slot></h3>
        <hr />
        <p><slot name="text"></slot></p>
    </div>
</template>
<script>
export default {
    name: "foundation-heading",
};
</script>
