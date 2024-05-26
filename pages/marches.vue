<template>
  <div>
    <div class="tw-flex tw-flex-col tw-gap-6 tw-min-h-screen">
      <div class="tw-flex tw-flex-col">
        <span class="tw-text-lg tw-text-red-700">Marché</span>
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
