import React, { useState } from "react";
import NavigationBar from "./navbar/Navbar";
import { Accordion, Button, InputGroup, Form, Modal } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <NavigationBar />
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Select Lesson Type
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="w-[80px] h-[100px] border-[1px] rounded-md border-gray-300 flex items-center justify-center">
              1
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <div className="row m-0">
        <div className="col-lg-4 col-md-4 bg-gray-100 shadow-md border-r-2 border-gray-200 h-screen">
          <h2 style={{ fontFamily: "auto" }} className="mt-3 mb-4">
            <i class="bi bi-book text-[26px]"></i>
            <span className="ml-2">Curriculum</span>
          </h2>
          <div className="max-h-[360px] overflow-auto">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Starting Course</Accordion.Header>
                <Accordion.Body>
                  <div className="max-h-[100px] overflow-auto">
                    <p>
                      <i class="bi bi-file-earmark-text text-green-500 mr-2"></i>
                      Introduction
                    </p>
                    <p>
                      <i class="bi bi-play-circle text-orange-500 mr-2"></i>
                      What is JAVASCRIPT?
                    </p>
                    <p>
                      <i class="bi bi-question-circle text-yellow-500 mr-2"></i>
                      Quiz
                    </p>
                  </div>
                  <div className="mt-3">
                    <Button
                      className="w-full"
                      style={{
                        backgroundColor: "transparent",
                        color: "#dd6a70",
                        border: "1px solid #dd6a70",
                      }}
                      onClick={() => setShow(true)}
                    >
                      <i class="bi bi-plus-lg mr-2"></i>Add Lesson
                    </Button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="mt-3">
                <Accordion.Header>After Intro</Accordion.Header>
                <Accordion.Body>
                  <div className="max-h-[100px] overflow-auto">
                    <p>
                      <i class="bi bi-file-earmark-text text-green-500 mr-2"></i>
                      Introduction
                    </p>
                    <p>
                      <i class="bi bi-play-circle text-orange-500 mr-2"></i>
                      What is TYPESCRIPT?
                    </p>
                    <p>
                      <i class="bi bi-question-circle text-yellow-500 mr-2"></i>
                      Quiz
                    </p>
                  </div>
                  <div className="mt-3">
                    <Button
                      className="w-full"
                      style={{
                        backgroundColor: "transparent",
                        color: "#dd6a70",
                        border: "1px solid #dd6a70",
                      }}
                      onClick={() => setShow(true)}
                    >
                      <i class="bi bi-plus-lg mr-2"></i>Add Lesson
                    </Button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div>
            <Button
              style={{ backgroundColor: "#DD6A70" }}
              className="mt-4 w-full border-0 shadow-md"
            >
              <i class="bi bi-plus-circle mr-2"></i>
              <span className="font-semibold tracking-wide">Add Section</span>
            </Button>
          </div>
        </div>
        <div className="col-lg-8 col-md-8">
          <div>
            <Form>
              {/* <InputGroup className="mb-3 mt-3">
                <InputGroup.Text id="basic-addon1">Lesson</InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup> */}
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
