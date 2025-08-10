<script setup>
import { onMounted, ref } from 'vue';
import { useCards } from '@/composables/useCards';
import CardItem from '@/components/CardItem.vue';
import { firebaseInitializationError, projectId } from '@/firebase';

const initError = ref(firebaseInitializationError);
const { cards, loading, error, fetchCards } = useCards();

onMounted(async () => {
  if (!initError.value) {
    await fetchCards();
  }
});
</script>

<template>
  <div v-if="initError" class="error">
    <h2>Error Crítico de Configuración</h2>
    <p>{{ initError }}</p>
    <p>Por favor, revisa tu archivo <code>.env.local</code> en la raíz del proyecto con las credenciales de Firebase.</p>
  </div>

  <template v-else>
    <h1>Colección de Tarjetas de Personajes</h1>
    
    <div v-if="loading" class="loading">Cargando tarjetas...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="!loading && cards.length > 0" class="card-grid">
      <CardItem v-for="card in cards" :key="card.id" :card="card" />
    </div>
    <div v-if="!loading && !error && cards.length === 0" class="no-cards">
      <h2>Conexión Exitosa, pero no se encontraron tarjetas</h2>
      <p>Tu aplicación está conectada al proyecto de Firebase con ID: <br><strong>{{ projectId || 'No definido' }}</strong></p>
      <p>Por favor, ve a la consola de Firebase y asegúrate de que este es el ID del proyecto correcto. Luego, verifica que la colección se llame <strong>cards</strong> (en minúsculas) y que contenga documentos.</p>
    </div>
  </template>
</template>

<style scoped>
h1 {
  font-family: 'Bangers', cursive;
  font-size: 4rem;
  color: #ff6f00; /* Naranja Dragon Ball */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 3px;
  border-bottom: none;
  margin-bottom: 2rem;
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

/* Puedes mover los estilos de .loading, .error, .no-cards aquí si lo prefieres, o dejarlos en App.vue para que sean globales */
</style>
