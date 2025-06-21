<script setup>
const navigations = [
  {
    name: "Search",
    href: "/"
  },
  {
    name: "Movie",
    href: "/movie"
  },
  {
    name: "About",
    href: "/about"
  }
]
</script>

<template>
  <header>
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <RouterLink
          :to="nav.href"
          active-class="active"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>