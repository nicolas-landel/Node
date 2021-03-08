<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ green: theme === 'green' }">
            <h1>{{ header }}</h1>
            <p>Are sure you wanna see the todos?</p>
            <button>Yes!</button>
            <button>No</button>
        </div>
    </div>    
</template>

<script>
export default {
    props: ['header'],
    methods: {
        closeModal () {
            this.$emit('close')
        }
    }
}
</script>

<style>
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop {
        top: 0;
        position: relative;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
    .green {
        background-color: green;
    }
</style>
