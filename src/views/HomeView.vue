<template>
  <div class="home-container">
    <div class="home">
      <HeaderComponent />
    </div>
    <br>
    <br>
    <div class="hero-section">
      <div class="hero-intro">
        <h1 v-if="isEnglish">Hello ! <span class="welcome">Welcome </span>to my portfolio site.</h1>
        <h1 v-else>Bonjour ! <span class="welcome">Bienvenue </span>sur mon site portfolio.</h1>
        <br>
        <p v-if="isEnglish">Many of us have experienced the feeling of stepping into a special, sacred space. This feeling can slow us down, make us speak more softly, help us to be more present. An online space should feel the same way. No, your users need not have a supernatural experience when they visit your 'space', but form and function should work together just right so that your user knows exactly why they are there, and can find exactly what they're looking for.</p>
        <p v-else>Nous sommes nombreux à avoir éprouvé le sentiment de pénétrer dans un espace spécial et sacré. Ce sentiment peut nous ralentir, nous faire parler plus doucement, nous aider à être plus présents. Il devrait en être de même pour un espace en ligne. Non, vos utilisateurs n'ont pas besoin de vivre une expérience surnaturelle lorsqu'ils visitent votre "espace", mais la forme et la fonction doivent s'accorder parfaitement pour que vos utilisateurs sachent exactement pourquoi ils sont là et puissent trouver exactement ce qu'ils cherchent.</p>
        <br>
        <div class="hero-actions">
          <router-link to="/contact" id="work-together" class="action-btn">
            <span v-if="isEnglish" class="span">contact me</span>
            <span v-else class="span">me contacter</span>
          </router-link>
          <router-link to="/my-work" id="past-projects" class="action-btn">
            <span v-if="isEnglish">past projects</span>
            <span v-else>mes projets</span>
          </router-link>
        </div>
      </div>
      <div class="hero-img-container">
        <div class="hero-img">
          <img src="@/assets/img/church-ceiling.jpg" alt="church vaulted ceiling">
        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
    <div class="recent-projects-section" id="myWork">
      <div class="exp-overview">
        <h4 v-if="isEnglish">At a glance</h4>
        <h4 v-else>En aperçu</h4>
        <h2>
          <span v-if="isEnglish">Techs |</span><span v-else>Technos |</span> 
          <span v-if="isEnglish">Languages| </span>
          <span v-else>Langages| </span>
          Frameworks
        </h2>
        <br>
        <br>
        <p>JavaScript <progress value="80" max="100">80%</progress></p>
        <p>Vue.js <progress value="90" max="100">90%</progress></p>
        <p>CSS <progress value="80" max="100">80%</progress></p>
        <p>HTML <progress value="90" max="100">90%</progress></p>
        <p>Bootstrap <progress value="80" max="100">80%</progress></p>
      </div>
      <div v-for="(project, index) in myProjects" class="recent-project" :key="index">
        <router-link to="/my-work">
        <h2>{{ project.title }}</h2>
        <p class="technos">{{ project.technologies }}</p>
        <br>
        <div class="proj-img-container">
          <img :src="project.image" :alt="project.title">
        </div>
        <br>
        <br>
        <p v-if="isEnglish" class="view-more">see projects page for more info</p>
        <p v-else class="view-more">voir la page projets pour plus d'infos</p>
        </router-link>
      </div>
    </div>
    
    <div class="more-container">
      <router-link to="/my-work" id="see-more"><h5>
        <span v-if="isEnglish">More projects information</span>
        <span v-else>Plus d'informations sur les projets</span>
        </h5></router-link>
      <router-link to="/my-work"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
      </svg></router-link>
    </div>
    
    <div class="cv-container">
      <div class="cv-text">
        <h2 v-if="isEnglish">Download my CV</h2>
        <h2 v-else>Télécharger mon CV</h2>
        <p v-if="isEnglish">Click the button below to download my CV in PDF format :</p>
        <p v-else>Cliquez sur le bouton ci-dessous pour télécharger mon CV au format PDF :</p>
        <br>
        <a href="https://drive.google.com/file/d/1D-psLwxn8kK2nPu2qOgNgiVSPNnD1KJK/view?usp=drive_link" download="TATSCHL_Wolfgang_developpeur_web_CV.pdf" class="download-btn">
          <span v-if="isEnglish">Download CV</span>
          <span v-else>Télécharger le CV</span>
        </a>
      </div>
      <br>
      <div class="cv-img">
        <img src="@/assets/img/wolfgang_CV_screenshot.png" alt="CV screenshot">
      </div>
    </div>

  </div>
  <FooterComponent />
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
    ...mapState(['myProjects', 'language']),
    isEnglish() {
      return this.language === 'english'
    }, 
  },
}
</script>

