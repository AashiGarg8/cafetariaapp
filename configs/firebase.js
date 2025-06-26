import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeFirestore } from "firebase/firestore"; // Replace getFirestore with initializeFirestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbSNi8dzSCnxDVrmE_GhyTvcr1t3boRdM",
  authDomain: "scraptrack-dae5d.firebaseapp.com",
  projectId: "scraptrack-dae5d",
  storageBucket: "scraptrack-dae5d.firebasestorage.app",
  messagingSenderId: "146253170474",
  appId: "1:146253170474:web:568bcfcfff7699b7194053",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage for persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore with long polling
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true, // Use long polling for better compatibility
  useFetchStreams: false,
});

export { app, db, auth };