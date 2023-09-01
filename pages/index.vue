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
            duration: 2,
            y: 0
        })
    })


</script>

<template lang="pug">
div 
    section.min-h-screen
        img.main-banner.w-full.opacity-0(src="@/assets/img/main_banner.jpg")
        .container.mx-auto.px-4
            MainSectionHeader(title="Presentación", content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ratione suscipit expedita illum? Quia corrupti optio expedita voluptatum commodi autem, quibusdam ipsa labore quos cupiditate, sint itaque amet ratione fuga")
</template>