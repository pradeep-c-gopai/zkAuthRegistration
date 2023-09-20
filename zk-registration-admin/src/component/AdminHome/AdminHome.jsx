import React , {useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import classes from "./Admin.module.css";
import Modal from "../UI/Modal/Modal";

const Admin = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Modal show={modalShow} onHide={() => setModalShow(false)} />
      
      <div className={classes.buttonDiv}>
        <button onClick={() => setModalShow(true)}>Register</button>
      </div>

      <Carousel
        variant="dark"
        //  activeIndex={0}
        className={classes.Container}
      >
        <Carousel.Item>
          <div className={classes.CarouselItem}></div>
        </Carousel.Item>

        <Carousel.Item>
          <div className={classes.CarouselItem}></div>
        </Carousel.Item>

        <Carousel.Item>
          <div className={classes.CarouselItem}></div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Admin;
