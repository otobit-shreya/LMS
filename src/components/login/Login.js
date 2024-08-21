import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userCredentials")) {
      localStorage.setItem(
        "userCredentials",
        JSON.stringify({
          email: "admin@gmail.com",
          password: "123456",
        })
      );
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const storedCredentials = JSON.parse(
        localStorage.getItem("userCredentials")
      );

      if (
        formData.email === storedCredentials.email &&
        formData.password === storedCredentials.password
      ) {
        navigate("/news");
      } else {
        alert("Invalid email or password");
      }
    }

    setValidated(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <img
        src="./assets/bg.jpg"
        className="w-full object-cover h-full lg:h-auto lg:object-center md:w-auto object-[-265px]"
        alt="Background"
      />
       <div className="absolute top-0 left-0 right-0 p-4 md:p-8 flex justify-end lg:justify-start bg-gradient-to-br from-gray via-transparent to-transparent">
      <div className="text-white text-right lg:text-left">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-2 tracking-wider text-white relative">
          Learner
        </h1>
        <p className="text-[15px] md:tracking-wide font-bold bg-clip-text text-[#7f4649d9] typing-effect md:text-2xl">
          Learn, Grow, Succeed!
        </p>
      </div>
    </div>
      <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center w-full lg:w-1/3 p-4 md:p-6">
        <div className="bg-[#ffffffcc] p-6 md:p-8 rounded-xl shadow-lg max-w-xs mt-[5rem] md:mt-0 lg:min-w-sm md:min-w-[27rem] w-full">
          <h2 className="text-2xl md:text-3xl text-gray-600 font-bold mb-4">
            Welcome Back!👋
          </h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please Enter A Valid Email.
              </Form.Control.Feedback>
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Password Is Required.
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              type="submit"
              style={{ backgroundColor: "#DD6A70", fontWeight: "600" }}
              className="mt-3 mb-4 text-lg md:text-[25px] uppercase w-full border-0 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F4A5A5] hover:shadow-lg"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
  
  
  
  
  
  
};

export default Login;
