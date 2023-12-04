<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row
      .col-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/intro/1.svg', alt='Texto que describa la imagen')
      .col-10.mb-md-0
        p Las ventas y los principios de negociación son componentes fundamentales en el mundo empresarial. Las ventas se refieren al proceso de persuadir a los clientes para que adquieran un producto o servicio, mientras que la negociación implica la búsqueda de acuerdos mutuamente beneficiosos entre dos partes. Ambos conceptos son esenciales para el éxito de cualquier empresa, ya que influyen en la generación de ingresos, la retención de clientes y la construcción de relaciones comerciales sólidas.

    p(data-aos="fade-left") En el mundo de las ventas, es crucial comprender las necesidades y deseos del cliente, adaptar el enfoque de ventas a sus preferencias y proporcionar soluciones que agreguen valor. La comunicación efectiva, la empatía y la capacidad de escuchar son habilidades clave para un vendedor exitoso.

    p   ACA VA VIDEO

      

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
