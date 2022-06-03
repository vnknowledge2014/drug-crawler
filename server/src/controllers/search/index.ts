import db from "@src/database";
import { DocumentData } from "firebase-admin/firestore";

export const searchDrug = async (drugName: string, limitRecord: number) => {
    const rs = await db.collection('drugbank').where('tenThuocEn', '>=', drugName.toLowerCase()).limit(limitRecord).get();
    
    if(rs.empty) {
        return [];
    } else {
        return rs.docs.map((doc: DocumentData) => doc.data())
    }
}