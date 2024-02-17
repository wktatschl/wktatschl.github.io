<template>
  <router-view/>
</template>

<style>

*, ::before, ::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  /* font-family: 'Cormorant', serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2, h3, h4 {
  font-family: 'Cormorant', serif;
  font-weight: bold;
  /* font-size: 2.5em; */
  /* font-family: 'Avenir', Arial, Helvetica, sans-serif; */
}

h1 {
  font-size: 3em;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

router-link a {
  text-decoration: none;
}

nav a.router-link-exact-active {
  /* color: #42b983; */
  color: cornflowerblue;
}
</style>
