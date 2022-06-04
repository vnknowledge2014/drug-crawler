import { COLLECTION_DEFAULT } from "@src/config"
import db from "@src/database"

export const searchDrugExactly = async (id: string) => {
    try {
        const rs = await db.collection(COLLECTION_DEFAULT).doc(id).get()
        
        if (rs.data.length) {
            return {}
        } else {
            return {
                ...rs.data()
            };
        }
    } catch (error) {
        throw error
    }

    
}