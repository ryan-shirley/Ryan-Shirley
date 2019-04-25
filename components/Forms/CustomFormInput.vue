<template>
    <span class="input input--nao" :class="filled">
        <input 
            class="input__field input__field--nao"
            :type="type" 
            :id="'input-' + name"
            :value="value"
            v-on:input="$emit('input', $event.target.value)"
            required />

        <label class="input__label input__label--nao" :for="'input-' + name">
            <span class="input__label-content input__label-content--nao">{{ name }}</span>
        </label>
        <svg class="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
        </svg>
    </span>
</template>
<script>
export default {
    name: "custom-form-input",
    props: {
        value: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: false,
            default: 'text'
        },
    },
    watch: {
        value: function (val) {
            if(this.value != '') {
                this.filled = 'input--filled'
            }
            else {
                this.filled = ''
            }
        }
    },
    data() {
        return {
            filled: ''
        }
    }
};
</script>
