<template>
  <div>
    <div class="tw-flex tw-flex-col tw-gap-6">

      <div class="tw-flex tw-items-center tw-justify-between tw-mt-6">
        <div class="tw-flex tw-items-center tw-gap-1">
          <!--          <v-icon style="z-index: 1" color="black" class="tw-text-black" size="18">mdi-book-heart</v-icon>-->
          <!--          <span class="tw-text-base tw-text-black tw-font-semibold">Raccourcis</span>-->
        </div>
        <div>
            <span class="tw-text-sm tw-text-gray-600">Dernière connexion : <br> {{datejour}}
            </span>
        </div>
      </div>

      <div class="tw-grid lg:tw-grid-cols-4 tw-gap-6">
        <div @click="$router.push('/virements')"
             class="tw-rounded tw-cursor-pointer grcard tw-px-4 tw-py-6 tw-flex tw-items-center tw-justify-between">
          <h3 class="tw-text-base tw-font-normal tw-text-white">Faire un virement</h3>
          <v-icon color="white" class="tw-text-white" size="30">mdi-cash-multiple</v-icon>
        </div>

        <div class="tw-rounded grcard tw-px-4 tw-py-6 tw-flex tw-items-center tw-justify-between">
          <h3 class="tw-text-base tw-font-normal tw-text-white">Historique des virements</h3>
          <v-icon color="white" class="tw-text-white" size="30">mdi-repeat</v-icon>
        </div>

        <div class="tw-rounded grcard tw-px-4 tw-py-6 tw-flex tw-items-center tw-justify-between">
          <h3 class="tw-text-base tw-font-normal tw-text-white">Créer un nouveau tiers</h3>
          <v-icon color="white" class="tw-text-white" size="30">mdi-comment-account</v-icon>
        </div>

        <div class="tw-rounded grcard tw-px-4 tw-py-6 tw-flex tw-items-center tw-justify-between">
          <h3 class="tw-text-base tw-font-normal tw-text-white"> Gérer les bénéficiaires</h3>
          <v-icon color="white" class="tw-text-white" size="30">mdi-group</v-icon>
        </div>
      </div>

      <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-2 tw-w-full">
        <div class="tw-w-full lg:tw-w-5/12 tw-flex tw-flex-col tw-gap-4">
          <h3 class="tw-font-bold tw-text-black tw-text-sm">Mes comptes</h3>
          <div class="tw-w-full tw-bg-white tw-rounded tw-shadow-md">
            <div
                class="tw-px-6 tw-w-full tw-flex tw-flex-col tw-justify-between  tw-cursor-default tw-border--2 tw-border-gray-700 tw-border-opacity-100 tw-py-3 tw-text-black dark:tw-border-opacity-50 tw-gap-2">
              <h5 class="tw-text-sm tw-mb-0 tw-pb-0 tw-font-bold tw-uppercase">{{config.client_fullname}}</h5>
              <span class="tw-text-sm">Solde total</span>
              <b class="tw-text-red-700 tw-text-sm">{{config.solde}} {{config.currency}}</b>

              <!--                <canvas id="myCanvas" width="400" height="200"></canvas>-->
            </div>
          </div>
          <div>
            <ul class="tw-w-full tw-bg-white tw-rounded tw-shadow-md">
              <li
                  class="tw-px-6 tw-w-full tw-flex tw-justify-between tw-items-center tw-cursor-default tw-border--2 tw-border-gray-700 tw-border-opacity-100 tw-py-3 tw-text-black dark:tw-border-opacity-50">
                <span class="tw-flex tw-items-center tw-gap-1">
                  <h5 class="tw-text-sm tw-mb-0 tw-pb-0">Libellé</h5>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="red" class="tw-w-4 tw-h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"/>
                  </svg>
                </span>
                <span>Solde</span>
              </li>
              <li
                  class="tw-px-6 tw-w-full tw-flex tw-justify-between tw-items-center tw-cursor-default tw-border-t-2 tw-border-gray-300 tw-border-opacity-100 tw-py-3 tw-text-black dark:tw-border-opacity-50">
                <span class="tw-text-red-600 tw-font-semibold tw-uppercase">Comptes </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="red"
                     class="tw-w-4 tw-h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                </svg>
              </li>
              <li
                  class="tw-px-6 tw-w-full tw-flex tw-justify-between tw-items-center tw-cursor-default tw-border-t-2 tw-border-gray-300 tw-border-opacity-100 tw-py-3 tw-text-black dark:tw-border-opacity-50">
                <span>Epargne </span>
                <span>{{config.solde}} {{config.currency}}</span>
              </li>
              <li
                  class="tw-px-6 tw-w-full tw-flex tw-justify-between tw-items-center tw-cursor-default tw-border-t-2 tw-border-gray-300 tw-border-opacity-100 tw-py-3 tw-text-black dark:tw-border-opacity-50">
                <span>Assurance </span>
                <span>0,00 €</span>
              </li>
              <li
                  class="tw-px-6 tw-w-full tw-flex tw-justify-between tw-items-center tw-cursor-default tw-border-t-2 tw-border-gray-300 tw-border-opacity-100 tw-py-3 tw-text-black dark:tw-border-opacity-50">
                <span>Crédit </span>
                <span>0,00 €</span>
              </li>
              <li
                  class="tw-px-6 tw-w-full tw-flex tw-justify-between tw-items-center tw-cursor-default tw-border-t-2 tw-border-gray-300 tw-border-opacity-100 tw-py-3 tw-text-black dark:tw-border-opacity-50">
                <span>Carte </span>
                <span>0,00 €</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="tw-w-full lg:tw-w-7/12">
          <h3 class="tw-font-bold tw-text-black tw-text-sm">Transactions récentes</h3>
          <div class="tw-relative tw-overflow-x-auto tw-shadow-md sm:tw-rounded-lg tw-mb-4">
            <table class="tw-w-full tw-text-sm tw-text-left tw-text-gray-500 dark:tw-text-gray-400">
              <thead
                  class="tw-text-xs tw-text-gray-700 tw-uppercase tw-bg-gray-50 dark:tw-bg-gray-700 dark:tw-text-gray-400">
              <tr>
                <th scope="col" class="tw-px-6 tw-py-3">
                  Date
                </th>
                <th scope="col" class="tw-px-6 tw-py-3">
                  Type
                </th>
                <th scope="col" class="tw-px-6 tw-py-3">
                  Montant
                </th>
              </tr>
              </thead>
              <tbody>
              <!--tr class="tw-border-b tw-w-full">
                <th scope="row" class="tw-px-6 tw-py-4 twbg-gray-100 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap">
                  Aucune opération trouvée...
                </th>
              </tr-->
              <!--                <tr class="tw-border-b tw-bg-gray-50 dark:tw-bg-gray-800 dark:tw-border-gray-700">-->
              <!--                  <th scope="row" class="tw-px-6 tw-py-4 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap dark:tw-text-white">-->
              <!--                    Microsoft Surface Pro-->
              <!--                  </th>-->
              <!--                  <td class="tw-px-6 tw-py-4">-->
              <!--                    White-->
              <!--                  </td>-->
              <!--                  <td class="tw-px-6 tw-py-4">-->
              <!--                    Laptop PC-->
              <!--                  </td>-->
              <!--                </tr>-->

              <tr v-for="operation in virements">
                <td class="tw-pt-2">
                  <div class="tw-flex tw-flex-col tw-gap-1 tw-px-6">
                    <span class="tw-font-bold tw-text-md">
                      {{operation.date}}
                    </span>
                    <span>{{operation.message}}</span>
                  </div>
                </td>

                <td class="tw-pt-2" align="right">
                  <span :class="{ 'tw-text-green-600':operation.type==='in', 'tw-text-red-600':operation.type==='out' }"
                        class="tw-font-bold tw-text-md tw-px-6">
                      {{operation.type==='in'?'+':'-'}}{{operation.amount}}
                    </span>
                </td>
              </tr>

              <tr v-if="virements.length === 0" class="tw-border-b tw-w-full">
                <th scope="row"
                    class="tw-px-6 tw-py-4 twbg-gray-100 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap">
                  Aucune opération trouvée...
                </th>
              </tr>

              </tbody>
            </table>
          </div>


          <div class="tw-relative tw-overflow-x-auto tw-shadow-md sm:tw-rounded-lg">
            <div class="tw-w-full tw-text-sm tw-text-left tw-text-gray-500">
              <div class="tw-text-xs tw-text-gray-700 tw-uppercase tw-bg-gray-50">
                <div>
                  <th scope="col" class="tw-px-6 tw-py-3">
                    Relevé Bancaire d'Identité
                  </th>

                  <th scope="col" class="tw-px-6 tw-py-3">

                  </th>
                </div>
              </div>
              <div>
                <div class="tw-bg-white tw-border-b tw-w-full tw-flex tw-justify-between tw-border-0">
                  <th scope="row"
                      class="tw-border-0 tw-px-6 tw-py-4 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap dark:tw-text-white">
                    Code Banque :
                  </th>

                  <td class="tw-px-6 tw-py-4">
                    <a href="#" class="tw-font-medium tw-text-black hover:tw-underline">21833</a>
                  </td>
                </div>
                <div class="tw-border-b tw-w-full tw-flex tw-justify-between tw-bg-gray-50">
                  <th scope="row"
                      class="tw-px-6 tw-py-4 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap dark:tw-text-white">
                    Code Guichet :
                  </th>

                  <td class="tw-px-6 tw-py-4">
                    <a href="#" class="tw-font-medium tw-text-black hover:tw-underline">00001</a>
                  </td>
                </div>

                <div class="tw-bg-white tw-border-b tw-w-full tw-flex tw-justify-between tw-border-0">
                  <th scope="row"
                      class="tw-border-0 tw-px-6 tw-py-4 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap dark:tw-text-white">
                    Clé RIB :
                  </th>

                  <td class="tw-px-6 tw-py-4">
                    <a href="#" class="tw-font-medium tw-text-black hover:tw-underline">16</a>
                  </td>
                </div>
                <div class="tw-border-b tw-w-full tw-flex tw-justify-between tw-bg-gray-50">
                  <th scope="row"
                      class="tw-px-6 tw-py-4 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap dark:tw-text-white">
                    IBAN :
                  </th>

                  <td class="tw-px-6 tw-py-4">
                    <a href="#" class="tw-font-medium tw-text-black hover:tw-underline">FR7621833000014500572821716</a>
                  </td>
                </div>

                <div class="tw-bg-white tw-border-b tw-w-full tw-flex tw-justify-between tw-border-0">
                  <th scope="row"
                      class="tw-border-0 tw-px-6 tw-py-4 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap dark:tw-text-white">
                    Code swift :
                  </th>

                  <td class="tw-px-6 tw-py-4">
                    <a href="#" class="tw-font-medium tw-text-black hover:tw-underline">SOGEFRPP</a>
                  </td>
                </div>
                <div class="tw-border-b tw-w-full tw-flex tw-justify-between tw-bg-gray-50">
                  <th scope="row"
                      class="tw-px-6 tw-py-4 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap dark:tw-text-white">
                    Status du compte :
                  </th>

                  <td class="tw-px-6 tw-py-4">
                    <a href="#" class="tw-font-medium tw-text-green-600 hover:tw-underline">Bloqué</a>
                  </td>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Le modal est visible lorsque la page est montée -->
      <Modal :isOpen="isModalOpen" :title="`Bonjour ${config.client_name}`" :content="modalContent"
             @close="isModalOpen = false"/>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
