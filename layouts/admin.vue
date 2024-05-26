<template>
  <v-app>
  <div v-if="renderPage" class="tw-flex tw-flex-col tw-w-full tw-relative">

    <div  class="tw-bg-gray-200 tw-shadow-md tw-w-full tw-fixed tw-flex tw-flex-col">
      <div style="z-index: 100" class="tw-w-full tw-bg-white tw-h-16 tw-shadow-md tw-flex tw-justify-between">
        <div>
          <div @click="showmenu = !showmenu" class="tw-px-2 tw-py-1 lg:tw-hidden">
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H14M4 18H9" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>


        <div class="tw-flex tw-items-center tw-gap-4">
          <v-icon color="grey">mdi mdi-bell</v-icon>
          <div class="tw-flex tw-items-center tw-gap-3">
            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 48 48" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title/><path d="M24,21A10,10,0,1,1,34,11,10,10,0,0,1,24,21ZM24,5a6,6,0,1,0,6,6A6,6,0,0,0,24,5Z"/><path d="M42,47H6a2,2,0,0,1-2-2V39A16,16,0,0,1,20,23h8A16,16,0,0,1,44,39v6A2,2,0,0,1,42,47ZM8,43H40V39A12,12,0,0,0,28,27H20A12,12,0,0,0,8,39Z"/></svg>
            <span class="tw-uppercase text-xs tw-text-gray-600">{{config.client_fullname}}</span>
          </div>
          <div @click="logout()" class="tw-text-red-600 tw-px-2 tw-py-2 w-fit tw-cursor-pointer">
            <svg class="tw-text-red-600 tw-mr-4 tw-mb-1" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none">
              <path stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22.5 4.742a13 13 0 11-13 0M16 3v10"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div :class="{'hidden lg:tw-flex lg:tw-flex-col': !showmenu}" style="transition: all 0.5s ease-in-out; z-index: 100" class="tw-w-[1/4] tw-shadow-xl tw-fixed tw-bg-red-700 tw-transition tw-h-screen">
      <div class="tw-flex tw-flex-col">
        <div class="md:border-[1px] tw-border-gray-300 tw-bg-white w-fit tw-px-4 tw-py-4 tw-flex tw-gap-3 tw-w-full">
          <div class="tw-flex tw-justify-between tw-w-full tw-gap-1">
            <img class="tw-w-full tw-h-8"  src="@/assets/img/logo.png"/>
          </div>
          <div @click="showmenu = !showmenu" class="md:tw-hidden tw-text-lg"><v-icon>mdi-close</v-icon></div>
        </div>
        <ul class="tw-flex tw-flex-col tw-pl-2 tw-py-2">
          <li @click="$router.push(link.path), showmenu = false" v-for="(link, index) in links" :key="index" class="tw-flex tw-items-center tw-gap-2 border-[1px] tw-cursor-pointer hover:tw-text-gray-400 tw-border-gray-300 tw-text-white tw-w-full tw-px-4 tw-py-2 tw-text-left">
            <v-icon size="24" color="white" class="tw-text-white">{{ link.mdi_icon }}</v-icon>
            <span class="tw-text-md">{{ link.name }}</span>
          </li>
        </ul>

      </div>
    </div>

    <div class="tw-w-full tw-bg-gray-100">
      <div class="tw-flex tw-flex-col tw-gap-4 tw-px-4 md:tw-pl-[13rem] tw-pt-[4rem]">
        <nuxt/>
      </div>
    </div>


  </div>
  <div v-else>

  </div>
  </v-app>
</template>

<script>
export default {
  data(){
    return {
      showmenu: false,
      renderPage: false,
      links: [
        {
          name: "Accueil",
          path: "/",
          mdi_icon: "mdi-home-account"
        },
        {
          name: "Comptes",
          path: "/comptes",
          mdi_icon: "mdi-database-alert"
        },
        {
          name: "Virements",
          path: "/virements",
          mdi_icon: "mdi-credit-card-outline"
        },
        {
          name: "Services",
          path: "/services",
          mdi_icon: "mdi-file-document-check-outline"
        },
        {
          name: "Documents",
          path: "/documents",
          mdi_icon: "mdi-file-document-check-outline"
        },
        {
          name: "Mes marchés",
          path: "/marches",
          mdi_icon: "mdi-home-account"
        },
        {
          name: "Profil",
          path: "/profil",
          mdi_icon: "mdi-account-arrow-right"
        },
      ],
    }
  },
  beforeMount() {
    if (!localStorage.getItem('loggedin') || localStorage.getItem('loggedin') === 'false') {
      console.log("login", localStorage.getItem('loggedin'))
      this.$router.push('/login');
    }
    else
      this.renderPage = true;
  },
  methods: {
    logout() {
      // Récupérez la valeur actuelle de 'loggedin' dans le localStorage
      const loggedIn = localStorage.getItem('loggedin');

      // Si 'loggedin' est actuellement 'true', mettez-le à 'false' dans le localStorage
      if (loggedIn === 'true') {
        localStorage.setItem('loggedin', 'false');
      }

      // Redirigez l'utilisateur vers la page de connexion
      this.$router.replace('/login');
    }
  }
}
</script>
