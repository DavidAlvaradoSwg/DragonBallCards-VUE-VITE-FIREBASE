<template>
  <header class="main-header">
    <div class="logo">
      <img src="/favicon.ico" alt="Dragon Ball Logo" />
      <span>DB Cards</span>
    </div>
    <nav>
      <RouterLink to="/">Tarjetas</RouterLink>
      <RouterLink to="/us">Nosotros</RouterLink>
      <RouterLink to="/about">Sobre el Proyecto</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #ff6f00, #ff9800);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin: 2rem;
}
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Bangers', cursive;
  font-size: 1.5rem;
  color: white;
}
nav {
  display: flex;
  gap: 1.5rem;
}
nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: color 0.2s;
}
nav a:hover,
nav a.router-link-exact-active {
  color: #2c3e50;
}
</style>
