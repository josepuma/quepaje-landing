<script setup>
    import { onMounted, onUnmounted, ref } from 'vue';
    const { client } = usePrismic();
    const { data: home } = await useAsyncData("home", () =>
        client.getSingle('home')
    );

    const { $gsap, $ScrollTrigger } = useNuxtApp();
    onMounted(() => {
        $gsap.to('.main-banner', {
            opacity: 1,
            duration: 2
        })
    })

</script>

<template lang="pug">
.h-screen
    section
        img.w-full.main-banner.opacity-0(src="@/assets/img/main_banner.jpg")
</template>