<template>
  <div class="layout">
    <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-primary">
        <g-link class="font-weight-bold text-danger" to="/">Витрина</g-link>
      </nav>
    </header>

    <slot />

    <footer class="text-muted">
      <div class="container">
        <p class="float-right">
          <a href="#">В начало</a>
        </p>
        <p>Подвал</p>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>


