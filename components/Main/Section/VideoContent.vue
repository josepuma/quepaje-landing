<script setup lang="ts">
    const { $gsap, $ScrollTrigger } = useNuxtApp();
    interface VideoSection {
        title: string;
        subtitle?: string;
        imageUrl: string;
        videoUrl: string;
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
        videos: Array<VideoSection>;
        images: Array<Image>;
        align: string;
        badge?: string;
    }

    const props = defineProps<Props>();


</script>

<template lang="pug">
section.py-24(:id="id")
    .grid.grid-cols-1.flex.items-center.gap-8(class="md:grid-cols-3")
        div.col-span-2(:class="{ 'md:order-last' : align === 'right' }")
            h3.font-extrabold.text-3xl.mb-4.content-title-animation
                span.text-pink-500 {{ title }} 
            p.text-slate-200.text-lg {{ content }}
            .pt-6
        div
            .grid.grid-flow-col.gap-4
                img(v-for="(image, index) in images", :src="image.url", :class="{ 'mt-16' : (index + 1) % 2 == 0 }")
      
    .py-4
        h6.text-center.text-xl.text-lime-500.font-bold.py-4 Videos
    .grid.grid-cols-1.gap-8.items-stretch(class="md:grid-cols-4")
        div.content-animation.bg-pink-500(v-for="video in videos")
            a.relative(:href="video.videoUrl", target="_blank")
                img.w-full(:src="video.imageUrl")
                .bg-pink-500.inset-0.absolute.opacity-0.transition(class="hover:opacity-80")
                vsx-icon.text-white.absolute.center(iconName="VideoPlay", class="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")
            .p-4 
                h6.text-sm.text-white.font-medium {{  video.title  }}

    
</template>