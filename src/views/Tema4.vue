<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 La negociación

    .row.justify-content-center.align-items-center.mb-5
      .col-2
        img(src='@/assets/curso/temas/tema4/1.svg')
      .col-10
        p La negociación es un proceso en el que las partes involucradas defienden sus puntos de vista de acuerdo con sus propios intereses, ya sean individuos o empresas. En este proceso, se abordan aspectos como las necesidades, lo que se ofrece, la capacidad de compra, la capacidad de venta y la persuasión, con el objetivo de encontrar la mejor alternativa que satisfaga a todas las partes involucradas. La negociación implica la búsqueda de un equilibrio entre las diferentes perspectivas y necesidades para llegar a un acuerdo mutuamente beneficioso.

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Mejor Alternativa al Acuerdo Negociado (MAAN)

    p(data-aos="fade-left").mb-5 La MMAN es una técnica de negociación desarrollada por Harvard y ha sido uno de los métodos más usados en las organizaciones por su simpleza y practicidad; es un método desarrollado, a finales de los años setenta e inicio de los ochenta, por los profesores Roger Fisher, William Ury y Bruce Patton, quienes toman la negociación basados en un proceso que se enfoca en identificar y satisfacer intereses en común.

    .row.justify-content-center.align-items-center.mb-5 
      .col-10
        .row 
          .col-9 
            .cajon.color-secundario.p-4.mb-3
              p Antes de empezar toda negociación, hay que ser consciente que es casi imposible salir de ella con un acuerdo que represente el 100 % de lo deseado (mayor ganancia, calidad deseada, financiación, etc.). Cada parte querrá defender sus intereses y, por lo tanto, habrá que ceder en algún aspecto. Ahora bien, también hay que marcar un límite al respecto. De aquí nace el concepto de MAAN (Okdiario, 2016).
          .col-3
            img.mb-3(src='@/assets/curso/temas/tema4/2.svg')
      
    .row.align-items-center.mb-4(data-aos="fade-down-right")
      .d-flex.titulo-h3
        img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
        h3.mb-0.ms-3 Condiciones para llegar al MAAN

    .row.justify-content-center.mb-5 
      .col-3 
        img(src='@/assets/curso/temas/tema4/3.png')
      .col-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="No presentar elementos inalcanzables para la otra parte")
            .col.mb-4.mb-md-0
              p En toda negociación, se busca llegar a un acuerdo. Por lo tanto, no es conveniente salir con propuestas que la otra parte no podrá asumir. En caso de presentar ofertas muy diferentes a las capacidades, se corre el riesgo que el otro negociador se lo tome como una falta de respeto y rompa toda relación.
          
          .row(titulo="Tener varios niveles de ofertas o compras, según cómo se comporte la negociación")
            .col.mb-4.mb-md-0
              p Antes de una negociación, se estudian distintos escenarios, de acuerdo con cómo se espera que transcurran los hechos. Ahora bien, puede que no hayamos tenido en cuenta factores o aspectos relevantes que pueden dar un vuelco en la forma de encarar la negociación. Cuando esto suceda, hay que replantear el MAAN y establecer unos nuevos parámetros (Okdiario, 2016).

          .row(titulo="Conocer el contexto y poder de negociación de cada parte")
            .col.mb-4.mb-md-0
              p Cuantas más opciones se dispongan, más poder se tiene, porque más probable es encontrar otra compañía que ofrezca lo mismo a unas condiciones más ventajosas.
          
          .row(titulo="Definir el margen de beneficio objetivo factible")
            .col.mb-4.mb-md-0
              p Las pretensiones deben de ser, en todos los ámbitos, factibles y posibles. Por lo tanto, no es adecuado marcar unos valores más allá de lo que es razonable conseguir en el mercado. La consecuencia de hacerlo será una distorsión en la posición negociadora, además de frustración. 

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Protección al consumidor y normatividad

    p(data-aos="fade-left").mb-5 En Colombia, como en muchos otros países, existen mecanismos legales y normativas que buscan proteger los derechos de los consumidores y proporcionar vías para resolver conflictos que puedan surgir de negociaciones que no lleguen a un acuerdo satisfactorio. Estas alternativas legales suelen incluir:

    .row.justify-content-center.align-items-center.mb-5 
      .col-8
        .tarjeta(style="background-color:#E4FDFB").p-4.mb-3
          ol.lista-ol
            li 
              span.text-bold a. 
              | Derechos del consumidor: Colombia cuenta con una legislación que establece los derechos y deberes de los consumidores. Esto incluye el derecho a la información, el derecho a la protección contra publicidad engañosa o abusiva, el derecho a la calidad y seguridad de los productos y servicios, entre otros.

            li 
              span.text-bold b. 
              | Superintendencia de Industria y Comercio (SIC): la SIC es la entidad encargada de supervisar y regular el mercado en Colombia. Los consumidores pueden presentar quejas ante la SIC en caso de disputas con empresas, publicidad engañosa, incumplimiento de garantías, entre otros.
            li 
              span.text-bold c. 
              | Mecanismos de conciliación y arbitraje: además de las acciones legales, existen mecanismos alternativos de resolución de conflictos, como la conciliación y el arbitraje. Estos permiten a las partes involucradas en una disputa llegar a acuerdos sin necesidad de recurrir a un juicio formal.
            li 
              span.text-bold d. 
              | Defensoría del consumidor: en algunas ciudades y regiones de Colombia, existen oficinas de la Defensoría del Consumidor que brindan asesoramiento y apoyo a los consumidores en la resolución de conflictos con empresas.
            li 
              span.text-bold e. 
              | Protección al consumidor en línea: en el entorno digital, se aplican regulaciones específicas para la protección del consumidor en línea, incluyendo la protección de datos personales y la seguridad de las transacciones en línea.
      .col-4
        img.mb-3(src='@/assets/curso/temas/tema4/4.png')

    p(data-aos="fade-left").mb-5 Es importante que los consumidores estén informados sobre sus derechos y recursos disponibles en caso de disputas comerciales. La normativa y los mecanismos de protección al consumidor están diseñados para garantizar transacciones justas y proteger los intereses de los consumidores en situaciones de conflicto.
</template>

<script>
export default {
  name: 'Tema4',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
