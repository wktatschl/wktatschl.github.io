import { createStore } from 'vuex'

export default createStore({
    state: {

        myProjects: [
            {
              id: 1,
              title: 'WebWares eCommerce',
              technologies: 'Vue.js (Vuex)',
              description_en: 'In this group project, we used Vuex to dynamically manage the state of our wholesale furniture and home decor eCommerce site. I was responsable for creating the product listing page (which dynamically displayed products as an admin modified the product list), product details page, back-office management of products, and a Favorites functionality, relying on localStorage to store the current state of a user\'s Favorites and Cart items.',
              description_fr: 'Dans ce projet de groupe, nous avons utilisé Vuex pour gérer dynamiquement l\'état de notre site de commerce électronique de meubles et de décoration d\'intérieur en gros. J\'étais responsable de la création de la page de liste des produits (qui affichait dynamiquement les produits lorsqu\'un administrateur modifiait la liste des produits), de la page de détails des produits, de la gestion du back-office des produits, et d\'une fonctionnalité de Favoris, s\'appuyant sur localStorage pour stocker l\'état actuel des Favoris et des éléments du panier d\'un utilisateur.',
              image: require('@/assets/img/WebWares_favs_screenshot.png'),
              url: 'https://github.com/wktatschl',
              domain: 'https://tommy-bou.github.io/Projet-WebWares'
            },
            {
              id: 2,
              title: 'Lorem Agence',
              technologies: 'HTML, CSS, Bootstrap',
              description_en: 'An individual project in which I was tasked in creating a static single-page website. I had to replicate an interface provided me in a way that harmonized Bootstrap and my own CSS seamlessly.',
              description_fr: 'Un projet individuel dans lequel j\'ai été chargé de créer un site web statique d\'une seule page. Je devais reproduire une interface qui m\'avait été fournie de manière à harmoniser Bootstrap et mon propre CSS de manière transparente.',
              image: require('@/assets/img/Agence_Lorem_screenshot.png'),
              url: 'https://github.com/wktatschl/Agence-Lorem',
              domain: 'https://agence-lorem.vercel.app/'
            },
            {
              id: 3,
              title: 'Le Morpion',
              technologies: 'JavaScript',
              description_en: 'A classic !',
              description_fr: 'Le grand classique !',
              image: require('@/assets/img/Le_morpion_screenshot.png'),
              url: 'https://github.com/wktatschl/Tic-tac-toe',
              domain: 'https://tic-tac-toe-sooty-phi-20.vercel.app/'
            },
            {
              id: 4,
              title: 'Gradient Generator',
              technologies: 'JavaScript',
              description_en: 'This application allows the user to scroll through pairs of randomly generated colors (displayed as the gradient background), modify the generated colors (by adjusting the color and/or degree of gradient), and then copy the selected gradient to the user\'s clipboard for use.',
              description_fr: 'Cette application permet à l\'utilisateur de faire défiler des paires de couleurs générées de manière aléatoire (affichées en tant qu\'arrière-plan du dégradé), de modifier les couleurs générées (en ajustant la couleur et/ou le degré de dégradé), puis de copier le dégradé préféré dans le presse-papiers de l\'utilisateur afin de l\'utiliser.',
              image: require('@/assets/img/Color_generator_screenshot.png'),
              url: 'https://github.com/wktatschl/Gradient-generator',
              domain: 'https://gradient-generator-bay.vercel.app/'
            },
             {
              id: 5,
              title: '3D Text Experience',
              technologies: 'three.js',
              description_en: 'After coming across some really cool 3D experiences (not least of which was Bruno Simon\'s) created using three.js, I decided I had to start learning this myself. This was done using a TextGeometry and TorusGeometries (300 randomly placed and sized), as well as a metallic texture (among other things). Looking forward to creating more and more complex 3D experiences !',
              description_fr: 'Après avoir découvert des expériences 3D vraiment sympas (notamment celle de Bruno Simon) créées à l\'aide de three.js, j\'ai décidé que je devais commencer à apprendre cela moi-même. Cette expérience a été réalisée en utilisant une TextGeometry et des TorusGeometries (300 placés et dimensionnés aléatoirement), ainsi qu\'une texture métallique (entre autres). J\'ai hâte de créer des expériences 3D de plus en plus complexes !',
              image: require('@/assets/img/3D_initials_screenshot.png'),
              url: 'https://github.com/wktatschl/3D-text-three.js-journey',
              domain: 'https://3-d-text-three-js-journey.vercel.app/'
            },
          ],

          language: 'french'
    },
    mutations: {
      TOGGLE_LANGUAGE(state) {
        state.language = state.language === 'english' ? 'french' : 'english';
      }
    },
    actions: {},

})