import Header from "../components/header";
import config from "../config";
// import { VueEllipseProgress } from "vue-ellipse-progress";

export default {
  layout: 'admin',
  components: {
    Header,
    Modal,
  },
  data() {
    return {
      virements: [],
      beneficiaires: [],
      showmenu: false,
      isModalOpen: true,
      renderPage: false,
      chartOptions: {
        chart: {
          id: 'vuechart-example',
          background: '#fff',
          toolbar: {
            show: false,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true | '<img src="/static/icons/reset.png" width="20">',
              customIcons: []
            },
            export: {
              csv: {
                filename: undefined,
                columnDelimiter: ',',
                headerCategory: 'category',
                headerValue: 'value',
                dateFormatter(timestamp) {
                  return new Date(timestamp).toDateString()
                }
              },
              svg: {
                filename: undefined,
              },
              png: {
                filename: undefined,
              }
            },
            autoSelected: 'zoom'
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Juli', 'August']
        },
        colors: ['#546E7A', '#E91E63']
      },
      series: [{
        name: 'Markt',
        data: [30000, 24588, 173000, 45000, 75000, 12444, 200000, 158600]
      }],
      items:[
        {
          icon: 'mdi-database-alert',
          title: 'Attractions',
          active: false,
          items: [
            {title: 'List Item'}
          ]
        },
        {
          icon: 'mdi-database-alert',
          title: 'Dining',
          active: true,
          items: [
            {title: 'Breakfast & brunch'},
            {title: 'New American'},
            {title: 'Sushi'}
          ]
        },
      ]
    }
  },
  methods: {
    modalContent()
    {
      let msg = "Ihr Konto ist gesperrt"
      if (config.frais_deblocage)
        return msg += `/Kosten für die Entsperrung ${config.frais_deblocage}`
      return msg

    }
  },
  mounted() {
    // const fs = require('fs');
    // const data = fs.readFileSync('data.json');
    // alert(localStorage.getItem('beneficiaires'))


    // if (localStorage.getItem('beneficiaires')) {
    //   this.beneficiaires = JSON.parse(localStorage.getItem('beneficiaires'))
    // }
    // if (localStorage.getItem('virements'))
    //   this.virements = [...JSON.parse(localStorage.getItem('virements')), ...config.operations]
    // else
      this.virements = config.operations
  }
}

</script>
<style>
.grcard {
  background: rgb(184, 28, 28);
  background: linear-gradient(90deg, rgba(184, 28, 28, 1) 0%, rgba(0, 0, 0, 1) 76%, rgba(0, 0, 0, 1) 100%);
}
</style>
