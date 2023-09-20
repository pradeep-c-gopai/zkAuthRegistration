import React from 'react';
import { useState, useEffect } from 'react';
import { IntType } from 'three';
import { QRCode } from "react-qr-svg";
 
const Claim = () => {
 
 
  const [did, setDid] = useState("did:polygonid:polygon:mumbai:2qPKbX2SwyorS7j7ztNsHS1s6zZjpC1HnHg4X3NmBs");
  const [date, setDate] = useState();
  const [qrdata, setQrdata] = useState();
  const [qrStatus,setqrcodeStatus]=useState(false);
   // ... Fetch posts here
 
   // Handle posts request
   const handleSubmit = (e) => {
      e.preventDefault();
       
    //   setQrdata( {
    //     "body": {
    //         "credentials": [
    //             {
    //                 "description": "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld#KYCAgeCredential",
    //                 "id": "32cb839a-cde9-11ed-8e4f-0242c0a88005"
    //             }
    //         ],
    //         "url": "https://self-hosted-platform.polygonid.me/v1/agent"
    //     },
    //     "from": "did:polygonid:polygon:mumbai:2qDaHQNNzu5Pw558Vt7XrRP68c3byz5FyZAwgpCBxe",
    //     "id": "297fd97e-7fea-47a8-aa10-94ff38b7d9d3",
    //     "thid": "297fd97e-7fea-47a8-aa10-94ff38b7d9d3",
    //     "to": "did:polygonid:polygon:mumbai:2qMABv52PPocGcRUa3ndPQCX64mFsCAW7DxLhhxrba",
    //     "typ": "application/iden3comm-plain-json",
    //     "type": "https://iden3-communication.io/credentials/1.0/offer"
    // })



      const username = 'user';
      const password = 'password';
      const encodedCredentials = btoa(`${username}:${password}`);
      fetch('https://self-hosted-platform.polygonid.me/v1/did:polygonid:polygon:mumbai:2qNTibHbawkHgcjQhNbmuWiniJwQVbr5ydSTS7gaFd/claims', {
         method: 'POST',
         body: JSON.stringify({
          "credentialSchema":"https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json/KYCAgeCredential-v3.json",
          "type": "KYCAgeCredential",
          "credentialSubject": {
              "id": did.toString(),
              "birthday": 20000424,
              "documentType": 2
          },
          "expiration": date.IntType
      }),
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Basic ${encodedCredentials}`
         },
      })
      .then((res) => res.json())
      .then((data) => {
         console.log(data.id)
         fetch(`https://self-hosted-platform.polygonid.me/v1/did:polygonid:polygon:mumbai:2qNTibHbawkHgcjQhNbmuWiniJwQVbr5ydSTS7gaFd/claims/${data.id}/qrcode`, {
               method: 'GET',
               headers: {
                 'Content-Type': 'application/json',
                 Accept: 'application/json',
                 'Access-Control-Allow-Origin': '*',
                 'Content-type': 'application/json; charset=UTF-8',
                 'Authorization': `Basic ${encodedCredentials}`
              },
           }).then((res) =>  res.json()).then((datas) => {
             console.log(datas);
             setQrdata(datas)
             setqrcodeStatus(true);
           }).then( () => {
            fetch(`https://self-hosted-platform.polygonid.me/v1/did:polygonid:polygon:mumbai:2qNTibHbawkHgcjQhNbmuWiniJwQVbr5ydSTS7gaFd/state/publish`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `Basic ${encodedCredentials}`
             },
          }).then((res) =>  res.json()).then((datas) => {
            console.log(datas);
            
  
          })
           })
           .catch((err) => {
              console.log(err.message);
           }); 
       })
      }



   return (
      <div>
         <form onSubmit={handleSubmit}>
      <div>
          <label>Did:</label>
          <input type="text" value={did} onChange={(e) => setDid(e.target.value)} />
      </div>
      <div>
        <label>Expiration date:</label>
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
            <button type="submit" >Create</button>
         </form>
         <div style={{paddingLeft:"200px" }}>
          {qrStatus && <QRCode 
            level="Q"
            style={{ width: 256 }}
            value={JSON.stringify(qrdata)}
          />}
        </div>
      </div>
      
   );
};

export default Claim;
