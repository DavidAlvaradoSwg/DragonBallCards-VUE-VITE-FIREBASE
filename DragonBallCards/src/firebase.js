// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

let app = null;
let db = null;
let storage = null;
let firebaseInitializationError = null;
const projectId = firebaseConfig.projectId;

// Verificación de variables de entorno
if (!projectId) {
  firebaseInitializationError = "Error Crítico: VITE_FIREBASE_PROJECT_ID no está definido en tu archivo .env.local. La aplicación no puede iniciarse.";
  console.error(firebaseInitializationError);
} else {
  try {
    console.log("Intentando inicializar Firebase con projectId:", projectId);
    app = initializeApp(firebaseConfig);

    // Inicializamos los servicios DENTRO del try...catch para capturar cualquier error.
    // Usaremos la base de datos "(default)", que es la estándar y compatible con el plan gratuito.
    db = getFirestore(app);
    storage = getStorage(app);

    console.log("¡Firebase y sus servicios se han inicializado correctamente!");
  } catch (error) {
    console.error("Error durante la inicialización de Firebase:", error);
    firebaseInitializationError = `Falló la inicialización de Firebase. Revisa que los valores en tu .env.local son correctos. Error: ${error.message}`;
    // Nos aseguramos de que las exportaciones sean nulas si hay un error.
    app = null;
    db = null;
    storage = null;
  }
}

export { db, storage, firebaseInitializationError, projectId };