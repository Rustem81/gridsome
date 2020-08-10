// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',



  plugins: [

    {
      use: 'gridsome-source-google-sheets-v2',
     
      options: {
        apiKey: `${process.env.VUE_APP_GOOGLE_KEY}`,
        spreadsheets: [
          {
            spreadsheetId: `${process.env.VUE_APP_GOOGLE_ID}`,
            sheets: [
              {
                sheetName: "price", 
                collectionName: "price" 
              },
              {
                sheetName: "tipe_auto", 
                collectionName: "tipe_auto" 
              },

              {
                sheetName: "group_maz", 
                collectionName: "group_maz" 
              },
              {
                sheetName: "group_kamaz", 
                collectionName: "group_kamaz" 
              },
              {
                sheetName: "group_kraz", 
                collectionName: "group_kraz" 
              },
              {
                sheetName: "group_universal", 
                collectionName: "group_universal" 
              }
            ]
          }
        ]
      },
    },

  ],

  templates: {
    tipe_auto:[
      {
        path: '/:EnTipeLower'
      }
    ],
    
     group_maz:[
       {
         path: '/:EnTipeLower/:EnGroupes',
         component: './src/templates/GroupeItem.vue'
       }
     ],
    group_kamaz:[
      {
        path: '/:EnTipeLower/:EnGroupes',
        component: './src/templates/GroupeItem.vue'
      }
    ],
    group_kraz:[
      {
        path: '/:EnTipeLower/:EnGroupes',
        component: './src/templates/GroupeItem.vue'
      }
    ],
    group_universal:[
      {
        path: '/:EnTipeLower/:EnGroupes',
        component: './src/templates/GroupeItem.vue'
      }
    ],
    price:[
      {
        path: '/:EnTipeLower/:EnGroupes/:Ids',
        component: './src/templates/DetailItem.vue'
      }
    ]

  }


  //   {
  //     use: 'gridsome-source-mysql',
  //     options: {
  //       connection: {
  //         host: 'localhost', // required
  //         port: 3306,
  //         user: 'root', // required
  //         password: '', // required
  //         database: 'shop', // required
  //         connectionLimit: 10
  //       },
  //       debug: true, // Default false on production
  //       ignoreImages: false, // Do not download any images
  //       imageDirectory: 'sql_images',
  //       regex: /()_\d(.(jpg|png|svg|jpeg))/i, // Default false
  //       queries: [ // required
  //         {
  //           name: "Group_Sales",
  //           path: "/:en_tipe_lower/:mysqlId",
  //           sql: 'SELECT DISTINCT(t.tipe),  t.id, t.img_group, t.en_tipe_lower FROM shop.price_new t GROUP BY t.tipe;'
  //         },

  //         {
  //           name: "select_item",
  //           path: "/:en_tipe_lower/:en_groupes_lower/:ids",

  //           sql: 'SELECT DISTINCT(t.groupes), t.ids, t.id, t.tipe, t.img_group, t.en_groupes_lower FROM shop.price_new t WHERE t.en_tipe_lower= "maz"  GROUP BY t.groupes;'
  //         },



  //         {
  //           name: "maz_tipe",

  //           sql: 'SELECT DISTINCT(t.groupes), t.ids, t.id, t.tipe, t.img_group, t.en_groupes_lower FROM shop.price_new t WHERE t.en_tipe_lower="maz" GROUP BY t.groupes;'
  //         },
  //         {
  //           name: "kamaz_tipe",
  //           //route: "kamaz/:en_groupes_lower",
  //           sql: 'SELECT DISTINCT(t.groupes), t.ids, t.id, t.tipe, t.img_group, t.en_groupes_lower FROM shop.price_new t WHERE t.en_tipe_lower="kamaz" GROUP BY t.groupes;'
  //         },
  //         {
  //           name: "kraz_tipe",

  //           sql: 'SELECT DISTINCT(t.groupes), t.ids, t.id, t.tipe, t.img_group, t.en_groupes_lower FROM shop.price_new t WHERE t.en_tipe_lower="kraz" GROUP BY t.groupes;'
  //         },
  //         {
  //           name: "universal_tipe",

  //           sql: 'SELECT DISTINCT(t.groupes), t.ids, t.id, t.tipe, t.img_group, t.en_groupes_lower FROM shop.price_new t WHERE t.en_tipe_lower="universal" GROUP BY t.groupes;'
  //         },

  //         // {
  //         //   name: 'Show',
  //         //   sql: 'SELECT sort_number, full_name, ed_izm, groupes, id, ids, tipe, description, Time_Creat, img_group, img_item FROM price'
  //         // },
  //         // {
  //         //   name: 'Show_copy',
  //         //   sql: 'SELECT sort_number, full_name, ed_izm, groupes, id, ids, tipe, description, Time_Creat, img_group, img_item FROM price'
  //         // }
  //       ]
  //     }
  //   }

  // ]
  
 

}
