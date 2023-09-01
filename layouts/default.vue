<script setup lang="ts">

    useHead({
        title: 'Güepajé - Encuentro de las cumbias del Perú'
    })

</script>

<template lang="pug">
.bg-black
    slot
</template>

<style>

    *{
        font-family: 'Montserrat', sans-serif;
    }

    .page-enter-active,
    .page-leave-active {
    transition: all 0.4s;
    }
    .page-enter-from,
    .page-leave-to {
    opacity: 0;
    filter: blur(.2rem);
    }

</style>