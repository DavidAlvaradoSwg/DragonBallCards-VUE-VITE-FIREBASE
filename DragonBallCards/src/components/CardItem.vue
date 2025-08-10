<template>
  <div class="card">
    <div class="card-header">
      <h3 class="character-name">{{ card.nombrePersonaje || 'Personaje Desconocido' }}</h3>
      <p v-if="card.estadoPersonaje" class="character-state">{{ card.estadoPersonaje }}</p>
    </div>

    <img
      v-if="card.imageUrl"
      :src="card.imageUrl"
      :alt="`Imagen de ${card.nombrePersonaje || 'personaje'}`"
      class="card-image"
    />
    <div v-else class="image-placeholder">
      ?
    </div>

    <div class="card-body">
      <template v-if="card.razaPersonaje || card.detallesPersonaje">
        <p v-if="card.razaPersonaje" class="detail-item"><strong>Raza:</strong> {{ card.razaPersonaje }}</p>
        <p v-if="card.detallesPersonaje" class="detail-item details-text">{{ card.detallesPersonaje }}</p>
      </template>
      <p v-else class="no-details">Sin detalles adicionales.</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  card: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.card {
  background: #fff;
  border: 2px solid #2c3e50;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  width: 300px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px) rotate(2deg);
  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.3);
}

.card-header {
  background: linear-gradient(45deg, #f39c12, #f1c40f);
  padding: 1rem;
  text-align: center;
  border-bottom: 2px solid #2c3e50;
}

.character-name {
  font-family: 'Bangers', cursive;
  font-size: 2.5rem;
  color: #2c3e50;
  margin: 0;
  text-shadow: 1px 1px 2px white;
  letter-spacing: 1px;
}

.character-state {
  margin: 0.25rem 0 0;
  font-weight: bold;
  color: #34495e;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 0.2rem 0.5rem;
  display: inline-block;
  font-size: 0.9rem;
}

.card-image {
  width: 100%;
  height: 250px;
  object-fit: contain; /* Cambiado para que la imagen se vea completa */
  border-bottom: 2px solid #2c3e50;
  background-color: #2c3e50; /* Fondo oscuro para que resalte la imagen */
  padding: 0.5rem; /* Pequeño margen interior para que la imagen "respire" */
  box-sizing: border-box; /* Asegura que el padding no aumente el tamaño total */
}

.image-placeholder {
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2c3e50; /* Unificamos el fondo con el de la imagen */
  font-size: 5rem;
  color: #bdc3c7;
  font-family: 'Bangers', cursive;
  border-bottom: 2px solid #2c3e50;
}

.card-body {
  padding: 1rem;
  text-align: left;
  flex-grow: 1; /* Asegura que el cuerpo ocupe el espacio restante */
  background-color: #f9f9f9;
}

.detail-item {
  margin: 0 0 0.5rem 0;
  font-size: 0.95rem;
}

.detail-item strong {
  color: #e67e22;
}

.details-text {
  font-style: italic;
  color: #7f8c8d;
}

.no-details {
  font-style: italic;
  color: #888;
  text-align: center;
  padding: 1rem 0;
}
</style>