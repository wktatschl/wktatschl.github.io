<template>
  <div class="home-container">
    <div class="home">
      <HeaderComponent />
    </div>
    <div class="hero-section">
      <div class="hero-intro">
        <h1>Hello ! <span>Welcome </span>to my portfolio site.</h1>
        <br>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ipsum commodi, sed voluptatum pariatur, ipsam vel odit explicabo dolore blanditiis, provident vitae mollitia! Aliquid molestias fugiat ad nesciunt sint incidunt, similique tenetur enim nulla minus eveniet nam sit quas repellat laudantium a alias tempore! Quia laboriosam nisi expedita nostrum iusto.</p>
        <br>
        <div class="hero-actions">
          <router-link to="/contact" id="work-together" class="action-btn">work together</router-link>
          <router-link to="/my-work" id="past-projects" class="action-btn">past projects</router-link>
          <!-- <button id="past-projects" class="action-btn">past projects</button> -->
        </div>
      </div>
      <div class="hero-img-container">
        <div class="hero-img">
          <img src="@/assets/img/church-ceiling.jpg" alt="church vaulted ceiling">
        </div>
      </div>
    </div>

    <div class="recent-projects-section" id="myWork">
      <div v-for="(project, index) in myProjects" class="recent-project" :key="index">
        <h2>{{ project.title }}</h2>
        <p class="technos">{{ project.technologies }}</p>
        <br>
        <div class="proj-img-container">
          <img :src="project.image" :alt="project.title">
        </div>
        <br>
        <p>{{ project.description }}</p>
        <br>
        <div class="proj-btn-container">
          <!-- <button class="linkBtn"> -->
            <a :href="project.url">checkout GitHub</a>
          <!-- </button> -->
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {

  components: {
    HeaderComponent,
  },
  data() {
    return {
      isFront: true,

      myProjects: [
        {
          id: 1,
          title: 'WebWares eCommerce',
          technologies: 'Vue.js (Vuex)',
          description: 'In this group project, we used Vuex to dynamically manage the state of our wholesale furniture and home decor eCommerce site. I was responsable for creating the product listing page (which dynamically displayed products as an admin modified the product list), product details page, back-office management of products, and a Favorites functionality, relying on localStorage to store the current state of a user\'s Favorites and Cart items.',
          image: require('@/assets/img/WebWares_favs_screenshot.png'),
          url: 'https://github.com/wktatschl' 
        },
        {
          id: 2,
          title: 'Lorem Agence',
          technologies: 'HTML, CSS, Bootstrap',
          description: 'An individual project in which I was tasked in creating a static single-page website. I had to replicate an interface provided me in a way that harmonized Bootstrap and my own CSS seamlessly.',
          image: require('@/assets/img/Agence_Lorem_screenshot.png'),
          url: 'https://github.com/wktatschl'
        },
        {
          id: 3,
          title: 'Le Morpion',
          technologies: 'JavaScript',
          description: 'Le grand classique !',
          image: require('@/assets/img/Le_morpion_screenshot.png'),
          url: 'https://github.com/wktatschl/Tic-tac-toe'
        },
        {
          id: 4,
          title: 'Générateur Hex',
          technologies: 'JavaScript',
          description: 'Cette application permet à l\'utilisateur de faire défiler des paires de couleurs générées de manière aléatoire (affichées en tant qu\'arrière-plan du dégradé), de modifier les couleurs générées (en ajustant la couleur et/ou le degré de dégradé), puis de copier le dégradé préféré dans le presse-papiers de l\'utilisateur afin de l\'utiliser.',
          image: require('@/assets/img/Color_generator_screenshot.png'),
          url: 'https://github.com/wktatschl' 
        },
         {
          id: 5,
          title: '3D Text Experience',
          technologies: 'three.js',
          description: 'After coming across some really cool 3D experiences (not least of which was Bruno Simon\'s) created using three.js, I decided I had to start learning this myself. This was done using a TextGeometry and TorusGeometries (300 randomly placed and sized), as well as a metallic texture (among other things). Looking forward to creating more and more complex 3D experiences !',
          image: require('@/assets/img/3D_initials_screenshot.png'),
          url: 'https://github.com/wktatschl'
        },
      ],
    }
  },
}
</script>

<style scoped>

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
  perspective: 1000px;
}

.hero-img {
  width: 100%;
  height: 100%;
}

.hero-img img {
  height: 600px;
  margin-top: 40px;
  border-radius: 10%;
  clip-path: circle(40%);
}

.hero-actions {
  display: flex;
  gap: 10px;
}

.action-btn {
  padding: 8px 15px;
  border-radius: 10px;
  border: 1px solid cornflowerblue;
  font-family: 'Avenir', sans-serif;
  font-size: .9em;
  color: #2c3e50;
  text-decoration: none;
}

#work-together {
  background-color: transparent;
  font-weight: bold;
  border: 1px solid #FFC0CB;
  border: 2px solid cornflowerblue;
}

#past-projects {
  background-color: transparent;
  border: 2px solid #FFC0CB;
  color: #2c3e50;
  font-weight: bold;
}

.hero-intro span {
  color: cornflowerblue
}

.recent-projects-section {
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
  width: calc(50% - 10px);
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
}

.proj-btn-container a {
  text-decoration: none;
  color: cornflowerblue;
}

/* .linkBtn {
  padding: 8px 15px;
  border-radius: 10px;
  border: none;
  font-family: 'Avenir', sans-serif;
  background-color: cornflowerblue;
} */

.linkBtn a {
  text-decoration: none;
  color: white;
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