import { COLLECTION_DEFAULT } from "@src/config"
import db from "@src/database"
import { DocumentData } from "firebase-admin/firestore"

export const searchDrug = async (drugName: string, limitRecord: number) => {
    try {
        const rs = await db.collection(COLLECTION_DEFAULT).where('tenThuocEn', '>=', drugName.toLowerCase()).limit(limitRecord).get();

        if (rs.empty) {
            return;
        } else {
            return rs.docs.map((doc: DocumentData) => doc.data())
        }
    } catch (error) {
        throw error
    }
}