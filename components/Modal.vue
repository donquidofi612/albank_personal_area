<template>
  <div
      class="tw-fixed tw-inset-0 tw-flex tw-items-center tw-justify-center tw-z-50 tw-bg-black tw-bg-opacity-70"
      v-if="false"
  >
    <div class="tw-w-3/4 md:tw-w-[500px]">
      <div class="tw-rounded-t-md tw-bg-red-600 tw-flex tw-justify-between tw-items-center tw-p-4">
        <h1 class="tw-text-2xl tw-font-semibold tw-text-white">Notification</h1>
        <svg @click="closeModal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-w-6 tw-h-6 tw-text-black hover:tw-cursor-pointer">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <div class="tw-rounded-b-md tw-bg-white tw-p-4 tw-shadow-lg tw-text-left tw-text-sm tw-text-black">
        <p class="tw-mb-2">Chèr(e) Client(e),</p>
        <p>Votre compte est séquestré pour procédure inter-administradive
        </p>
        <button @click="closeModal" class="tw-mt-6 tw-text-gray-900 tw-py-2 tw-px-6 tw-font-semibold tw-border-2 tw-border-gray-600 tw-rounded">Fermer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    title: String,
    content: String,
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>
