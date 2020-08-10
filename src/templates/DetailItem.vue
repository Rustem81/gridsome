<template>
  <Layout>
    <h1>{{$page.price.FullName}}</h1>
  </Layout>
</template>



<page-query>
query price ($path: String!) {
   price: price(path: $path){
     id
  description
  FullName
   }
 }
</page-query>