import { ref } from 'vue';
import { db } from '@/firebase'; // Asegúrate de que esta importación sea correcta
import { collection, getDocs } from 'firebase/firestore';

export function useCards() {
  const cards = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchCards = async () => {
    loading.value = true;
    error.value = null;
    try {
      const cardsCollection = collection(db, 'cards'); // Conéctate a la colección 'cards'
      const cardsSnapshot = await getDocs(cardsCollection);
      const fetchedCards = [];
      
      cardsSnapshot.forEach(doc => {
        // Asegúrate de que el objeto 'card' se construye con todos los datos
        // usando los mismos nombres de propiedad que en tu base de datos.
        fetchedCards.push({
          id: doc.id,
          ...doc.data()
        });
      });

      cards.value = fetchedCards;
    } catch (e) {
      console.error("Error al obtener los documentos de Firestore: ", e);
      // Creamos un mensaje de error más descriptivo para mostrar en la pantalla.
      if (e.code === 'permission-denied') {
        error.value = "Error de Permisos: La base de datos denegó el acceso. Por favor, revisa y publica las reglas de seguridad de Firestore en la consola de Firebase.";
      } else {
        error.value = `No se pudieron obtener las tarjetas. Revisa la consola del navegador para ver el error técnico: ${e.code}`;
      }
    } finally {
      loading.value = false;
    }
  };

  return { cards, loading, error, fetchCards };
}