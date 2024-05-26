<template>
  <div>
    <div class="tw-flex tw-flex-col tw-gap-6 tw-min-h-screen">
      <div class="tw-flex tw-flex-col">
        <span class="tw-text-lg textprimary">Virements bancaires</span>
        <span>Effectuer un virement bancaire</span>


        <div class="tw-flex tw-flex-col tw-gap-2">
          <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4">
            <div
                class="tw-mx-auto tw-w-full tw-mt-4 tw-bg-white tw-flex tw-flex-col tw-gap-2 tw-px-2 tw-py-2 tw-shadow-md tw-rounded-md">
              <label style="font-weight: bold">Compte à débiter</label>
              <select style="border: solid 1px gray; border-radius: 5px; padding: 5px">
                <option>Choisir un compte</option>
                <option>{{ config.client_fullname }} - Compte Epargne</option>
              </select>
            </div>

            <div
                class="tw-mx-auto tw-w-full tw-mt-4 tw-bg-white tw-flex tw-flex-col tw-gap-2 tw-px-2 tw-py-2 tw-shadow-md tw-rounded-md">
              <label style="font-weight: bold">Date</label>
              <input style="border: solid 1px gray; border-radius: 5px; padding: 5px" type="date"/>
            </div>
          </div>

          <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4">
            <div
                class="tw-mx-auto tw-w-full tw-mt-4 tw-bg-white tw-flex tw-flex-col tw-gap-2 tw-px-2 tw-py-2 tw-shadow-md tw-rounded-md">
              <label style="font-weight: bold">Compte a créditer</label>
              <select v-model="virement.beneficiaire" style="border: solid 1px gray; border-radius: 5px; padding: 5px">
                <option>Choisissez un bénéficiaire</option>
                <option v-for="b in beneficiaires" :value="b.id">{{ `${b.nom} ${b.prenoms}` }}</option>
              </select>
              <div class="text-center pa-4">

                <v-dialog
                    v-model="modal_destinataire"
                    width="auto"
                >
                  <v-card>
                    <v-card-title>Nouveau destinataire</v-card-title>
                    <v-card-text>
                      <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4">
                        <div
                            class="tw-mx-auto tw-w-full tw-mt-4 tw-flex tw-flex-col tw-gap-2 tw-px-2 tw-py-2 tw-rounded-md">
                          <label style="font-weight: bold">Nom</label>
                          <input type="text" style="border: solid 1px gray; border-radius: 5px; padding: 5px"
                                 v-model="beneficiaire.nom" placeholder="Nom du bénéficiaire">
                        </div>

                        <div
                            class="tw-mx-auto tw-w-full tw-mt-4 tw-flex tw-flex-col tw-gap-2 tw-px-2 tw-py-2 tw-rounded-md">
                          <label style="font-weight: bold">Prénoms</label>
                          <input type="text" style="border: solid 1px gray; border-radius: 5px; padding: 5px"
                                 v-model="beneficiaire.prenoms" placeholder="Nom du bénéficiaire">
                        </div>
                      </div>


                      <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4">
                        <div
                            class="tw-mx-auto tw-w-full tw-mt-4 tw-flex tw-flex-col tw-gap-2 tw-px-2 tw-py-2 tw-rounded-md">
                          <label style="font-weight: bold">Code Banque</label>
                          <input type="text" style="border: solid 1px gray; border-radius: 5px; padding: 5px"
                                 v-model="beneficiaire.codebanque" placeholder="Code Banque">
                        </div>

                        <div
                            class="tw-mx-auto tw-w-full tw-mt-4 tw-flex tw-flex-col tw-gap-2 tw-px-2 tw-py-2 tw-rounded-md">
                          <label style="font-weight: bold">Code Guichet</label>
                          <input type="text" style="border: solid 1px gray; border-radius: 5px; padding: 5px"
                                 v-model="beneficiaire.codeguichet" placeholder="Code Guichet">
                        </div>
                      </div>


                      <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4">
                        <div
                            class="tw-mx-auto tw-w-full tw-mt-4 tw-flex tw-flex-col tw-gap-2 tw-px-2 tw-py-2 tw-rounded-md">
                          <label style="font-weight: bold">Numéro de compte</label>
                          <input type="text" style="border: solid 1px gray; border-radius: 5px; padding: 5px"
                                 v-model="beneficiaire.numerocompte" placeholder="Numéro de compte">
                        </div>

                        <div
                            class="tw-mx-auto tw-w-full tw-mt-4 tw-flex tw-flex-col tw-gap-2 tw-px-2 tw-py-2 tw-rounded-md">
                          <label style="font-weight: bold">Clé RIB</label>
                          <input type="text" style="border: solid 1px gray; border-radius: 5px; padding: 5px"
                                 v-model="beneficiaire.clerib" placeholder="Clé RIB">
                        </div>
                      </div>

                      <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4">
                        <div
                            class="tw-mx-auto tw-w-full tw-mt-4 tw-flex tw-flex-col tw-gap-2 tw-px-2 tw-py-2 tw-rounded-md">
                          <label style="font-weight: bold">IBAN</label>
                          <input type="text" style="border: solid 1px gray; border-radius: 5px; padding: 5px"
                                 v-model="beneficiaire.iban" placeholder="IBAN">
                        </div>

                        <!--                       <div-->
                        <!--                           class="tw-mx-auto tw-w-full tw-mt-4 tw-flex tw-flex-col tw-gap-2 tw-px-2 tw-py-2 tw-rounded-md">-->
                        <!--                         <label style="font-weight: bold">Code Guichet</label>-->
                        <!--                         <input type="text" style="border: solid 1px gray; border-radius: 5px; padding: 5px" v-model="beneficiaire_nom" placeholder="Nom du bénéficiaire">-->
                        <!--                       </div>-->
                      </div>

                      <div class="tw-flex tw-gap-4 tw-mt-4">
                        <button @click="addBeneficiaire"
                                class="tw-bg-blue-400 tw-text-white tw-px-2 tw-py-1 tw-rounded-md">Enregistrer
                        </button>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </div>

              <span class="textprimary tw-cursor-pointer" @click="modal_destinataire = true"><v-icon>mdi-plus</v-icon> Ajouter un destinataire</span>
            </div>

            <div
                class="tw-mx-auto tw-w-full tw-mt-4 tw-bg-white tw-flex tw-flex-col tw-gap-2 tw-px-2 tw-py-2 tw-shadow-md tw-rounded-md">
              <label style="font-weight: bold">Motif</label>
              <textarea v-model="virement.motif" style="border: solid 1px gray; border-radius: 5px; padding: 5px"
                        type="date"></textarea>
            </div>
          </div>

          <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4">
            <div
                class="tw-mx-auto tw-w-full tw-mt-4 tw-bg-white tw-flex tw-flex-col tw-gap-2 tw-px-2 tw-py-2 tw-shadow-md tw-rounded-md">
              <label style="font-weight: bold">Montant</label>
              <input style="border: solid 1px gray; border-radius: 5px; padding: 5px" v-model="virement.montant"
                     placeholder="Ex: 10000.0"/>
            </div>

            <div
                class="tw-mx-auto tw-w-full tw-mt-4 tw-bg-white tw-flex tw-flex-col tw-gap-2 tw-px-2 tw-py-2 tw-shadow-md tw-rounded-md">
              <label style="font-weight: bold">SecuriPass-Code</label>
              <input style="border: solid 1px gray; border-radius: 5px; padding: 5px" v-model="virement.securipasscode"
                     type="password">
            </div>
          </div>


          <div class="tw-flex tw-gap-4 tw-mt-4">
            <button class="tw-bg-gray-400 tw-text-white tw-px-2 tw-py-1 tw-rounded-md" @click="addVirement"
                    :disabled="config.account_locked">Soumettre
            </button>
          </div>
        </div>
      </div>


      <div class="tw-w-full tw-flex tw-flex-col tw-gap-2 tw-mt-6">
        <h3 class="tw-font-bold tw-text-black tw-text-[1rem]">Virements récents</h3>
        <div class="tw-overflow-x-auto tw-shadow-md sm:tw-rounded-lg tw-mb-4">
          <table class="tw-w-full tw-text-sm tw-text-left tw-text-gray-500 dark:tw-text-gray-400">
            <thead
                class="tw-text-xs tw-text-gray-700 tw-uppercase tw-bg-gray-50 dark:tw-bg-gray-700 dark:tw-text-gray-400">
            <tr>
              <th scope="col" class="tw-px-6 tw-py-3">
                Date
              </th>
              <!--                <th scope="col" class="tw-px-6 tw-py-3">-->
              <!--                  Type-->
              <!--                </th>-->
              <th scope="col" class="tw-px-6 tw-py-3">
                <!--                  Montant-->
              </th>
            </tr>
            </thead>
            <!--              <tbody>-->

            <tr v-for="operation in config.operations">
              <td class="tw-pt-2">
                <div class="tw-flex tw-flex-col tw-gap-1 tw-px-6">
                    <span class="tw-font-bold tw-text-md">
                      {{ operation.date }}
                    </span>
                  <span>{{ operation.message }}</span>
                </div>
              </td>

              <td class="tw-pt-2" align="right">
                  <span :class="{ 'tw-text-green-600':operation.type==='in', 'tw-text-red-600':operation.type==='out' }"
                        class="tw-font-bold tw-text-md tw-px-6">
                      {{ operation.type === 'in' ? '+' : '-' }}{{ operation.amount }}
                    </span>
              </td>
            </tr>

            <tr v-if="virements.length === 0" class="tw-border-b tw-w-full">
              <th scope="row"
                  class="tw-px-6 tw-py-4 twbg-gray-100 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap">
                Aucune opération trouvée...
              </th>
            </tr>
            <tr v-for="operation in virements">
              <td class="tw-pt-2" style="border-bottom: dashed 0.4px; padding-bottom: 3px; padding-top: 3px">
                <div class="tw-flex tw-flex-col tw-gap-1 tw-px-6">
                    <span class="tw-font-bold tw-text-md">
                      {{operation.date}}
                    </span>
                  <span>{{operation.message}}</span>
                  <div style="color: orange; font-size: 13px; display: flex; align-content: center; gap: 3px"><v-icon color="orange" x-small>mdi-clock</v-icon><span>En cours</span></div>
                </div>
              </td>

              <td class="tw-pt-2" align="right" style="border-bottom: dashed 0.4px; padding-bottom: 3px; padding-top: 3px">
                  <span :class="{ 'tw-text-green-600':operation.type==='in', 'tw-text-red-600':operation.type==='out' }" class="tw-font-bold tw-text-md tw-px-6">
                      {{operation.type==='in'?'+':'-'}}{{operation.amount}}
                    </span>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <Modal :isOpen="isModalOpen" :title="`Bonjour ${config.client_name}`" :content="modalContent"
             @close="isModalOpen = false"/>

    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal";
