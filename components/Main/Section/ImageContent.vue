<script setup lang="ts">
    const { $gsap, $ScrollTrigger } = useNuxtApp();
    interface LinkSection {
        title: string;
        subtitle?: string;
    }

    interface LinkGroup {
        title: string;
        subtitle?:string;
        links: Array<LinkSection>;
    }

    interface Image {
        url: string;
    }

    interface Props {
        id: string;
        title: string;
        content: string;
        links: Array<LinkSection> | Array<LinkGroup>;
        images: Array<Image>;
        align: string;
        badge?: string;
        type: string;
    }

    const props = defineProps<Props>();

    /*onMounted(() => {
        console.log(`#${props.id}`);
        const tl = $gsap.timeline({
                scrollTrigger: {
                    trigger: `#${props.id}`,
                    start: "top center",
                    scrub: true,
                    end: "+=500",
                },
            })

            tl.to(`#${props.id} .content-title-animation`, {
                duration: 2,
                y: 0,
                opacity: 1,
                startAt: {
                    y: 100,
                    opacity: 0
                }
            })

            tl.to(`#${props.id} .content-animation`, {
                stagger: 0.2,
                duration: 2,
                y: 0,
                opacity: 1,
                startAt: {
                    y: 100,
                    opacity: 0
                }
            })
    })*/

</script>

<template lang="pug">
section.py-24(:id="id")
    .grid.grid-cols-1.flex.gap-8(class="md:grid-cols-2")
        div(:class="{ 'md:order-last' : align === 'left' }")
            h3.font-extrabold.text-3xl.mb-4
                span.text-white {{ title }} 
                span.bg-pink-600.text-white.ml-4.rounded-xl.px-4 {{ badge }}
            p.text-slate-200.text-lg {{ content }}
            .pt-6
                h6.text-xl.text-lime-500.font-bold.py-4 Menú Tropical     
                .grid.grid-cols-1.gap-6.gap-y-12(class="md:grid-cols-2", v-if="type === 'groupLink'")
                    div(v-for="link in links")
                        .mb-6 
                            h6.text-white.font-medium.uppercase.tracking-wider {{ link.title }}
                            h6.text-slate-400.font-medium.uppercase.tracking-wider  {{ link.subtitle }}
                        .pl-0
                            .grid.grid-cols-1.gap-8(class="md:grid-cols-1")
                                div(v-for="sublink in link.links")
                                    NuxtLink(:to="`/${sublink.id}`") 
                                        .flex.gap-2
                                            vsx-icon.text-pink-500(iconName="MusicCircle", type="bold")
                                            div
                                                p.text-white.text-md.transition(class="hover:text-pink-500") {{  sublink.title  }}
                                                p.uppercase.text-slate-400.text-sm.tracking-wider {{ sublink.subtitle }}
                .grid.grid-cols-1.gap-8(class="md:grid-cols-1", v-if="type === 'singleLink'")
                    div(v-for="link in links")
                        NuxtLink(:to="`/${link.id}`") 
                            .flex.gap-2
                                vsx-icon.text-pink-500(iconName="MusicCircle", type="bold")
                                div
                                    p.text-white.text-md.transition(class="hover:text-pink-500") {{  link.title  }}
                                    p.uppercase.text-slate-400.text-sm.tracking-wider {{ link.subtitle }}
        div
            .grid.grid-flow-col.gap-4
                img(v-for="(image, index) in images", :src="image.url")
    
</template>