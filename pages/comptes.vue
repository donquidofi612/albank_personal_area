<template>
  <div>
    <div class="tw-flex tw-flex-col tw-gap-6 tw-min-h-screen">
      <div class="tw-flex tw-flex-col">
        <span class="tw-text-lg tw-text-red-700">Synthèse des comptes</span>
        <span class="tw-text-2xl tw-font-bold">{{config.solde}} {{config.currency}}</span>
        <span>Solde total</span>
      </div>

      <div class="tw-flex tw-flex-row tw-gap-2">
        <div class="tw-px-3 tw-py-2 tw-rounded-lg tw-cursor-pointer tw-text-xs md:tw-text-md tw-bg-red-700 tw-text-white">Epargne</div>
        <div class="tw-px-3 tw-py-2 tw-rounded-lg tw-cursor-pointer tw-text-xs md:tw-text-md tw-bg-[#c4c5c5]">Crédits</div>
        <div class="tw-px-3 tw-py-2 tw-rounded-lg tw-cursor-pointer tw-text-xs md:tw-text-md tw-bg-[#c4c5c5]">Assurances</div>
        <div class="tw-px-3 tw-py-2 tw-rounded-lg tw-cursor-pointer tw-text-xs md:tw-text-md tw-bg-[#c4c5c5]">Cartes</div>
      </div>


      <div>
        <ul class="tw-w-full tw-bg-white tw-rounded tw-shadow-md">
          <li
              class="tw-px-6 tw-w-full tw-flex tw-justify-between tw-items-center tw-cursor-default tw-border--2 tw-border-gray-700 tw-border-opacity-100 tw-py-3 tw-text-black dark:tw-border-opacity-50">
                <span class="tw-flex tw-items-center tw-gap-1">
                  <h5 class="tw-text-sm tw-mb-0 tw-pb-0">Libellé</h5>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="tw-w-4 tw-h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                  </svg>
                </span>
            <span>Solde</span>
          </li>
          <li
              class="tw-px-6 tw-w-full tw-flex tw-justify-between tw-items-center tw-cursor-default tw-border-t-2 tw-border-gray-300 tw-border-opacity-100 tw-py-3 tw-text-black dark:tw-border-opacity-50">
            <span class="tw-text-red-600 tw-font-semibold tw-uppercase tw-text-red-700">Epargne </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="red" class="tw-w-4 tw-h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </li>
          <li class="tw-px-6 tw-w-full tw-flex tw-justify-between tw-items-center tw-cursor-default tw-border-t-2 tw-border-gray-300 tw-border-opacity-100 tw-py-3 tw-text-black dark:tw-border-opacity-50">
            <div class="tw-flex tw-justify-between tw-w-full">
              <div class="tw-flex tw-flex-col">
                <span class="tw-text-sm">Epargne </span>
                <span class="tw-text-sm tw-text-gray-600">N°4576220074814032</span>
              </div>
              <div>
                {{config.solde}} {{config.currency}}
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div id="card" class="tw-relative tw-w-84 tw-h-56 tw-rounded-2xl tw-font-mono tw-text-white tw-overflow-hidden tw-cursor-pointer tw-transition-all tw-duration-500" style="transition: 0.6s;transform-style: preserve-3d;">

        <!-- Front content -->
        <div class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-gap-6 tw-p-6 tw-transition-all tw-duration-100 tw-delay-200 tw-z-20" style="transform: rotateY(0deg); background: rgb(184,28,28);background: linear-gradient(90deg, rgba(184,28,28,1) 0%, rgba(0,0,0,1) 76%, rgba(0,0,0,1) 100%);">

          <div class="tw-flex tw-justify-between tw-items-center">
            <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" alt="Smart card" class="tw-w-12">

            <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png" alt="Visa image" class="tw-w-12">
          </div>

          <!-- CardNumber -->
          <div class="">
            <label for="" class="tw-hidden">Card Number</label>
            <input type="text" id="" value="4128 9848 2654 8726" readonly="" class="tw-outline-none tw-w-full tw-bg-transparent tw-text-center tw-text-2xl">
          </div>

          <div class="tw-w-full tw-flex tw-flex-row tw-justify-between">

            <div class="tw-w-full tw-flex tw-flex-col">
              <label for="">Card holder</label>
              <input type="text" :value="config.client_name" readonly="" class="tw-outline-none tw-bg-transparent">
            </div>

            <div class="tw-w-1/4 tw-flex tw-flex-col">
              <label for="">Expires</label>
              <input type="text"  value="09/26" readonly="" class="tw-outline-none tw-bg-transparent">
            </div>

          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
}
</script>
<style scoped>
/*#card:hover { transform: rotateY(180deg); }

#card > div:nth-child(1) { transition-delay: 150ms;}

#card:hover > div:nth-child(1) {
  opacity: 0;
  z-index: -1;
}
 */
</style>
