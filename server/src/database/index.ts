import serviceAccount from './service-account-credentials.json'
import admin from 'firebase-admin';
import { getFirestore, Firestore } from 'firebase-admin/firestore';

let db: Firestore;

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
  
  db = getFirestore();
} catch (error) {
  throw error;
}

export default db;