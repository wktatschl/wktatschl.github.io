<template>
  <div class="about-container">
    <HeaderComponent />
    <br>
    <br>
    <div class="about-section">
      <div class="about-pic-container">
        <img src="../assets/img/test_headshot_wolfgang.png" alt="headshot of Wolfgang">
      </div>
      <div class="about-info">
        <h1 v-if="isEnglish">About <span class="blue-span">me</span></h1>
        <h1 v-else>À propos de <span class="blue-span">moi</span></h1>
        <br>
        <div v-if="isEnglish" class="about-text">
          <p>I'm a husband and proud father of two amazing kids ! I was born in Austria, but spent all my life in the U.S. until 2.5 years ago...when my family and I moved to Bordeaux 🍷! We love it here.</p><br>
          <p>My professional background is similarly varied, and while I'm a little bummed to be a relative latecomer to the IT scene (it took me only 12 years of professional experience to get into web development), I'm thoroughly enjoying it and finding it fits well with my strengths 💪 and interests.</p><br>
          <p>I'll stop here for now but will add more 'about me' in the near future :)</p>
        </div>
        <div v-else class="about-text">
          <p>Je suis un mari et fier d'être le père de deux enfants extraordinaires ! Je suis né en Autriche, mais j'ai passé toute ma vie aux États-Unis jusqu'à il y a deux ans et demi... quand ma famille et moi avons déménagé à Bordeaux 🍷 ! On l'adore.</p><br>
          <p>Mon parcours professionnel est tout aussi varié, et bien que je sois un peu déçu d'être un retardataire sur la scène informatique (il ne m'a fallu que 12 ans d'expérience professionnelle pour me lancer dans le développement web), je l'apprécie énormément et je trouve qu'il correspond bien à mes forces 💪 et à mes centres d'intérêt.</p><br>
          <p>Je m'arrête ici pour l'instant, mais j'ajouterai plus d'informations sur moi dans un futur proche :)</p>
        </div>
      </div>
      <br>
      <br>
      <br>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { mapState } from 'vuex'

export default {
  components: {
    HeaderComponent,
    FooterComponent
  },
  computed: {
    ...mapState(['language']),
    isEnglish() {
      return this.language === 'english' 
    }
  }
}
</script>

<style scoped>

  .about-section {
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  h1 {
    text-align: center;
    margin-top: 10px;
  }

  .about-info {
    max-width: 500px;
    margin: 0 auto;
    text-align: left;
  }

  .about-pic-container {
    overflow: hidden;
    display: flex;
    height: 250px;
    width: 250px;
    align-items: center;
    position: relative;
  }

  .about-pic-container img {
    height: 100%;
    width: auto;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    border-bottom: 3px solid #2c3e50;
    margin: 20px;
  }

  .blue-span {
    color: cornflowerblue;
  }

  @media screen and (max-width: 576px) {
    .about-section {
      width: 90%;
    }
  }

</style>