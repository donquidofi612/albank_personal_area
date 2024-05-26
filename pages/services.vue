<template>
  <div>
    <div class="tw-flex tw-flex-col tw-gap-6 tw-min-h-screen">
      <div class="tw-flex tw-flex-col">
        <span class="tw-text-lg tw-text-red-700">Services</span>
<!--        <span>Effectuer un virement</span>-->
      </div>

      <!--//      <div class="tw-flex tw-flex-row tw-gap-2">-->
      <!--        <div class="tw-rounded tw-bg-gradient-to-r tw-from-red-700 tw-via-red-800 tw-to-black tw-px-4 tw-py-6 tw-flex tw-items-center tw-justify-between">-->

      <!--          <div class="tw-bg-whie">-->
      <!--            <v-icon color="white" class="tw-text-white" size="30">mdi-cash-multiple</v-icon>-->
      <!--          </div>-->
      <!--          <h3 class="tw-text-base tw-font-normal tw-text-white">Faire un virement</h3>-->
      <!--        </div>-->
      <!--      </div>-->

      <Modal :isOpen="isModalOpen" :title="`Bonjour ${config.client_name}`" :content="modalContent" @close="isModalOpen = false" />

      <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4">
        <div class="tw-flex tw-flex-col tw-p-8 tw-bg-white tw-shadow-md hover:shodow-lg tw-rounded-2xl">
          <div class="tw-flex tw-items-center tw-justify-between">
            <div class="tw-flex tw-items-center">
              <svg xmlns="http://www.w3.org/2000/svg"
                   class="tw-w-16 tw-h-16 tw-rounded-2xl tw-p-3 tw-border tw-border-red-100 tw-text-red-400 tw-bg-red-50" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div class="tw-flex tw-flex-col tw-ml-3">
                <div class="tw-font-medium tw-leading-none">Chequier</div>
                <p class="tw-text-sm tw-text-gray-600 tw-leading-none tw-mt-1">Commande de chequier
                </p>
              </div>
            </div>
            <button  class="flex-no-shrink tw-bg-red-500 tw-px-5 tw-ml-4 tw-py-2 tw-text-sm tw-shadow-sm hover:tw-shadow-lg tw-font-medium tw-tracking-wider tw-border-2 tw-border-red-500 tw-text-white tw-rounded-full">commander</button>
          </div>
        </div>

        <div class="tw-flex tw-flex-col tw-p-8 tw-bg-white tw-shadow-md hover:shodow-lg tw-rounded-2xl">
          <div class="tw-flex tw-items-center tw-justify-between">
            <div class="tw-flex tw-items-center">
              <svg xmlns="http://www.w3.org/2000/svg"
                   class="tw-w-16 tw-h-16 tw-rounded-2xl tw-p-3 tw-border tw-border-red-100 tw-text-red-400 tw-bg-red-50" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div class="tw-flex tw-flex-col tw-ml-3">
                <div class="tw-font-medium tw-leading-none">Abonnement</div>
                <p class="tw-text-sm tw-text-gray-600 tw-leading-none tw-mt-1">Comptes de l'abonnement
                </p>
              </div>
            </div>
            <button  class="flex-no-shrink tw-bg-red-500 tw-px-5 tw-ml-4 tw-py-2 tw-text-sm tw-shadow-sm hover:tw-shadow-lg tw-font-medium tw-tracking-wider tw-border-2 tw-border-red-500 tw-text-white tw-rounded-full">consulter</button>
          </div>
        </div>

        <div class="tw-flex tw-flex-col tw-p-8 tw-bg-white tw-shadow-md hover:shodow-lg tw-rounded-2xl">
          <div class="tw-flex tw-items-center tw-justify-between">
            <div class="tw-flex tw-items-center">
              <svg xmlns="http://www.w3.org/2000/svg"
                   class="tw-w-16 tw-h-16 tw-rounded-2xl tw-p-3 tw-border tw-border-red-100 tw-text-red-400 tw-bg-red-50" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div class="tw-flex tw-flex-col tw-ml-3">
                <div class="tw-font-medium tw-leading-none">Demandes</div>
                <p class="tw-text-sm tw-text-gray-600 tw-leading-none tw-mt-1">Historique des demandes
                </p>
              </div>
            </div>
            <button  class="flex-no-shrink tw-bg-red-500 tw-px-5 tw-ml-4 tw-py-2 tw-text-sm tw-shadow-sm hover:tw-shadow-lg tw-font-medium tw-tracking-wider tw-border-2 tw-border-red-500 tw-text-white tw-rounded-full">voir</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal";
export default {
  components: {Modal},
  layout: 'admin',
  data(){
    return {
      isModalOpen: true,
    }
  }
}
</script>
