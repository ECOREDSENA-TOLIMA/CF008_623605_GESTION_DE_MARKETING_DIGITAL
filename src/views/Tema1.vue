<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Métodos de venta

    .row.mb-5
      .col-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/1.svg', alt='Texto que describa la imagen')
      .col-10.mb-md-0
        p "La práctica hace al maestro", una de las frases más comunes, también se aplica a todos los oficios, y el arte de la negociación y las ventas no es una excepción. Para muchos, la negociación puede parecer una tarea difícil, especialmente si nunca la han practicado o si lo han intentado sin la debida preparación, lo que puede llevar a prejuicios. A medida que un profesional de ventas adquiere experiencia y conocimiento, cerrar ventas se vuelve una habilidad natural que, con el tiempo, no debería ser una tarea altamente compleja.

    p(data-aos="fade-left").mb-5 Las ventas no deben dejarse al mero talento individual de cada persona. Si bien es importante reconocer el valor de cada miembro del equipo de ventas, es esencial operar dentro del contexto organizacional que se basa en métodos y estrategias de equipo y una sólida base técnica, en línea con las políticas comerciales de la organización.

    .row.justify-content-center.mb-5 
      .col-10(data-aos="fade-right")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/2.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 En términos de metodología y estrategia, la planificación y ejecución de cualquier acción requiere un objetivo definido, un plan, resultados esperados, recursos y un cronograma. En resumen, tanto para un vendedor individual como para una empresa, es fundamental tener claridad sobre qué vender, cómo hacerlo, cuándo hacerlo, dónde hacerlo, a quién dirigirse y cuánto esperar. Estas son preguntas clave que forman parte de la estrategia, y es esencial aplicar metodologías que aborden estos elementos. Esto incluye conceptos como establecer metas (cuánto), definir objetivos (cuándo y dónde), desarrollar una metodología (cómo), definir el portafolio de productos o servicios (qué) y realizar una segmentación de mercado (a quién).

    p(data-aos="fade-left") A continuación, se abordan algunos métodos o configuraciones de ventas.
      
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Atención, Interés, Deseo y Acción (AIDA)

    p(data-aos="fade-left").mb-5 El modelo AIDA, que representa las etapas de Atención, Interés, Deseo y Acción, fue propuesto por E. St. Elmo Lewis en la década de los 80. A pesar de su antigüedad, este modelo sigue siendo relevante en la publicidad y el #[em marketing], incluso en la era digital. En este modelo, se detalla cómo los mensajes publicitarios influyen de manera secuencial en los consumidores. Comienza con la captación de la atención, seguida por la generación de interés, el fomento del deseo y, finalmente, la motivación para que el consumidor tome una acción específica, como comprar un producto o servicio. El modelo AIDA se ha convertido en un marco clásico para comprender y diseñar estrategias de persuasión en la comunicación y el #[em marketing].

    ImagenInfograficaB.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/3.svg', alt='Texto que describa la imagen')

      div(x="11.7%" y="27%" numero="+" tooltip="Atención")
        h5 Atención
        p En esta fase de compra, el cliente se entera que tiene un deseo o necesidad. Es muy importante, al aplicar el modelo AIDA, saber de manera acertada qué público y segmentación son quienes tienen esta necesidad. Por consiguiente, para conseguir la atención, es importante conocer la audiencia objetivo. Aplicar esto en #[em marketing] digital es generar mensajes personalizados que consigan captar la atención del público y atraerlo a la marca.

      div(x="37.3%" y="27%" numero="+" tooltip="Interés")
        .h5.mb-2 Interés
        p La segunda fase de compra se basa en la investigación, el cliente hace conciencia de su necesidad y su acción espontánea es la recopilación de información sobre el producto o servicio (lo que Google llama ZMTO, momento cero de la verdad). Una de las claves es la personalización, si el cliente considera que el producto o marca aborda su problema, se tendrá mayor probabilidad de que el cliente quiera saber más sobre la opción que se brinda. Procurar empatizar con el cliente y apelar a atención emocional para acaparar su interés.

      div(x="62.7%" y="27%" numero="+" tooltip="Deseo")
        .h5.mb-2 Deseo
        p Cuando el cliente llega a la fase de decisión, por lo general, compara las opciones diversas a su disposición; en esta fase, el objetivo es mostrarle al cliente por qué su marca es la mejor opción. En este paso del ciclo de compra, es donde se debe resaltar su promesa de valor; si se muestra como una marca más o no manifiesta respaldo y calidad, es posible que el cliente se decida por otra opción.

      div(x="88.3%" y="27%" numero="+" tooltip="Acción")
        .h5.mb-2 Acción
        p Es la fase objetivo, pero también es la acción menos frecuente. Este momento, de verdad, es donde se le deben poner las cosas lo más fácil posible al cliente; se puede reforzar ofreciendo ventajas por su compra o algún medio de pago, pero, más importante que esto, es mostrarle de manera clara el camino hacia la transacción. Una recomendación adicional es usar expresiones que persuadan al cliente en el tiempo, es decir, crear un ambiente de urgencia o escasez, tales como “ahora”, “ya”, “aprovecha”, “oportunidad”, etc. Indicar, de manera creativa, que, si no realiza esta acción pronto, podría perderse una buena oportunidad.

    .tarjeta(style="background-color:#E0E5EC").p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/temas/tema1/4.svg").img65
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Ana Tey apareciendo en el Anuncio de Línea Directa TE BUSCAMOS Oficina
              p.mb-0.text-small Revise el siguiente ejemplo del modelo AIDA aplicado, para eso, se le invita a revisar el video que se encuentra en el material complementario con el nombre de #[b Ana Tey apareciendo en el Anuncio de Línea Directa TE BUSCAMOS Oficina] y, luego de eso, revise el siguiente paso a paso desde donde se describen los elementos del modelo: 
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Sf3qBBJ2V5g&ab_channel=ANATEY" target="_blank")
                span Abrir video
                i.fas.fa-file-download

    p aca va video

    p(data-aos="fade-left").mb-5 En el caso de las piezas gráficas estáticas, varios de los anuncios promueven ese modelo. A continuación, se evidencia un ejemplo claro de lo que es la aplicación del modelo AIDA en un anuncio de una red social:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] <em>Ejemplo AIDA en ADS</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/5.png', alt='En la figura 1 se muestra un ejemplo del modelo AIDA en un anuncio de red social.')
        figcaption Nota. Tomado de branch.com.co

    .row.justify-content-center.align-items-center.mb-5
      .col-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] <em>Ejemplo AIDA en ADS</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/5-m.png', alt='En la figura 1 se muestra un ejemplo del modelo AIDA en un anuncio de red social.')
        figcaption Nota. Tomado de branch.com.co

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Situación, Problema, Implicación, Necesidad (SPIN)

    p(data-aos="fade-left").mb-5 SPIN es una técnica de negociación basada en las necesidades de los clientes a través de preguntas, de esta manera, busca beneficios por medio de los productos ofrecidos. Es una técnica que busca conectar al cliente y que este dé mayores pistas para dar a conocer la ruta de la negociación o qué argumentos persuasivos son los más adecuados para emplear. A continuación, se explica la técnica de negociación SPIN:

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        LineaTiempoE.color-acento-contenido
          .row(titulo="Situación" subtitulo="")
            .col-lg-6.mb-4.mb-lg-0
              p Se deben plantear una o varias preguntas basadas en la vida del cliente, objetivos, necesidades, metas, estilo de vida. Se busca empatizar con el público en situaciones reales en las que pueda estar inmerso el cliente.
            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/6.png', alt='Texto que describa la imagen')

          .row(titulo="Problema" subtitulo="")
            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/7.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.mb-lg-0
              p Se plantean preguntas sobre aspectos que el segmento de clientes requiere o desea mejorar. Las posibles respuestas son el insumo de lo que la marca o producto tenga como argumento para resolver estos problemas.

          .row(titulo="Implicación" subtitulo="")
            .col-lg-6.mb-4.mb-lg-0
              p Se describen las consecuencias de no abordar esos problemas. La marca o producto debe enfocar su campaña en la solución para evitar más problemas.
            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/8.png', alt='Texto que describa la imagen')

          .row(titulo="Necesidad" subtitulo="")
            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/9.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.mb-lg-0
              p De manera concreta y efectiva, se debe brindar información sobre los beneficios.
              
    p(data-aos="fade-left").mb-5 Este método de venta es efectivo cuando hay contacto directo y de manera sincrónica con el cliente, ya sea por medios digitales (chat, conversación de voz), o de manera presencial. A continuación, se expone un ejemplo de uso del método para su revisión:

    .row.justify-content-center.align-items-center.mb-5
      .col-8
        ImagenInfograficaB.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/10.svg', alt='Texto que describa la imagen')

          div(x="79.1%" y="0%" numero="+" tooltip="Situación")
            p Si se tiene, por ejemplo, venta y reparación de computadoras y se acerca alguien con un equipo con fallas, dos de las preguntas podrían ser: ¿hace cuánto tiene la computadora?, ¿Qué uso le da? Cuando se tenga el perfil de lo que necesita el cliente, se sacan conclusiones basadas en las respuestas de la situación, que vayan orientando hacia el problema en concreto; lo importante es procurar llevar a que el cliente mismo llegue a su problema, que, sin duda, se le resolvería usando servicios o productos como los suyos.

          div(x="93.7%" y="26%" numero="+" tooltip="Problema")
            p Para llegar a su propia conclusión, se podrían usar preguntas como: ¿Qué pasa cuando no puede usar su computadora?, ¿su empleo depende del equipo de cómputo?, ¿el computador le ha trabajado correctamente últimamente o ha estado lento?

          div(x="93.7%" y="51%" numero="+" tooltip="Implicaciones")
            p Para esto, podrían usarse las preguntas: ¿Qué costo tendría para usted seguir llevando el computador al servicio técnico frecuentemente?, ¿Qué tiempo pierde cuando la computadora no funciona bien?, ¿con una máquina nueva tendrías menos problemas y, por el contrario, podría aumentar su productividad?

          div(x="79%" y="78.5%" numero="+" tooltip="Necesidades")
            p Las preguntas en esta fase podrían ser: ¿sería más fácil y rápido cumplir con tus tareas diarias?, ¿sería mejor para su empresa y su desempeño laboral?, ¿podría hacer más cosas e incluso otras actividades si mejora la productividad y el tiempo de trabajo?

    p(data-aos="fade-left").mb-5 Lo más importante es afrontar los desafíos diarios para aumentar las ventas, y el uso de estas técnicas podría tener un efecto muy positivo para el aumento de las cifras.

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Necesidad, Característica, Beneficio, Ventaja (NCBV)

    .row.mb-5
      .col-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/11.svg', alt='Texto que describa la imagen')
      .col-9.mb-md-0
        p Conocido de manera más popular como el método CVB, es un método de ventas que busca relacionar las necesidades de los consumidores con el producto que se vende. Es por ello que, antes de aplicar tanto esta como otras técnicas de ventas, es importante que conozca muy bien el producto que se comercializa; también es fundamental conocer el contexto del mercado y el segmento correcto, para encontrar de forma acertada la necesidad real que tienen los clientes y que con su producto se resuelve esta necesidad. Pero, en el medio, hay otros elementos importantes, vamos a verlos:

    .row.justify-content-center.align-items-center.mb-5
      .col-6
        ImagenInfograficaB.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/12.svg', alt='Texto que describa la imagen')

          div(x="50%" y="0%" numero="1" tooltip="Características")
            h5 Características
            p Se describen los atributos físicos y propiedades de un producto o servicio. Esta descripción debe tener elementos observables, fáciles de medir y relacionados con la naturaleza del producto.
            p Es importante hacerse preguntas sobre el producto, tales como: ¿Qué es?, ¿de qué material está hecho?, ¿peso?, ¿características y capacidad?, etc.


          div(x="85%" y="35%" numero="2" tooltip="Ventajas")
            .h5.mb-2 Ventajas
            p Se busca que el cliente vea la mayor ventaja de nuestro producto entre varias opciones que pueda tener. En esta fase, de nuevo, como en otras técnicas, se debe resaltar la promesa de valor de la marca. Ya teniendo las características, por lo general, se saca una ventaja por cada característica. En ese sentido, de acuerdo con las ventajas, el producto o servicio que adquiere será de valor y este responde a sus necesidades o deseos.

          div(x="50%" y="69%" numero="3" tooltip="Beneficios")
            .h5.mb-2 Beneficios
            p Los beneficios, por lo general, se relacionan con factores de calidad, productividad y rentabilidad. El vendedor, en esta fase, deberá resaltar lo que el cliente consigue al adquirir su producto o servicio, destacar las utilidades y beneficios para el consumidor. 

          div(x="15%" y="35%" numero="4" tooltip="Ejemplo")
            .h5.mb-2 Ejemplo
            p Si tiene un proyecto de ventas de celulares, podría mencionar la cantidad de fotos y videos que podría almacenar por su gran capacidad de almacenamiento, así como la calidad de las imágenes y la velocidad del dispositivo, permitiendo varias tareas al tiempo, sin perder tiempo y aumentando la productividad en las actividades diarias.
            


</template>

<script>
export default {
  name: 'Tema1',
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
