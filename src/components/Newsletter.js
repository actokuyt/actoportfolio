import { useState } from "react";
// const cors = require("cors");
import { Col, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitButton, setSubmitButton] = useState("submit");

  const clearFields = () => {
    setEmail("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitButton("submiting");

    const payload = {
      email_address: email,
    };

    const jsonData = JSON.stringify(payload);

    try {
      await axios.post("https://backend-service-h1x1.onrender.com/newsletter", jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      clearFields();
      Swal.fire({
        toast: true,
        position: "bottom",
        icon: "success",
        title: "subscribed successfully",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } catch (error) {
      Swal.fire({
        toast: true,
        position: "bottom",
        icon: "error",
        title: "something went wrong",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    }
    setSubmitButton("submit");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to my Newsletter<br></br> & Never miss any update.
            </h3>
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">{submitButton}</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
