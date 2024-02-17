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
        <h2>About me </h2>
        <br>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est ea iste possimus nostrum ratione similique adipisci dolores unde omnis, culpa mollitia veritatis perferendis itaque quasi sed dolorum accusamus, sequi minus officia architecto suscipit repellat. Rerum sunt incidunt animi optio sit minima, consectetur sint cum voluptate suscipit exercitationem temporibus libero dolorem corporis voluptates sequi consequuntur ab ipsum. Amet voluptates exercitationem quas, nulla laborum error magni? Commodi maiores exercitationem harum explicabo et saepe quisquam doloribus non optio aperiam, odit asperiores quam dolorum voluptas nisi eos autem dolorem dolor a numquam ut fugit vero aliquam quaerat. Voluptatibus, aliquid. Accusantium eligendi perspiciatis earum!</p>
      </div>
      <br>
      <!-- <div class="about-pic-container">
        <img src="../assets/img/test_headshot_wolfgang.png" alt="headshot of Wolfgang">
      </div> -->
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

  /* h1 {
    text-align: center;
  } */

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

  @media screen and (max-width: 576px) {
    .about-section {
      width: 90%;
    }
  }

</style>