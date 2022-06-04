import { DRUGBANK, PORTDRUGBANK, DRUGBANKSERVICES, DRUGBANKSORTPARAMETER, ACCEPT, USERAGENT } from '@src/config'
import https from 'https'


export const httpGet = async (pageCount: number) => {
    return Promise.all([
        new Promise(((resolve, reject) => {
            const options = {
                hostname: DRUGBANK,
                port: PORTDRUGBANK,
                path: `${DRUGBANKSERVICES}page=${pageCount}&size=200${DRUGBANKSORTPARAMETER}`,
                accept: ACCEPT,
                "user-agent": USERAGENT,
                method: 'GET',
            }

            const req = https.request(options, res => {
                console.log(`statusCode: ${res.statusCode}`)

                res.setEncoding('utf8');
                let returnData = ''

                res.on('data', d => {
                    returnData += d
                });

                res.on('end', () => {
                    resolve(JSON.parse(returnData))
                });

            });

            req.on('error', error => {
                reject(error)
            });

            req.end()
        }))
    ]);
}