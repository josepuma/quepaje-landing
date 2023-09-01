<script setup lang="ts">

    interface Props {
        title: string;
        content: string;
    }

    defineProps<Props>();

</script>

<template lang="pug">
section.text-center.py-12
    .w-full.mx-auto(class="lg:w-8/12")
        h2.text-cyan-500.font-extrabold.text-3xl {{ title }}
        p.text-slate-200.text-lg {{  content  }}
</template>