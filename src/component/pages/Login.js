import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../style/community.css";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const initialState = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(null); // State to handle errors
  const [loading, setLoading] = useState(false); // State to handle loading state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { email, password } = formData;
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_PORT}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (!res.ok) {
        toast.error("Wrong email or password", {
          position: "top-center",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        throw new Error(`Request failed with status: ${res.status}`);
      }
      setIsLoggedIn(true);
      toast.success("Login Successfull!!", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred during signup. Please try again.");
    }
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <br />
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Form.Group className="link-to-signup">
          <span>Havn't account ? Create an Account.</span>
          <br />
          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>
        </Form.Group>
      </Form>
    </>
  );
};

export default Login;
