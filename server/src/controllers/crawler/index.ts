import { COLLECTION } from "@src/config";
import db from "@src/database";
import { convertViToEn } from "@src/libs";
import { httpGet } from "@src/libs/request_crawler";
import { Drug } from "@src/types";

const COLLECTION_DEFAULT = COLLECTION ? COLLECTION : 'drugbank';

export const drugCrawler = async () => {
    const drugCollection = []
    const promiseArr = []
    const drugCollectionModifier = []

    for (let idx = 0; idx <= 51; idx += 1) {
        const rs = await Promise.all([httpGet(idx)]);
        drugCollection.push(...rs)
    }
    const des = drugCollection.flat();
    const flatten = des.flat(); 
    
    for(let idx = 0; idx <= flatten.length - 1; idx += 1) {
        const rs: Drug = flatten[idx] as Drug;
        drugCollectionModifier.push({...rs, tenThuocEn: convertViToEn(rs.tenThuoc), meta: { fileName: `${process.env.DRUGBANKDOCS}${rs.meta.fileName}` }})
    }
    for(let idx = 0; idx <= drugCollectionModifier.length - 1; idx += 1) {
        const rs: Drug = drugCollectionModifier[idx] as Drug
        promiseArr.push(db.collection(COLLECTION_DEFAULT).doc(rs.id).set(rs))
    }
    await Promise.all(promiseArr);   
}