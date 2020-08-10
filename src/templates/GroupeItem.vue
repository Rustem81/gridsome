<template>
  <Layout>
    <h2>передать переменные</h2>
    <ul v-for="edge in $static.allPrice.edges" :key="edge.node.id">
      <li>
        <g-link :to="edge.node.path">{{edge.node.description}}</g-link>
      </li>
    </ul>
  </Layout>
</template>



<static-query>
query{
 allPrice(filter: { EnGroupes: { in: "fitting"}, EnTipeLower: {in: "universal"} } ){
  edges{
    node{
      id
      path
      description
      Groupes
      FullName
      ImgTipe
      ImgItem
    }
  }
}
}
</static-query>
