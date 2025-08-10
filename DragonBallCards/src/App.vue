<script setup>
import { RouterView } from 'vue-router';
import Header from '@/components/Header.vue';
</script>

<template>
  <Header />
  <div class="container">
    <RouterView />
  </div>
</template>

<style>
/* Estilos Globales */
body {
  background-color: #fdf8e3; /* Un color crema suave */
  background-image: url('https://www.toptal.com/designers/subtlepatterns/uploads/dragon-scales.png');
  color: #333;
  font-family: 'Roboto', sans-serif;
}
</style>

<style scoped>
/* Estilos del contenedor principal */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 2rem 2rem;
  text-align: center;
}

h1 {
  font-family: 'Bangers', cursive;
  font-size: 4rem;
  color: #ff6f00; /* Naranja Dragon Ball */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 3px;
  border-bottom: none;
  margin-bottom: 2rem;
}
.header {
  background: linear-gradient(45deg, #ff6f00, #ff9800);
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
/* Estilos de los mensajes de estado */
.loading, .error {
  font-size: 1.5rem;
  padding: 2rem;
}

.error {
  color: #e74c3c;
  background-color: #fbeae5;
  border: 1px solid #e74c3c;
  border-radius: 8px;
}

.no-cards {
  margin-top: 2rem;
  padding: 2rem;
  background-color: #f9f9f9;
  border: 1px dashed #ccc;
  border-radius: 8px;
  color: #555;
  line-height: 1.6;
}

.no-cards strong {
  color: #d0021b;
}

/* Estilos del grid de tarjetas */
.card-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

</style>