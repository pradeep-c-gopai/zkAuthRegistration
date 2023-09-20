import React , {useState} from "react";
import classes from "./Header.module.css";
import { MdHealthAndSafety } from "react-icons/md";
import { BsTruck } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import Video from "../../Image/video.mp4";
import Sakha from "../../Image/Sakha.png";
import { FiChevronDown } from "react-icons/fi";
import Certificate from "../../Image/icon1.png";
import VerticalModal from './Modal'

const Header = () => {
  
  const [show, setShow] = useState(false);

  const Lists = [
    {
      name: "HeathCare",
      path: "healthcare",
      icons: <MdHealthAndSafety size={30} />,
    },
    {
      name: "Supply Chain",
      path: "healthcare",
      icons: <BsTruck size={30} />,
    },
    {
      name: "Eduction",
      path: "healthcare",
      icons: <FaGraduationCap size={30} />,
    },
  ];

  const Lists2 = [
    {
      name: "HeathCare",
      path: "healthcare",
      icons: <MdHealthAndSafety size={30} />,
    },
    {
      name: "Supply Chain",
      path: "healthcare",
      icons: <BsTruck size={30} />,
    },
    {
      name: "HeathCare",
      path: "healthcare",
      icons: <MdHealthAndSafety size={30} />,
    },
  ];

  const Lists3 = [
    {
      name: "Certs Web App",
      icons: Certificate,
      text: "Issue verifiable Credentails and Certificates",
    },
    {
      name: "Web3 ID",
      icons: Certificate,
      text: "Issue verifiable Credentails and Certificates",
    },
  ];

  return (
    <>
      <VerticalModal show={show}  onHide={() => setShow(false)}/>
      <div className={classes["navbar_container"]}>
        <div className={classes["navbar_contain"]}>
          <div className={classes["navbar_logo"]}>
            <img src={Sakha} height="35px" alt="Pic" />
          </div>
          <nav className={classes["dropdown-menu"]}>
            <ul>
              <li>
                <span className={classes.navbarList}>
                  Solutions <FiChevronDown />
                </span>
                <div className={classes["sub-menu"]}>
                  {Lists3.map((list, index) => (
                    <div className={classes.dropdownList1} key={index}>
                      <div>
                        <img src={list.icons} height="35px" alt="Pic" />
                      </div>
                      <div className={classes.textDiv}>
                        <div>{list.name}</div>
                        <div>{list.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </li>
              <li>
                <span className={classes.navbarList}>
                  Industries <FiChevronDown />
                </span>
                <div className={classes["sub-menu"]}>
                  {Lists.map((list, index) => (
                    <div className={classes.dropdownList} key={index}>
                      <span style={{ marginRight: "5px" }}>{list.icons}</span>
                      <span>{list.name}</span>
                    </div>
                  ))}
                </div>
              </li>
              <li>
                <span className={classes.navbarList}>
                  Developers <FiChevronDown />
                </span>
                <div className={classes["sub-menu"]}>
                  {Lists2.map((list, index) => (
                    <div className={classes.dropdownList} key={index}>
                      <span style={{ marginRight: "5px" }}>{list.icons}</span>
                      <span>{list.name}</span>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </nav>
          <div className={classes["button-nav"]} onClick={() => setShow(true)}>Register</div>
        </div>

        <div className={classes.Homepage}>
          <div>
            <div className={classes.Text1}>
              End document fraud and reduce verifications to seconds
            </div>
            <div className={classes.Text2}>
              Polygon ID enables trust issuers to connect with trust verifiers.
              Individuals receive and store claims like a KYC check in a
              personal wallet, and use zero-knowledge (ZK) proofs to privately
              verify the statements made about them. Polygon ID can securely
              interact with smart contracts and other identities without
              revealing personal information.
            </div>
            <div className={classes.buttonDiv}>
              <button className={classes.button1}>Sign Up for Free</button>
              <button className={classes.button2}>Talk to Sales</button>
            </div>
          </div>
          <div>
            <video
              style={{ width: "100%", height: "400px" }}
              preload="auto"
              autoplay="false"
              loop
              muted="muted"
              volume="0"
            >
              <source src={Video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
