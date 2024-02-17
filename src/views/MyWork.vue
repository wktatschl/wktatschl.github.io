<template>
  <div class="work-container">
    <HeaderComponent />
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
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  components: {
    HeaderComponent,
  }
}
</script>

<style>

</style>