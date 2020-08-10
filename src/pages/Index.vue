<template>
  <Layout>
    <b-container  class="flex-column mt-3">
      <div>
         <ul v-for="edge in $static.allTipeAuto.edges" :key="edge.node.id">
          <li><g-link :to=edge.node.path>{{edge.node.tipe}}</g-link> </li> 
        </ul> 
      </div>
 </b-container>
  </Layout>
</template>

<static-query>
query{
  allTipeAuto{
    edges{
      node{
        path,
        EnTipeLower,
        tipe,
        ImgTipe
      }
    }
  }
}
</static-query>




