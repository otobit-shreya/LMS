import React, { useState } from "react";
import NavigationBar from "./navbar/Navbar";
import { Accordion, Button, InputGroup, Form, Modal } from "react-bootstrap";

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
        <Modal.Body className="p-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="w-[120px] h-[120px] cursor-pointer border-[1px] rounded-md border-green-600 shadow-md bg-green-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105">
              <i class="bi bi-file-earmark-text text-green-500 text-[40px]"></i>
              <p className="text-green-500 font-semibold mt-2">Text Lesson</p>
            </div>
            <div className="w-[120px] h-[120px] cursor-pointer border-[1px] rounded-md border-orange-600 shadow-md bg-orange-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105">
              <i class="bi bi-play-circle text-orange-500 text-[40px]"></i>
              <p className="text-orange-500 font-semibold mt-2">Video Lesson</p>
            </div>
            <div className="w-[120px] h-[120px] cursor-pointer border-[1px] rounded-md border-yellow-600 shadow-md bg-yellow-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105">
              <i class="bi bi-question-circle text-yellow-500 text-[40px]"></i>
              <p className="text-yellow-500 font-semibold mt-2">Quiz</p>
            </div>
            <div className="w-[120px] h-[120px] cursor-pointer border-[1px] rounded-md border-indigo-600 shadow-md bg-indigo-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105">
              <i class="bi bi-question-circle text-indigo-500 text-[40px]"></i>
              <p className="text-indigo-500 font-semibold mt-2">Assignment</p>
            </div>
            <div className="w-[120px] h-[120px] cursor-pointer border-[1px] rounded-md border-rose-600 shadow-md bg-rose-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105">
              <i class="bi bi-camera-video text-rose-500 text-[40px]"></i>
              <p className="text-rose-500 font-semibold mt-2">Zoom Lesson</p>
            </div>
            <div className="w-[120px] h-[120px] cursor-pointer border-[1px] rounded-md border-teal-600 shadow-md bg-teal-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105">
              <i class="bi bi-cast text-teal-500 text-[40px]"></i>
              <p className="text-teal-500 font-semibold mt-2">Stream Lesson</p>
            </div>
          </div>
        </Modal.Body>
      </Modal >
      <div className="row m-0">
        <div className="col-lg-4 col-md-4 bg-gray-100 shadow-md border-r-2 border-gray-200 h-screen">
          <h2 style={{ fontFamily: "auto" }} className="mt-20 mb-4">
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
          <div className="mt-[60px]">
            <Form>
              <div className="flex gap-2">
                <InputGroup className="mb-3 mt-3">
                  <InputGroup.Text id="basic-addon1">
                    Text Lesson
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Enter Lesson Name"
                    aria-label="Lesson Name"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <Button
                  style={{
                    backgroundColor: "#dd6a70",
                    color: "white",
                    border: "none",
                    width: "250px",
                    height: "36px",
                    marginTop: "16px",
                  }}
                >
                  Create
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