<style scoped>

template {
  overflow-x: hidden;
}

.hero-section {
  display: flex;
  width: 80%;
  margin: 0 auto;
  align-items: center;
  gap: 50px;
}

.hero-intro {
  text-align: left;
}

.hero-img-container {
  height: 100%;
}

.hero-img {
  width: auto;
  height: 100%;
}

.hero-img img {
  height: 420px;
  width: 420px;
  margin-top: 40px;
  border-radius: 50%;
  padding: 5px;
}

.hero-actions {
  display: flex;
  gap: 10px;
}

.action-btn {
  padding: 8px 15px;
  border-radius: 10px;
  font-family: 'Avenir', sans-serif;
  font-size: .9em;
  color: #2c3e50;
}

#work-together {
  background-color: transparent;
  font-weight: bold;
  border: 2px solid cornflowerblue;
}

#work-together:hover {
  background-color: rgba(100, 148, 237, 0.226);
}

#past-projects {
  background-color: transparent;
  border: 2px solid #FFC0CB;
  color: #2c3e50;
  font-weight: bold;
}

#past-projects:hover {
  background-color: #ffc0cb4e;
}

.hero-intro .welcome {
  color: cornflowerblue;
}

.exp-overview{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(33.33% - 15px);
  padding: 30px;
  border-top: 1px dotted #2c3e50;
  border-left: 1px dotted #2c3e50;
  background-color: aliceblue;
}

.exp-overview h4 {
  color: cornflowerblue;
  font-family: Avenir;
  background-color: white;
  width: fit-content;
  padding: 2px 5px;
}

.exp-overview h2 {
  font-size: 2.5em;
}

.exp-overview p {
  font-family: monospace;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 1.1em;
}

.exp-overview progress {
  appearance: none;
  border-radius: 10px;
  overflow: hidden;
  height: 12px;
}

progress::-webkit-progress-value {
  background-color: cornflowerblue;
}

progress::-moz-progress-bar {
  background-color: cornflowerblue;
}

progress::-webkit-progress-bar {
  background-color: lightgray; 
  border-radius: 5px; 
}

progress::-moz-progress-bar {
  background-color: lightgray; 
  border-radius: 5px;
}

.recent-projects-section {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 80%;
  margin: 0 auto 20px;
  text-align: left;
  scroll-margin-top: 50px;
}

a {
  text-decoration: none;
  color: unset;
}

.recent-project {
  display: flex;
  flex-direction: column;
  width: calc(33.33% - 15px);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 30px;
  position: relative;
}

.recent-project:hover {
  box-shadow: 
    inset 0 4px 4px rgba(0, 0, 0, 0.2);
}

.technos {
  font-family: monospace;
  line-height: 2;
  color: #FFC0CB;
  font-weight: bold;
}

.proj-img-container img {
  height: auto;
  width: 100%;
}

.view-more {
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;
  transform: translateX(-10%);
  color: cornflowerblue;
  font-style: italic;
  font-size: .9em;
}

.proj-btn-container a {
  text-decoration: none;
  color: cornflowerblue;
}

.linkBtn a {
  text-decoration: none;
  color: white;
}

h5 {
  font-size: 1em;
}

.more-container {
  display: flex;
  justify-content: end;
  align-items: center;
  width: 80%; 
  margin: 0 auto;
  gap: 10px;
}

.more-container h5 {
  text-align: right;
  border-radius: 10px;
  width: fit-content;
  padding: 5px;
  color: #2c3e50;
}

.more-container svg {
  color: cornflowerblue;
}

#see-more:hover {
  text-decoration: underline;
}

.cv-container {
  padding: 40px;
  display: flex;
  margin: 50px auto 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: aliceblue;
  border-top: 2px dotted cornflowerblue;
}

.cv-text a {
  color: cornflowerblue;
}

.cv-img img {
  max-width: 500px;
  padding: 10px;
  border: 2px dotted cornflowerblue
}


@media screen and (max-width: 1024px) {
  .hero-img-container {
    display: none;
  }

  .hero-intro {
    margin-top: 40px;
  }

  .recent-projects-section {
    margin-top: 40px;
  }

  .recent-project, .exp-overview {
    width: calc(50% - 10px)
  }

  .exp-overview h2 {
    font-size: 2em;
  }
}

@media screen and (max-width: 768px) {
  .recent-project, .exp-overview {
    width: 100%;
  }

  .cv-img img {
    width: 300px;
    height: auto;
  }
}

  
</style>