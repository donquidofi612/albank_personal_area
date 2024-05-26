<template>
  <div>
    <div class="tw-bg-black">
      <ul class="tw-flex tw-gap-4 tw-text-white tw-text-xs tw-px-4 tw-py-2">
        <li>Particuliers</li>
        <li>Entreprises</li>
        <li>Professionels</li>
      </ul>
    </div>
    <div class="tw-bg-white tw-shadow-lg tw-px-4 tw-py-4">
      <img class="tw-w-36 tw-h-8"  src="@/assets/img/logo.png"/>
    </div>
    <div class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-full tw-h-screen tw-bg-gray-100">

      <div class="tw-w-5/6 md:tw-w-1/3 tw-flex tw-flex-col tw-justify-center tw-items-center tw-shadow-md tw-bg-white tw-gap-4  tw-py-12 tw-rounded-md">
<!--        <img class="tw-w-24 tw-h-20"  src="https://yop.l-frii.com/wp-content/uploads/2023/05/Graduate-Programme-de-SOCIETE-GENERALE-pour-les-jeunes-diplomes.png"/>-->
<!--        <p>ESPACE CLIENT</p>-->

        <div class="tw-flex tw-flex-col tw-gap-4 tw-mb-6 tw-px-4 md:tw-px-14">
          <h1 class="tw-text-4xl">Connexion</h1>
          <p class="text-sm">
            Identifiez-vous pour accéder à vos comptes en toute sécurité
          </p>
        </div>

        <div v-if="showError" class="tw-bg-red-500 tw-text-white tw-w-full tw-text-center tw-py-1">
          Identifiants incorrect
        </div>

        <div class="tw-flex tw-flex-col tw-w-full tw-gap-2 tw-px-4 md:tw-px-14">
          <label>Saisir votre identifiant *</label>
          <input v-model="identifiants" class="tw-text-black tw-text-base tw-bg-gray-100 tw-border-2 tw-px-4 tw-py-2 tw-border-gray-300" placeholder="Exemple: 1234567890"/>
        </div>

        <div class="tw-flex tw-flex-col tw-w-full tw-gap-2 tw-px-4 md:tw-px-14">
          <label>Mot de passe*</label>
          <input v-model="password" class="tw-text-black tw-text-base tw-bg-gray-100 tw-border-2 tw-px-4 tw-py-2 tw-border-gray-300" placeholder="*******" type="password"/>
        </div>

        <div class="tw-w-full tw-flex-col tw-flex tw-gap-6 tw-px-4 md:tw-px-14">
          <button @click="login" class="tw-bg-red-700 tw-w-full tw-text-white tw-py-4 tw-rounded-xs text-xs">
            <span v-if="!loading">Connexion</span>
            <span v-else>...</span>
          </button>
          <!--          <span class="tw-text-center tw-text-blue-900"><u>Mot de passe oublié?</u></span>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Button from "../components/base/Button";
export default {
  // components: {Button},
  data(){
    return {
      loading: false,
      identifiants: '',
      password: '',
      showError: false
    }
  },
  methods: {
    async login(){
      this.showError = false
      this.loading = true;
      if(this.identifiants === '457102883746' && this.password === '352986'){
        await setTimeout(() => {
          this.loading = false;
          localStorage.setItem('loggedin', true)
          this.$router.replace('/')
        }, 2000)
      }
      else {
        await setTimeout(() => {
          this.loading = false;
          this.showError = true
        }, 2000)

      }
    }
  }
}
</script>
