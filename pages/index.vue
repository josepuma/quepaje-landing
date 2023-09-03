<script setup lang="ts">
    import { onMounted, onUnmounted, ref } from 'vue';
    const { client } = usePrismic();
    const { $gsap, $ScrollTrigger } = useNuxtApp();

    interface LinkGroup {
        title: string;
        subtitle?:string;
        links: Array<LinkSection>;
    }

    interface LinkSection {
        id: string;
        title: string;
        subtitle?: string;
    }

    interface VideoSection {
        title: string;
        subtitle?: string;
        imageUrl: string;
        videoUrl: string;
    }

    interface Image {
        url: string;
    }

    const { data: home } = await useAsyncData("home", () =>
        client.getSingle('home')
    );
    

    /*onMounted(() => {
        $gsap.to('.main-banner', {
            opacity: 1,
            duration: 2,
            y: 0,
            scale: 1,
            startAt: {
                scale: 1.1
            }
        })
    })*/

    const linksGuepajeA: Array<LinkSection> = [
        { id: 'sellos_discograficos_cumbia', title: 'Sellos discográficos limeños de la cumbia peruana', subtitle: 'Décadas del 60 al  80' },
        { id: 'sellos_discograficos_chicha',  title: 'Sellos discográficos limeños de la chicha peruana', subtitle: 'Décadas del 70 y 80' },
        { id: 'sellos_discograficos_perifericos',  title: 'Sellos discográficos periféricos', subtitle: 'Décadas del 70 y 80' },
        { id: 'frank_ventura',  title: 'Sección Especial: Frank Ventura, pionero de la estética chicha' },
        { id: 'productores_musicales',  title: 'Sección Especial: Productores musicales de la cumbia peruana' },
        { id: 'fabricacion_disco',  title: 'Sección Especial: Así se fabricaba un disco de cumbia peruana' },
    ]

    const linksGuepajeB: Array<LinkGroup> = [
        { title: 'Cumbia Selvática', subtitle: 'Décadas del 50 al 90', 
            links: [ 
                { id: 'los_origenes',  title: 'Década del 50: Los orígenes' }, 
                { id: 'surf_selvatico',  title: 'Década del 60: El surf selvático' }, 
                { id: 'poder_verde',  title: 'Década del 70: Poder verde' },
                { id: 'regreso_raices',  title: 'Década del 80: De regreso a las raíces' },
                { id: 'tecnocumbia',  title: 'Década del 90: La tecnocumbia' } ] 
        },
        { title: 'Cumbia Andina', subtitle: 'Décadas del 50 al 90', 
            links: [ 
                { id: 'valle_mantaro',  title: 'El Valle del Mantaro' }, 
                { id: 'cumbia_volcanica',  title: 'Cumbia volcánica' }, 
                { id: 'frutillada_tropical',  title: 'Frutillada tropical ' },
                { id: 'cumbia_surena',  title: 'Cumbia sureña' } ] 
        },
        { title: 'Cumbia Costeña', subtitle: 'Décadas del 50 al 90', 
            links: [ 
                { id: 'cumbia_nortena',  title: 'Cumbia norteña' }, 
                { id: 'cumbia_limena',  title: 'Cumbia regional limeña' }, 
                { id: 'grito_independencia',  title: 'El grito de Independencia ' },
                { id: 'cumbia_carretera',  title: 'Cumbia de la Carretera Central' },
                { id: 'saxocumbia',  title: 'La saxocumbia de Huarochirí' },
                { id: 'cumbia_norte_chico',  title: 'Cumbias del Norte Chico  ' } ] 
        },
        { title: 'Secciones Especiales', 
            links: [ 
                { id: 'mujeres_cumbia',  title: 'Las mujeres en la cumbia peruana (Décadas del 50 al 90)' }, 
                { id: 'rosita',  title: 'Rosita Producciones' }, 
                { id: 'mapa_cumbias',  title: 'Mapa de las cumbias del Perú' } ] 
        },
    ]

    const videosLeyendas: Array<VideoSection> = [
        { imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60', videoUrl: 'https://www.youtube.com/embed/kfQ_1uvh-xI?si=2S7rTXBXpQLfvUka', title: 'Video Referencial', subtitle: 'Décadas del 60 al  80' }
    ]

    const videosHablemos: Array<VideoSection> = [
        { imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60', videoUrl: 'https://www.youtube.com/embed/iBTEDOFUYYk?si=d9DrO-_as4KlQuIS', title: 'Video Referencial', subtitle: 'Décadas del 60 al  80' }
    ]

    const imagesGuepajeA: Array<Image> = [
        { url: '/img/guepaje1.jpg' }
    ];

    const imagesGuepajeB: Array<Image> = [
        { url: '/img/guepaje2.png' }
    ];

    const imagesGuepajeC: Array<Image> = [
    ];

</script>

<template lang="pug">
div 
    section.min-h-screen
        img.main-banner.w-full(src="@/assets/img/main_banner.jpg")
        MainSectionHeader(title="Presentación", content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ratione suscipit expedita illum? Quia corrupti optio expedita voluptatum commodi autem, quibusdam ipsa labore quos cupiditate, sint itaque amet ratione fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ratione suscipit expedita illum? Quia corrupti optio expedita voluptatum commodi autem, quibusdam ipsa labore quos cupiditate, sint itaque amet ratione fuga")
        .container.mx-auto.px-4
            MainSectionImageContent(id="header-a", :images="imagesGuepajeA", type="singleLink", badge="2022", align="right", title="Güepajé Vol. 1", content="Para esta primera edición, decidimos enfocarnos en la historia de la cumbia peruana a partir de los sellos y disqueras de Lima que hicieron posible su crecimiento y desarrollo entre las décadas del 60 al 80. Este encuentro incluyó sesiones de escucha con músicos que formaron parte de agrupaciones históricas de cumbia peruana, así como conversatorios con investigadores, especialistas y testigos de época, quienes ofrecieron su visión y testimonio sobre la cultura creada a partir de este género. Por último, una exposición museográfica cuyos contenidos les presentamos a continuación:", :links="linksGuepajeA")
            MainSectionImageContent(id="header-b", :images="imagesGuepajeB", type="groupLink", badge="2023", align="left", title="Güepajé Vol. 2", content="En nuestra segunda edición diseñamos una exposición sobre los orígenes y desarrollo de las cumbias regionales del Perú entre las décadas del 50 al 90. De esta manera, narramos el desarrollo de este género a lo largo del territorio nacional, con episodios fundamentales como la aparición de orquestas tropicales en los años 50, la influencia del rock en el estilo peruano de la guitarra eléctrica, la incorporación de instrumentos electrónicos en la chicha, la labor fundamental de Rosita Producciones o la invisibilizada participación de las mujeres en la cumbia nacional. ", :links="linksGuepajeB")
            MainSectionVideoContent(id="videos", align="left", :images="imagesGuepajeC", title="Leyendas de la cumbia peruana", content="Videos con las entrevistas en vivo a músicos históricos que participaron en las dos ediciones de Güepajé. ", :videos="videosLeyendas")
            MainSectionVideoContent(id="videos2", align="right", :images="imagesGuepajeC", title="Hablemos sobre cumbia peruana", content="Videos de las charlas en vivo con especialistas e investigadores de la cumbia peruana que participaron en las dos ediciones de Güepajé.", :videos="videosHablemos")
            MainSectionCreditos
</template>