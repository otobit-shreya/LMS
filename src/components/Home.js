import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Alignment, Bold, ClassicEditor, Essentials, FontColor, Heading, Image, ImageInsert, Italic, Link, List, Paragraph, Strikethrough, Table, TableToolbar, Underline } from "ckeditor5";
import 'ckeditor5/ckeditor5.css';
import React, { useState } from "react";
import { Accordion, Button, Form, InputGroup, Modal } from "react-bootstrap";
import NavigationBar from "./navbar/Navbar";

const Home = () => {
  const [show, setShow] = useState(false);
  const [lessonType, setLessonType] = useState(null);
  const [desc, setDesc] = useState('')

  const onChangeType = (text) => {
    setLessonType(text);
    setShow(false);
  };

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
            <div
              className="w-[120px] h-[120px] cursor-pointer border-[1px] rounded-md border-green-600 shadow-md bg-green-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105"
              onClick={() => onChangeType("Text")}
            >
              <i className="bi bi-file-earmark-text text-green-500 text-[40px]"></i>
              <p className="text-green-500 font-semibold mt-2">Text Lesson</p>
            </div>
            <div
              className="w-[120px] h-[120px] cursor-pointer border-[1px] rounded-md border-orange-600 shadow-md bg-orange-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105"
              onClick={() => onChangeType("Video")}
            >
              <i className="bi bi-play-circle text-orange-500 text-[40px]"></i>
              <p className="text-orange-500 font-semibold mt-2">Video Lesson</p>
            </div>
            <div
              className="w-[120px] h-[120px] cursor-pointer border-[1px] rounded-md border-yellow-600 shadow-md bg-yellow-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105"
              onClick={() => onChangeType("Quiz")}
            >
              <i className="bi bi-question-circle text-yellow-500 text-[40px]"></i>
              <p className="text-yellow-500 font-semibold mt-2">Quiz</p>
            </div>
            <div className="w-[120px] h-[120px] cursor-pointer border-[1px] rounded-md border-indigo-600 shadow-md bg-indigo-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105">
              <i className="bi bi-question-circle text-indigo-500 text-[40px]"></i>
              <p className="text-indigo-500 font-semibold mt-2">Assignment</p>
            </div>
            <div className="w-[120px] h-[120px] cursor-pointer border-[1px] rounded-md border-rose-600 shadow-md bg-rose-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105">
              <i className="bi bi-camera-video text-rose-500 text-[40px]"></i>
              <p className="text-rose-500 font-semibold mt-2">Zoom Lesson</p>
            </div>
            <div className="w-[120px] h-[120px] cursor-pointer border-[1px] rounded-md border-teal-600 shadow-md bg-teal-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105">
              <i className="bi bi-cast text-teal-500 text-[40px]"></i>
              <p className="text-teal-500 font-semibold mt-2">Stream Lesson</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <div className="row m-0 h-screen">
        <div className="col-lg-4 col-md-4 bg-gray-100 shadow-md border-r-2 border-gray-200 h-auto">
          <h2 style={{ fontFamily: "auto" }} className="mt-20 mb-4">
            <i className="bi bi-book text-[26px]"></i>
            <span className="ml-2">Curriculum</span>
          </h2>
          <div className="max-h-[360px] overflow-auto">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Starting Course</Accordion.Header>
                <Accordion.Body>
                  <div className="max-h-[100px] overflow-auto">
                    <p>
                      <i className="bi bi-file-earmark-text text-green-500 mr-2"></i>
                      Introduction
                    </p>
                    <p>
                      <i className="bi bi-play-circle text-orange-500 mr-2"></i>
                      What is JAVASCRIPT?
                    </p>
                    <p>
                      <i className="bi bi-question-circle text-yellow-500 mr-2"></i>
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
                      <i className="bi bi-plus-lg mr-2"></i>Add Lesson
                    </Button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="mt-3">
                <Accordion.Header>After Intro</Accordion.Header>
                <Accordion.Body>
                  <div className="max-h-[100px] overflow-auto">
                    <p>
                      <i className="bi bi-file-earmark-text text-green-500 mr-2"></i>
                      Introduction
                    </p>
                    <p>
                      <i className="bi bi-play-circle text-orange-500 mr-2"></i>
                      What is TYPESCRIPT?
                    </p>
                    <p>
                      <i className="bi bi-question-circle text-yellow-500 mr-2"></i>
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
                      <i className="bi bi-plus-lg mr-2"></i>Add Lesson
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
              <i className="bi bi-plus-circle mr-2"></i>
              <span className="font-semibold tracking-wide">Add Section</span>
            </Button>
          </div>
        </div>
        {lessonType && (
          <div className="col-lg-8 col-md-8">
            <Form className="mt-20 ml-5">
              <div className="flex gap-2">
                <InputGroup className="mb-3 mt-3">
                  <InputGroup.Text id="basic-addon1">
                    {lessonType} Lesson
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

              <div className="max-w-xl">
                <Form.Group className="my-3">
                  <Form.Label className="font-semibold">
                    Lesson duration
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Check
                  type="switch"
                  label="Lesson preview (Everyone can see this lesson)"
                  className="font-medium text-xl"
                />
                <Form.Check
                  type="switch"
                  label="Unlock the lesson after a certain time after the purchase"
                  className="font-medium text-xl my-3"
                />

                <div className="flex justify-between">
                  <Form.Group className="min-w-[280px]">
                    <Form.Label className="font-semibold">
                      Lesson start date
                    </Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                  <Form.Group className="min-w-[280px]">
                    <Form.Label className="font-semibold">
                      Lesson start time
                    </Form.Label>
                    <Form.Control type="time" />
                  </Form.Group>
                </div>
                <Form.Group className="my-3">
                  <Form.Label className="font-semibold">
                    Short description of the lesson
                  </Form.Label>
                  
                  <CKEditor
                     editor={ ClassicEditor }
                     config={ {
                        plugins: [ Essentials, Bold, Italic,Underline, Strikethrough,Paragraph, List, Heading , FontColor, Alignment, Link, ImageInsert, Image, Table, TableToolbar],
                        toolbar:{
                          items: [ 'undo', 'redo', '|','heading', '|', 'bold', 'italic', 'underline', 'strikethrough','fontColor','|','alignment', '|', 'bulletedList', 'numberedList',"|", "-", "link", "imageInsert", "insertTable" ],
                          shouldNotGroupWhenFull: true,
                        },
                        table: {
                          contentToolbar: [
                            'tableColumn',
                            'tableRow',
                            'mergeTableCells'
                          ]
                        },
                         initialData: desc,
                      } }
                    onChange={(eInfo, editor) => {setDesc(editor.data.get())}}
                  />
                  
                </Form.Group>
              </div>
              <Form.Group className="my-3">
                <Form.Label className="font-semibold">
                  Lesson content
                </Form.Label>
                <CKEditor
                  editor={ ClassicEditor }
                     config={ {
                        plugins: [ Essentials, Bold, Italic,Underline, Strikethrough,Paragraph, List, Heading , FontColor, Alignment, Link, ImageInsert, Image, Table, TableToolbar],
                        toolbar:{
                          items: [ 'undo', 'redo', '|','heading', '|', 'bold', 'italic', 'underline', 'strikethrough','fontColor','|','alignment', '|', 'bulletedList', 'numberedList',"|", "-", "link", "imageInsert", "insertTable" ],
                          shouldNotGroupWhenFull: true,
                        },
                        table: {
                          contentToolbar: [
                            'tableColumn',
                            'tableRow',
                            'mergeTableCells'
                          ]
                        },
                         initialData: desc,
                      } }
                  onChange={(eInfo, editor) => {setDesc(editor.data.get())}}
                />
              </Form.Group>
              <Button className="mb-4 px-5 py-2">Create</Button>
            </Form>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
