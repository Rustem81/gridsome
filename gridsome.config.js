// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    // {
    //   use: 'gridsome-source-mysql',
    //   options: {
    //     connection: {
    //       host: 'localhost', // required
    //       port: 3306,
    //       user: 'root', // required
    //       password: '', // required
    //       database: 'shop', // required
    //       connectionLimit : 10
    //     },
    //     debug: true, // Default false on production
    //     ignoreImages: false, // Do not download any images
    //     imageDirectory: 'sql_images',
    //     regex: /()_\d(.(jpg|png|svg|jpeg))/i, // Default false
    //     queries: [ // required
    //       // {
    //       //   name: 'Author',
    //       //   route: '/authors/:path',
    //       //   path: 'fullname',
               
    //       //   sql: `SELECT id, fullname, avatar, url FROM author`,

    //       //   images: ['avatar'] // Default []
    //       // },

    //       {
    //         name: 'Datas',
            
    //         sql: `SELECT id, tipe, description FROM price`
    //         //Gallery contains comma delimited string of image url.
    //       }
    //     ]
    //   }
    // }
    {
      use: 'gridsome-source-mysql',
      options: {
        connection: {
          host: 'localhost', // required
          port: 3306,
          user: 'root', // required
          password: '', // required
          database: 'shop', // required
          connectionLimit : 10
        },
        debug: true, // Default false on production
        ignoreImages: false, // Do not download any images
        imageDirectory: 'sql_images',
        regex: /()_\d(.(jpg|png|svg|jpeg))/i, // Default false
        queries: [ // required
          {
            name: 'Show',
            sql: 'SELECT sort_number, full_name, ed_izm, groupes, id, ids, tipe, description, Time_Creat, img_group, img_item FROM price'
          },
          {
            name: 'Show_copy',
            sql: 'SELECT sort_number, full_name, ed_izm, groupes, id, ids, tipe, description, Time_Creat, img_group, img_item FROM price'
          }
        ]
      }
    }

  ]
}
