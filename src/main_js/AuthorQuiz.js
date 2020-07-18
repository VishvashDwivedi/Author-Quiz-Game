import React from "react";
import "../main_css/bootstrap.min.css";
import "../main_css/AuthorQuiz.css";
import Header from "./Header";
import Title from "./Title";
import Middle from "./Middle";
// import { render } from "react-dom";
import Modal from "react-bootstrap/Modal";


var ModalFunction = undefined;

const App = (props) => {
    
    const [isOpen, setIsOpen] = React.useState(props.value);
    const [title, setTitle] = React.useState("Transitioning...");
  
    const showModal = () => {
      // console.log("Ping !");
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
      setTitle("Transitioning...");
    };
  
    const modalLoaded = () => {
      setTitle("");
    };
  
    ModalFunction = showModal;

    return (
      <>
        {/* <button onClick={showModal}>Display Modal</button> */}

        <Modal show={isOpen} onHide={hideModal} onEntered={modalLoaded} dialogClassName = "modal-dialog modal-dialog-centered">
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body> Hope so ! You enjoyed the quiz ! </Modal.Body>
          <Modal.Footer>
            <button onClick={hideModal}> Close </button>
            <button onClick = { props.render } > Re-start </button>
          </Modal.Footer>
        </Modal>

      </>
    );
  };



const Main = (props) => {

    return (
    <div>
        <Header />
        <Title />
        <App value = {false} render = {props.render} />
        <Middle render = {props.render} ModalFunction = {ModalFunction} />
    </div>
    );

}


export default Main;
