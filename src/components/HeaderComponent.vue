<template>
  <nav class="main-header">
    <!-- Logo (left side) -->
    <div class="logo">
      <router-link to="/">
        <span class="w">W</span><span class="k">K</span>
      </router-link>
    </div>

    <!-- Navigation Links (center) -->
    <div class="nav-links" v-if="!isMenuOpen">
      <router-link to="/">
        <span v-if="isEnglish">home</span>
        <span v-else>accueil</span>
      </router-link>
      <router-link to="/my-work">
        <span v-if="isEnglish">work</span>
        <span v-else>projets</span>
        </router-link>
      <router-link to="/about-me">
        <span v-if="isEnglish">about</span>
        <span v-else>à propos de moi</span>
      </router-link>
      <router-link to="/contact">contact</router-link>
    </div>

    <!-- Language Toggle -->
    <!-- <button @click="toggleLanguage" id="langBtn"><span v-if="isEnglish">EN </span><span v-else>FR</span></button> -->
    <button @click="toggleLanguage" id="langBtn">
      <span :class="{ 'active': isEnglish }">EN </span>
      <span :class="{ 'active': !isEnglish }">FR</span>
    </button>

    <!-- Social Links (right side) -->

    <div class="social-links">
      <a href="https://www.linkedin.com/in/wolfgangtatschl"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
      </svg></a>
      <a href="https://github.com/wktatschl"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
      </svg></a>
    </div>

    <!-- Burger Menu -->
    <div class="burger-menu" @click="toggleMenu">
      <div class="burger-line"></div>
      <div class="burger-line"></div>
      <div class="burger-line"></div>
    </div>

    <!-- Lateral dropdown menu -->
    <div class="lateral-menu" :class="{ 'open': isMenuOpen }">
      <span class="close-icon" @click="closeMenu">✕</span>
      <router-link to="/">
        <span v-if="isEnglish">home</span>
        <span v-else>accueil</span>
      </router-link>
      <router-link to="/my-work">
        <span v-if="isEnglish">work</span>
        <span v-else>projets</span>
      </router-link>
      <router-link to="/about-me">
        <span v-if="isEnglish">about</span>
        <span v-else>à propos de moi</span>
      </router-link>
      <router-link to="/contact">
        <span v-if="isEnglish">contact</span>
        <span v-else>contact</span>
      </router-link>
    </div>
  </nav>
</template>


<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['language']),
    isEnglish() {
      return this.language === 'english'
    }, 
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleLanguage() {
      this.$store.commit('TOGGLE_LANGUAGE')
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
}
</script>

<style scoped>

    .main-header {
        display: flex;
        justify-content: space-between;
        background-color: aliceblue;
        width: 100vw;
        align-items: center;
        border-bottom: 2px dotted cornflowerblue;
    }

    .burger-menu {
      display: none;
    }

    .lateral-menu {
      position: fixed;
      top: 0;
      right: -200px;
      width: 150px;
      height: auto;
      background-color: aliceblue;
      transition: right 0.3s ease;
      padding: 20px 0;
      border: 2px dotted cornflowerblue;
      z-index: 1;
    }

    .lateral-menu.open {
      right: 0;
    }

    .close-icon {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }

    .lateral-menu a {
      display: block;
      padding: 15px;
      text-decoration: none;
      color: #2c3e50;
      font-family: 'Ubuntu Mono', monospace;
      font-size: 1.3em;
    }

    .lateral-menu a:hover {
      color:#FFC0CB;
    }

    .burger-line {
      width: 30px;
      height: 3px;
      background-color: #2c3e50;
      margin-top: 5px;
    }

    .logo {
       flex: 0 1 100px;
       
    }

    .logo a{
        font-family: 'Ubuntu Mono', monospace;
        text-decoration: none;
        font-size: 5em;
        color: cornflowerblue;
    }

    .k {
      color: #FFC0CB;
      margin-left: -12px;
    }

    .logo span {
      transition: margin .5s ease;
    }

    .logo:hover span{
      margin: -1px;
      transition: .5s ease;
    }

    .nav-links {
        display: flex;
        flex: 0 1 450px;
        gap: 40px;
        text-decoration: none;
        align-items: center;
        font-size: 1.05em;
        font-family: 'Ubuntu Mono', monospace;
    }

    .nav-links a {
        text-decoration: none;
    }

    .nav-links a:hover {
      color:#FFC0CB;
    }

    .social-links {
      display: flex;
      align-items: center;
      color: cornflowerblue;
    }

    .bi-linkedin {
      border-radius: 50%;
      margin-right: 10px;
    }

    #langBtn {
      padding: 7px 4px 8px;
      background-color: #2c3e50;
      border: 1px solid #2c3e50;
      border-radius: 15px;
      color: white;
      font-weight: bold;
      font-size: .8em;
      cursor: pointer;
      margin: 0 10px;
    }

    #langBtn span {
      padding: 6px 6px;
      border-radius: 10px;
      transition: all .1s ease-in;
      font-family: 'Ubuntu Mono', monospace;
    }

    #langBtn span.active {
      background-color: aliceblue;
      color: #2c3e50;
    }

    .pink {
      background-color: #FFC0CB;
    }

    @media screen and (max-width: 780px) {
      #langBtn {
        display: flex;
        flex-direction: column;
      }
    }

    @media screen and (max-width: 600px) { 
      .burger-menu {
        display: block;
        cursor: pointer;
      }

      #langBtn {
        display: block;
      }

      .nav-links {
        display: none;
      }
    }

</style>