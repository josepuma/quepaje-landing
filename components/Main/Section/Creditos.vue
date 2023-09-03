<script setup lang="ts">

    interface Credito {
        title: string;
        name: string;
    }

    const creditosA : Array<Credito> = [
        { title: 'Producción General: ', name: 'Lucho Pacora' },
        { title: 'Producción Ejecutiva: ', name: 'Yasmín León' },
        { title: 'Identidad visual e infografías: ', name: 'Catalán Studio ' },
        { title: 'Equipo de investigación: ', name: 'Lucho Pacora + Sara Nogales ' },
        { title: 'Archivo fotográfico: ', name: 'Alberto ‘Chino’ Valderrama  ' },
        { title: 'Diseño de portada: ', name: 'Samuel Gutiérrez (Familia Gutiérrez) ' }
    ]

    const creditosB : Array<Credito> = [
        { title: 'Producción General: ', name: 'Lucho Pacora' },
        { title: 'Producción Ejecutiva: ', name: 'Yasmín León' },
        { title: 'Identidad visual e infografías: ', name: 'Bidkar Yapo (Nación Chicha)' },
        { title: 'Equipo de investigación: ', name: 'Lucho Pacora + Yawar Mestas + Danneth Valeriano + Rous Condori + César Zevallos + Percy Flores + Fernando Ríos + Néstor Sedano + Kevin de los Ríos + Anthony Quispe' },
        { title: 'Diseño de portada: ', name: 'Nación Chicha' },
    ]

</script>

<template lang="pug">
section.py-24
    .grid.grid-cols-1.flex.gap-12.items-center(class="md:grid-cols-5")
        div.col-span-1
            h3.font-extrabold.text-3xl.mb-4
                span.text-cyan-500 Créditos
            //-p.text-white Lorem ipsum dolor sit amet consectetur adipisicing elit.
        div.col-span-4
            .flex.gap-6
                div
                    h5.uppercase.text-white.font-bold.text-sm.tracking-wider.mb-4 Güepajé Vol. 1
                    .grid.gap-4
                        .flex.gap-2(v-for="credito in creditosA")
                            vsx-icon.text-pink-500(iconName="UserTag", type="bold")
                            div
                                p.text-md.transition.font-medium 
                                    span.text-pink-500 {{  credito.title  }}  
                                    span.text-white  {{  credito.name  }}
                div
                    h5.uppercase.text-white.font-bold.text-sm.tracking-wider.mb-4 Güepajé Vol. 2
                    .grid.gap-4
                        .flex.gap-2(v-for="credito in creditosA")
                            vsx-icon.text-pink-500(iconName="UserTag", type="bold")
                            div
                                p.text-md.transition.font-medium 
                                    span.text-pink-500 {{  credito.title  }}  
                                    span.text-white  {{  credito.name  }}     


    .mt-16 
        .grid.grid-cols-7.gap-4
            img(:src="`img/logos/${i}.svg`", v-for="i in 7")
</template>