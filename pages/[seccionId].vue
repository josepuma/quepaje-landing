<script setup lang="ts">

    interface Seccion {
        title: string;
        description: string;
        images: Array<string>;
    }

    const images = [
        'a.png' ,
        'b.png' ,
        'c.jpeg' ,
        'd.jpeg' ,
        'e.jpeg' ,
        'f.jpeg' 
    ]

</script>

<template lang="pug">
section.min-h-screen
    .relative(class="z-2")
        img.absolute.left-0.top-0.-scale-y-100(src="@/assets/img/leafs.png", class="md:w-1/3 w-32")
        img.absolute.right-0.top-0.-scale-100(src="@/assets/img/leafs.png", class="md:w-1/3 w-32")
        .h-32
    .relative(class="z-2")
        .container.mx-auto.px-4
            .p-6.w-full.bg-yellow-400(class="md:w-6/12") 
                h5.font-extrabold.text-2xl Frank Ventura, pionero de la estética chicha
                NuxtLink.flex.gap-2.text-sm.items-center.font-bold.mt-2(to="/")
                    vsx-icon(iconName="ArrowLeft", size="12")
                    span Volver al Inicio
            .grid.gap-6.mt-8
                .grid.grid-cols-1(class="md:grid-cols-2")
                    p.text-slate-200.text-lg El Perú es un país plenamente cumbiero. Si bien esta música nació en las ciénagas del Atlántico colombiano, a partir de los años 60 fue domesticada en nuestro territorio, generando diversos estilos a lo largo de toda la geografía nacional. Esta tendencia, que aún se mantiene vigente, enriqueció el género hasta convertirlo en parte de nuestra identidad. Una identidad híbrida, diversa, pluricultural, que es el prisma a través del cual esta música se proyectó a las regiones, dando origen a la cumbia andina (llamada luego chicha), la cumbia norteña, la amazónica o la sureña, entre otras. 
                .grid.grid-cols-1(class="md:grid-cols-2")
                    div
                    p.text-slate-200.text-lg ¡Güepajé!, es la onomatopeya que los arrieros colombianos usaban para movilizar el ganado y que los músicos convirtieron en invocación al baile y al gozo. Y es también el título del encuentro que, en dos ediciones anuales, ocupó las instalaciones del Centro Cultural de España en Lima, con el fin de compartir (para no olvidar) la historia de la prolífica cumbia peruana. Bienvenides, entonces, a la (emotiva) memoria de estos encuentros con la banda sonora de nuestro peruano existir.   

        img.w-full.py-12(src="@/assets/img/ventura.jpg")
        .container.mx-auto.px-4.py-12
            .grid.grid-cols-3.gap-6
                img(v-for="image in images", :src="`/img/ventura/${image}`")

</template>