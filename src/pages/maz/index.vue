<template>
  <Layout>
    <b-container  class="flex-column mt-3">
      <div >
         <ul v-for="edge in $static.allGroupMaz.edges" :key="edge.node.id">
             <li><g-link :to=edge.node.path>{{edge.node.Groupes}}</g-link> </li> 
        </ul> 
      </div>
 </b-container>
  </Layout>
</template>

<static-query>
query{
  allGroupMaz{
    edges{
      node{
        id
        path
        Groupes
        ImgGroup
        EnTipeLower
        EnGroupes
      }
    }
  }
}
</static-query>

