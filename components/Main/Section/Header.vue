<script setup lang="ts">

    const { $gsap, $ScrollTrigger } = useNuxtApp();

    interface Props {
        title: string;
        content: string;
        links: Array<string>;
    }

    defineProps<Props>();
    onMounted(() => {
        const tl = $gsap.timeline({
                scrollTrigger: {
                    trigger: `.section-container`,
                    start: "top center",
                    end: "+=500",
                },
            })

            tl.to('.content-title-animation', {
                duration: 2,
                y: 0,
                opacity: 1,
                startAt: {
                    y: 100,
                    opacity: 0
                }
            })

            tl.to('.content-animation', {
                stagger: 0.2,
                duration: 2,
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
section.py-32.section-container.relative
    img.absolute.left-0.bottom-0.content-animation.opacity-0(src="@/assets/img/leafs.png", class="md:w-1/3 w-32")
    img.absolute.right-0.top-0.-scale-100.content-animation.opacity-0(src="@/assets/img/leafs.png", class="md:w-1/3 w-32")
    .container.mx-auto.px-4.relative
        div.relative
            h2.text-lime-500.font-extrabold.text-4xl.mb-8.text-center.content-title-animation.opacity-0 {{ title }}
            .grid.gap-6
                .grid.grid-cols-1(class="md:grid-cols-2")
                    p.text-slate-200.text-lg.content-animation.opacity-0 El Perú es un país plenamente cumbiero. Si bien esta música nació en las ciénagas del Atlántico colombiano, a partir de los años 60 fue domesticada en nuestro territorio, generando diversos estilos a lo largo de toda la geografía nacional. Esta tendencia, que aún se mantiene vigente, enriqueció el género hasta convertirlo en parte de nuestra identidad. Una identidad híbrida, diversa, pluricultural, que es el prisma a través del cual esta música se proyectó a las regiones, dando origen a la cumbia andina (llamada luego chicha), la cumbia norteña, la amazónica o la sureña, entre otras. 
                .grid.grid-cols-1(class="md:grid-cols-2")
                    div
                    p.text-slate-200.text-lg.content-animation.opacity-0 ¡Güepajé!, es la onomatopeya que los arrieros colombianos usaban para movilizar el ganado y que los músicos convirtieron en invocación al baile y al gozo. Y es también el título del encuentro que, en dos ediciones anuales, ocupó las instalaciones del Centro Cultural de España en Lima, con el fin de compartir (para no olvidar) la historia de la prolífica cumbia peruana. Bienvenides, entonces, a la (emotiva) memoria de estos encuentros con la banda sonora de nuestro peruano existir.    
</template>