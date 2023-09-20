import React from "react";
import classes from "./Header.module.css";

const UseCase = () => {
  let UseCaseData = [
    {
      image:
        "https://uploads-ssl.webflow.com/5e97941735e37a5ef19d10aa/62d01a3e937956f2d4edb69e_Age%20verification%20for%20Web3%20gaming%2C%20gambling%20and%20entertainment-p-500.jpg",
      text1: "Age verification for Web3 gaming, gambling and entertainment",
      text2:
        "Web3 is open for all, but many online experiences should not be accessible to kids. Web3 ID enables developers to verify their end-users’ age in a privacy-preserving manner. Using Zero-Knowledge Proofs, end-users can even prove they are over 18 without disclosing their date of birth or any other private information.",
    },
    {
      image:
        "https://uploads-ssl.webflow.com/5e97941735e37a5ef19d10aa/62d01a3f2382a123c4e3403c_Verify%20eligibility%20to%20enter%20Metaverse%20and%20IRL%20experiences-p-500.jpg",
      text1: "Verify eligibility to enter Metaverse and IRL experiences",
      text2:
        "With crypto wallets, developers can verify eligibility based on publicly available data such as NFT or token ownership. With Web3 ID, you can verify private end-user data such as age, driver’s license, DAO participation, professional qualification and more!",
    },
    {
      image:
        "https://uploads-ssl.webflow.com/5e97941735e37a5ef19d10aa/62d01a3e6783f4ef4804841e_Proof%20of%20token%20ownership%20without%20disclosing%20all%20the%20wallet%E2%80%99s%20content-p-500.jpg",
      text1: "Proof of token ownership without disclosing all the wallet’s content",
      text2:
        "With Web3 ID, end-users can prove they have a particular token or token amount without disclosing the entire contents of their wallet. For example, suppose you must verify that your end-users have “more than” a specific token amount to qualify. In that case, your users can generate a Zero-Knowledge Proof that only states, “Yes, I have more than [token amount]” without disclosing any other info from their wallets.",
    },
  ];
  return (
    <div className={classes.useCaseContainer}>
      <div className={classes.useCaseContain1}>UseCase</div>
      <div className={classes.useCaseContain2}>
        {UseCaseData.map((data, i) => (
          <div className={classes.Contain} key={i}>
            <div className={classes.imgDiv}>
                <img src={data.image} alt={data.text1}  sizes="(max-width: 479px) 95vw, (max-width: 767px) 90vw, (max-width: 991px) 25vw, 26vw"/>
            </div>
            <div className={classes.text3}>
              <strong>{data.text1}</strong>
            </div>
            <div className={classes.text4}>
               {data.text2}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCase;
