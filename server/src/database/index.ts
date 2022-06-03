import serviceAccount from './service-account-credentials.json'
import admin from 'firebase-admin';
import { getFirestore, Firestore } from 'firebase-admin/firestore';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const db: Firestore = getFirestore();

export default db;