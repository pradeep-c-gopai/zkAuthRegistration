import React from "react";
import classes from "./Header.module.css";
import Windows from "../../Image/windows-defender.svg";

const Prevent = () => {
  let PreventData = [
    {
      svg: Windows,
      text1: "Web3 ID does not store any user data",
      text2:
        "We only hold user data until the authentication is finished and then immediately delete it. This way, you avoid the risk of storing user data in centralized databases.",
    },
    {
      svg: Windows,
      text1: "Web3 ID does not store any user data",
      text2:
        "We only hold user data until the authentication is finished and then immediately delete it. This way, you avoid the risk of storing user data in centralized databases.",
    },
    {
      svg: Windows,
      text1: "Web3 ID does not store any user data",
      text2:
        "We only hold user data until the authentication is finished and then immediately delete it. This way, you avoid the risk of storing user data in centralized databases.",
    },
    {
      svg: Windows,
      text1: "Web3 ID does not store any user data",
      text2:
        "We only hold user data until the authentication is finished and then immediately delete it. This way, you avoid the risk of storing user data in centralized databases.",
    },
    {
      svg: Windows,
      text1: "Web3 ID does not store any user data",
      text2:
        "We only hold user data until the authentication is finished and then immediately delete it. This way, you avoid the risk of storing user data in centralized databases.",
    },
  ];

  return (
    <>
    <div className={classes.Prevent}>
      <div>
        {PreventData.map((data, i) => (
          <div className={classes.PreventList} key={i}>
            <div className={classes.svgDiv}>
              <img src={data.svg} alt="React Logo" />
            </div>
            <div className={classes.text5}>{data.text1}</div>
            <div className={classes.text6}>{data.text2}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Prevent;
