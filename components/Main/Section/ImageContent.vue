<script setup lang="ts">

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
        title: string;
        content: string;
        links: Array<LinkSection> | Array<LinkGroup>;
        images: Array<Image>;
        align: string;
        badge?: string;
    }

    defineProps<Props>();

</script>

<template lang="pug">
section.py-24
    .grid.grid-cols-1.flex.items-center.gap-8(class="md:grid-cols-2")
        div(:class="{ 'md:order-last' : align === 'left' }")
            h3.font-extrabold.text-3xl.mb-4 
                span.text-white {{ title }} 
                span.bg-pink-600.text-white.ml-4.rounded-xl.px-4 {{ badge }}
            p.text-slate-200.text-lg {{ content }}
            .pt-6
                h6.text-xl.text-lime-500.font-bold.py-4 Menú Tropical
                .grid.grid-cols-1.gap-10(class="md:grid-cols-1")
                    div(v-for="link in links")
                        NuxtLink(to="/") 
                            .flex.gap-2
                                vsx-icon.text-pink-500(iconName="MusicCircle", type="bold")
                                div
                                    p.text-white.text-md.transition(class="hover:text-pink-500") {{  link.title  }}
                                    p.uppercase.text-slate-400.text-sm.tracking-wider {{ link.subtitle }}
        div
            .grid.grid-flow-col.gap-4
                img(v-for="(image, index) in images", :src="image.url", :class="{ 'mt-16' : (index + 1) % 2 == 0 }")
    
</template>