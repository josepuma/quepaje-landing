<script setup lang="ts">
    const { $gsap, $ScrollTrigger } = useNuxtApp();
    onMounted(() => {
        const tl = $gsap.timeline({
            scrollTrigger: {
                trigger: `.section-container`,
                scrub: 1,
                pin: true,
                start: "top top",
                end: "+=500",
            },
        })
    // Header shrinking
        tl.to('.title-section', {
            duration: 1,
            y: 0,
            opacity: 1,
            startAt: {
                y: 100,
                opacity: 0
            }
        })
        tl.to('.disc-card', {
            stagger: 0.2,
            duration: '3',
            y: 0,
            opacity: 1,
            startAt: {
                y: 100,
                opacity: 0
            }
        })
    })

</script>

<template lang="pug">
.py-6(:class="`section-container`")
    .text-white {{  id  }}
    .text-center.mx-auto.title-section.opacity-0(class="md:w-96")
        h5.text-white.text-3xl.tracking-tight.py-10
            span.text-pink-500 Sellos discográficos 
            span limeños de la cumbia peruana
    div.text-white
        .grid.grid-cols-2.gap-6(class="md:grid-cols-5")
            SellosCard(v-for="i in 10")
</template>