import config from "../config";
import Swal from "sweetalert2";

export default {
  components: {Modal},
  layout: 'admin',
  data() {
    return {
      isModalOpen: true,
      modal_destinataire: false,
      dialog: false,
      modalContent: '',
      beneficiaire: {},
      beneficiaires: [],
      virement: {},
      virements: []
    }
  },
  mounted() {
    if (localStorage.getItem('beneficiaires')) {
      this.beneficiaires = JSON.parse(localStorage.getItem('beneficiaires'))
    }
    if (localStorage.getItem('virements'))
      this.virements = [...JSON.parse(localStorage.getItem('virements')), ...config.operations]
    else
      this.virements.concat(config.operations)


    // if (localStorage.getItem('virements'))
    //   config.operations.concat(JSON.parse(localStorage.getItem('virements')))
  },
  methods: {
    addBeneficiaire() {
      const uniqueId = Date.now().toString();

      const temp_ben = {...this.beneficiaire, id: uniqueId}
      this.beneficiaires.push(temp_ben)
      localStorage.setItem('beneficiaires', JSON.stringify(this.beneficiaires))
      this.modal_destinataire = false
      this.beneficiaire = {}
    },
    addVirement() {
      try {
        if(!this.virement.montant || !this.virement.beneficiaire){
          return
        }
        const aujourdHui = new Date();

// Récupérer le jour, le mois et l'année
        const jour = String(aujourdHui.getDate()).padStart(2, '0');
        const mois = String(aujourdHui.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
        const annee = aujourdHui.getFullYear();

// Formater la date en "JJ/MM/AAAA"
        const dateFormatee = jour + '/' + mois + '/' + annee;
        var virements = []
        if (localStorage.getItem('virements')) {
          virements = JSON.parse(localStorage.getItem('virements'))
        }

        console.log(virements, 'virements')
        const operation = {
          message: `transfert émis à ${this.beneficiaires.filter(x => x.id == this.virement.beneficiaire)}`,
          date: dateFormatee,
          amount: this.virement.montant+" "+config.currency,
          type: "out"
        };
        virements.push(operation)
        localStorage.setItem('virements', JSON.stringify(virements))
        this.virements.push(operation);
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: "info",
          title: "Votre opértion est en cours de traitement"
        })

        this.virement = {}
      }
      catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
