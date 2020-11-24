import firebase from "firebase";
import "firebase/auth";
import "firebase/analytics";

if (!firebase.apps.length && process.env.NEXT_PUBLIC_FIREBASE_APP_ID) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messageSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  });
  if (typeof window !== "undefined") {
    if (process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID) firebase.analytics();
  }
}
const auth = firebase.auth;

export { firebase, auth };
