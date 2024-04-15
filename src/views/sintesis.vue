<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El componente formativo Ventas y principios de negociación, se enfoca en proporcionar un marco conceptual y teórico para comprender las estrategias que pueden aplicarse en el ámbito de la negociación y las ventas, en consonancia con las prácticas empresariales contemporáneas y cumpliendo con la normativa vigente. Este enfoque se lleva a cabo principalmente en entornos digitales, donde se exploran las estrategias y técnicas necesarias para negociar y vender de manera efectiva. El programa de formación abarca una amplia gama de temas relacionados con las ventas y la negociación, incluyendo aspectos como la identificación de necesidades del cliente, la persuasión, el uso de herramientas digitales, la comunicación efectiva, la normativa que rige estas prácticas y la resolución de conflictos.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis del componente formativo Ventas y principios de negociación, se enfoca en proporcionar un marco conceptual y teórico para comprender las estrategias que pueden aplicarse en el ámbito de la negociación y las ventas.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
