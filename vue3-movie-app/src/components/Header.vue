<script setup>
import Logo from "~/components/Logo";

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
    <Logo />
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

<style scoped lang="scss">
header {
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;

  .logo {
    margin-right: 40px;
  }
}
</style>