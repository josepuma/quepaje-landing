<script setup>
    const { client } = usePrismic();
    const { data: home } = await useAsyncData("home", () =>
        client.getSingle('home')
    );
</script>

<template lang="pug">
div.text-white
    pre {{ home }}
</template>