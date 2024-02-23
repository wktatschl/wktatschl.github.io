<template>
  <div class="footer-section">
    <p>Handcrafted in Bordeaux 🍷 <span id="copyright">© 2024 Wolfgang TATSCHL</span></p>
    <p></p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    .footer-section {
        display: flex;
        gap: 40px;
        margin: 0 auto;
        padding: 40px;
        background-color: #2c3e50;
        color: white;
        align-items: center;
        justify-content: center;
        font-family: 'Cormorant';
        width: 100%;
    }

    #copyright {
        font-family: Avenir;
        margin-left: 40px;
        font-size: .85em;
    }

</style>