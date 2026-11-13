import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Public client config. Values can be overridden with NEXT_PUBLIC_* env vars.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? 'AIzaSyC2cTDl6cWYXr66dUKn6n5VEiVvfB5bOBk',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? 'bhimmajhi-573d8.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? 'bhimmajhi-573d8',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? 'bhimmajhi-573d8.firebasestorage.app',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID ?? '859390699596',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? '1:859390699596:web:84b05116d41e0a0fc6ece9',
};

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
