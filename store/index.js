import { createStore } from 'vuex'

export default createStore({
    state: {

        myProjects: [
            {
              id: 1,
              title: 'WebWares eCommerce',
              technologies: 'Vue.js (Vuex)',
              description: 'In this group project, we used Vuex to dynamically manage the state of our wholesale furniture and home decor eCommerce site. I was responsable for creating the product listing page (which dynamically displayed products as an admin modified the product list), product details page, back-office management of products, and a Favorites functionality, relying on localStorage to store the current state of a user\'s Favorites and Cart items.',
              image: require('@/assets/img/WebWares_favs_screenshot.png'),
              url: 'https://github.com/wktatschl',
              domain: 'https://tommy-bou.github.io/Projet-WebWares'
            },
            {
              id: 2,
              title: 'Lorem Agence',
              technologies: 'HTML, CSS, Bootstrap',
              description: 'An individual project in which I was tasked in creating a static single-page website. I had to replicate an interface provided me in a way that harmonized Bootstrap and my own CSS seamlessly.',
              image: require('@/assets/img/Agence_Lorem_screenshot.png'),
              url: 'https://github.com/wktatschl',
              domain: 'https://agence-lorem.vercel.app/'
            },
            {
              id: 3,
              title: 'Le Morpion',
              technologies: 'JavaScript',
              description: 'Le grand classique !',
              image: require('@/assets/img/Le_morpion_screenshot.png'),
              url: 'https://github.com/wktatschl/Tic-tac-toe',
              domain: 'https://tic-tac-toe-sooty-phi-20.vercel.app/'
            },
            {
              id: 4,
              title: 'Générateur Hex',
              technologies: 'JavaScript',
              description: 'Cette application permet à l\'utilisateur de faire défiler des paires de couleurs générées de manière aléatoire (affichées en tant qu\'arrière-plan du dégradé), de modifier les couleurs générées (en ajustant la couleur et/ou le degré de dégradé), puis de copier le dégradé préféré dans le presse-papiers de l\'utilisateur afin de l\'utiliser.',
              image: require('@/assets/img/Color_generator_screenshot.png'),
              url: 'https://github.com/wktatschl',
              domain: 'https://gradient-generator-bay.vercel.app/'
            },
             {
              id: 5,
              title: '3D Text Experience',
              technologies: 'three.js',
              description: 'After coming across some really cool 3D experiences (not least of which was Bruno Simon\'s) created using three.js, I decided I had to start learning this myself. This was done using a TextGeometry and TorusGeometries (300 randomly placed and sized), as well as a metallic texture (among other things). Looking forward to creating more and more complex 3D experiences !',
              image: require('@/assets/img/3D_initials_screenshot.png'),
              url: 'https://github.com/wktatschl',
              domain: 'https://3-d-text-three-js-journey.vercel.app/'
            },
          ],

          language: 'english'
    },
    mutations: {
      TOGGLE_LANGUAGE(state) {
        state.language = state.language === 'english' ? 'french' : 'english';
      }
    },
    actions: {},

})