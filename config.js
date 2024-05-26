export default {
    app_local: false,
    app_local_url: 'http://localhost:3000',
    app_live_url: 'https://eticket.gnassogroup.com/',
    // app_live_url: 'https://backend.met.tg/',

    app_api_base_url: 'https://eticket.gnassogroup.com/api',
    app_api_debug_url: 'http://192.168.254.210:8000/api',
    app_back_debug_url: 'http://192.168.254.210:8000',

    globalFirebaseConfig: {
      apiKey: process.env.FIREBASE_APIKEY,
      authDomain: '...',
      databaseURL: '...',
      projectId: process.env.FIREBASE_PROJECTID,
      storageBucket: '...',
      messagingSenderId: '...',
      appId: process.env.FIREBASE_APPID
    },
    client_name: ' Christophe Fortin',
    client_fullname: 'Mr  Christophe Fortin',
    // frais_deblocage: '39.880€',
    solde: '4876078',
    currency: '€',
    operations: [
         {
             message: "transfert sepa reçu de EDF actionnaires",
             date: "19/10/1992",
             amount: "1020€",
             type: "in"
         },
        {
             message: "achat de bijou",
             date: "19/10/1992",
             amount: "1020€",
             type: "in"
         },
        // {
        //     message: "Virement reçu de AREVA groupe ",
        //     date: "07/09/2023",
        //     amount: "279.000€",
        //     type: "in"
        // },
        // {
        //     message: "Virement pension de retraite de caisse de sécurité sociale",
        //     date: "20/07/23",
        //     amount: "8.425€",
        //     type: "in"
        // },
        // {
        //     message: "Virement recu de MONABANQ",
        //     date: "20/07/23",
        //     amount: "590€",
        //     type: "in"
        // },
        // {
        //     message: "Virement sepa émis à Claudine SAUSSET",
        //     date: "20/07/23",
        //     amount: "1000€",
        //     type: "out"
        // },
        // {
        //     message: "Virement reçu de Sonia Bertrand",
        //     date: "20/07/23",
        //     amount: "4800€",
        //     type: "in"
        // },
        // {
        //     message: "Virement reçu de Antoine McCANN",
        //     date: "19/10/2023",
        //     amount: "3500€",
        //     type: "in"
        // },
        // {
        //     message: "Dividende reçu de BBVA",
        //     date: "20/07/23",
        //     amount: "10.000€",
        //     type: "in"
        // },
        // {
        //     message: "Dépôt initial de Nathalie provost",
        //     date: "19/07/23",
        //     amount: "300000€",
        //     type: "in"
        // },
    ],
    //Gestionnaire_name: 'Hamza Boutaleb',
    // client_fullname: 'Mme Aline Courbor Thiemonge',
    // frais_deblocage: '39.880€',
    // solde: '3.640.000.00 €',
    //
  }
