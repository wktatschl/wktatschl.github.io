<template>
  <div class="work-container">
    <HeaderComponent />
    <br>
    <br>
    <h1 v-if="isEnglish">Past <span class="blue-span"> projects</span></h1>
    <h1 v-else><span class="blue-span">Projets</span> réalisés</h1>
    <br>
    <br>
    <div class="work-section" id="myWork">
      <div v-for="(project, index) in myProjects" class="recent-project" :key="index">
        <h2>{{ project.title }}</h2>
        <p class="technos">{{ project.technologies }}</p>
        <br>
        <div class="proj-img-container">
          <img :src="project.image" :alt="project.title">
        </div>
        <br>
        <p v-if="isEnglish">{{ project.description_en }}</p>
        <p v-else>{{ project.description_fr }}</p>
        <br>
        <div class="proj-btn-container">
          <a :href="project.domain">
            <span v-if="isEnglish">view project</span>
            <span v-else>voir le projet</span>
          </a>
          <span>|</span>
          <a :href="project.url">
            <span v-if="isEnglish">see on GitHub</span>
            <span v-else>vers GitHub</span>
          </a>
        </div>
    </div>
    
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
    ...mapState(['myProjects', 'language']),
    isEnglish() {
      return this.language === 'english' 
    }
  }
}
</script>

<style scoped>

  .work-section {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 80%;
    margin: 0 auto 50px;
    text-align: left;
    scroll-margin-top: 50px;
  }

  .recent-project {
    display: flex;
    flex-direction: column;
    width: calc(50% - 15px);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 30px;
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
    width: 90%;
  }

  .proj-btn-container {
    flex-grow: 1;
    display: flex;
    align-items: end;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 15px;
    color: cornflowerblue;
  }

  .proj-btn-container a {
    text-decoration: none;
    color: cornflowerblue;
  }

  .proj-btn-container a:hover {
    color: #FFC0CB;
  }

  .linkBtn a {
    text-decoration: none;
    color: white;
  }

  .blue-span {
    color: cornflowerblue;
  }

  @media screen and (max-width: 1000px) {
    .hero-img-container {
      display: none;
    }

    .hero-intro {
      margin-top: 40px;
    }

    .recent-projects-section {
      margin-top: 40px;
    }
  }

  @media screen and (max-width: 768px) {
    .recent-project {
      width: 100%;
    }
  }

</style>