import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { QRCode } from "react-qr-svg";

const Claim = () => {
  const [did, setDid] = useState("did:polygonid:polygon:mumbai:2qHB1Ct2CRvdWyrNgKsZEyEkyE3zDg2mFg3H9Tpgom");
  const [date, setDate] = useState(2680532130);
  const [qrdata, setQrdata] = useState();
  const [qrStatus, setqrcodeStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = 'user-issuer';
    const password = 'password-issuer';
    const encodedCredentials = btoa(`${username}:${password}`);
    
    axios.post('https://self-hosted-platform.polygonid.me/v1/did:polygonid:polygon:mumbai:2qHrYKQnNG5meeKnhMiPk5FqMs9MgdpPRrxsbfHsgD/claims', {
      "credentialSchema": "https://raw.githubusercontent.com/vinodmalali/custom-schema-emp/main/proof-of-employee.json",
      "type": "ProofOfEmployee",
      "credentialSubject": {
        "id": did.toString(),
        "isEmployee": 1
      },
      "expiration": 2680532130
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${encodedCredentials}`
      }
    }).then((response) => {
      const dataId = response.data.id;
      return axios.get(`https://self-hosted-platform.polygonid.me/v1/did:polygonid:polygon:mumbai:2qHrYKQnNG5meeKnhMiPk5FqMs9MgdpPRrxsbfHsgD/claims/${dataId}/qrcode`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${encodedCredentials}`
        }
      });
    }).then((response) => {
      setQrdata(response.data);
      setqrcodeStatus(true);

      
    }).catch((err) => {
      console.log(err.message);
    });
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
        <button type="submit">Create</button>
      </form>
      <div style={{ paddingLeft: "200px" }}>
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
