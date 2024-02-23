<template>
  <div>
    <HeaderComponent />
    <br>
    <div class="contact-container">
      <div class="contact-section">
        <div class="contact-form">
          <label for="First name">
            <span v-if="isEnglish" class="span">First name</span>
            <span v-else class="span">Prénom</span>
            </label><br>
          <input type="text" name="first-name" id="first-name" required>
          <br>
          <label for="Last name">
            <span v-if="isEnglish" class="span">Last name</span>
            <span v-else class="span">Nom</span>
          </label><br>
          <input type="text" name="last-name" id="last-name" required>
          <br>
          <label for="Message">Message</label><br>
          <textarea name="message-text" id="message-text" cols="30" rows="10" required></textarea>
          <br>
          <button @click="sendEmail" class="send-btn">
            <span v-if="isEnglish" class="span">Send</span>
            <span v-else class="span">Envoyer</span>
          </button>
        </div>
        <div class="contact-info">
          <h1 v-if="isEnglish">Get in <span class="blue-span">touch</span></h1>
          <h1 v-else>Contactez-<span class="blue-span">moi</span></h1>
          <br>
          <br>
          <div class="contact contact-phone">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
            </svg>
            <p>(+33) 07 69 19 93 87</p>
          </div>
          <div class="contact contact-email">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
            </svg>
            <p>wktatschl@icloud.com</p>
          </div>
          <div class="contact contact-github">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
            <p>github.com/wktatschl</p>
          </div>
          <div class="contact contact-linkedin">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>
            <p>linkedin.com/in/wolfgangtatschl</p>
          </div>
          <br>
          <br>
          <p v-if="isEnglish"></p>
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
    ...mapState(['language']),
    isEnglish() {
      return this.language === 'english'
    }, 
  },
  methods: {
    sendEmail() {
      const firstNameInput = document.getElementById('first-name');
      const lastNameInput = document.getElementById('last-name');
      const messageInput = document.getElementById('message-text');

      const firstName = firstNameInput.value;
      const lastName = lastNameInput.value;
      const message = messageInput.value;

      const subject = encodeURIComponent(`Contact Form Inquiry`);
      const body = encodeURIComponent(`Dear Wolfgang, \n\n ${message} \n\n Cordially, ${firstName} ${lastName}`);

      const mailtoLink = `mailto:wktatschl@icloud.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;

      firstNameInput.value = '';
      lastNameInput.value = '';
      messageInput.value = '';
    }
  }
}
</script>

<style>

  .contact-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contact-section {
    margin: 100px auto;
    display: flex;
    justify-content: center;
    gap: 30px;
    text-align: left;
  }

  .contact-form {
    text-align: left;
    border: 1px solid #2c3e50;
    border-radius: 50px;
    padding: 60px;
  }

  .contact-form input {
    margin-bottom: 10px;
    padding: 4px;
    font-family: 'Avenir', sans-serif;
  }

  #message-text {
    padding: 5px;
    font-family: 'Avenir', sans-serif;
    width: 300px;
  }

  .send-btn {
    padding: 8px 15px;
    border-radius: 10px;
    border: none;
    background-color: cornflowerblue;
    font-family: 'Avenir', sans-serif;
    font-size: .9em;
    color: white;
    text-decoration: none;
    width: 100%;
    margin-top: 10px;
    cursor: pointer;
  }

  .contact-info {
    margin-top: 40px;
  }

  .blue-span {
    color: cornflowerblue;
  }

  .contact {
    display: flex;
  }

  .contact svg {
    color: cornflowerblue;
    margin-bottom: 30px;
  }

  .contact p {
    margin-left: 20px;
  }

  @media screen and (max-width: 768px) {
    .contact-section {
      margin: 0 auto;
      flex-direction: column-reverse;
      max-width: 500px;
      align-items: center;
    }
  }

  @media screen and (max-width: 440px) {
    .contact-form {
      width: 290px;
      padding: 20px;
      margin-bottom: 20px;
    }
  }

</style>