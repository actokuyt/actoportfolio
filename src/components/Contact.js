import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
      "Invalid phone number. Enter phone number in international format. Ex: +14158141829"
    )
    .required("Required"),
  message: Yup.string().required("Required"),
});

export const Contact = () => {
  const [submitButton, setSubmitButton] = useState("send");

  const handleSubmit = async (values, { resetForm }) => {
    setSubmitButton("sending");
    const { firstName, lastName, email, phone, message } = values;
    var payload = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phone,
      message: message,
    };

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        payload,
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      resetForm();
      Swal.fire({
        toast: true,
        position: "bottom",
        icon: "success",
        title: "message sent successfully",
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
        timer: 5000,
        timerProgressBar: true,
      });
    }
    setSubmitButton("send");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <Formik
                    initialValues={{
                      firstName: "",
                      lastName: "",
                      email: "",
                      phone: "",
                      message: "",
                    }}
                    validationSchema={ContactSchema}
                    onSubmit={handleSubmit}
                  >
                    {(formik) => (
                      <Form>
                        <h2>Get In Touch</h2>
                        <Row>
                          <Col size={12} sm={6} className="px-1">
                            <Field
                              id="firstName"
                              className="p-2 border-2 border-gray-400"
                              name="firstName"
                              placeholder="First Name"
                            ></Field>
                            <ErrorMessage
                              component="div"
                              className="text-red-700"
                              name="firstName"
                            />
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <Field
                              id="lastName"
                              className="p-2 border-2 border-gray-400"
                              name="lastName"
                              placeholder="Last Name"
                            ></Field>
                            <ErrorMessage
                              component="div"
                              className="text-red-700"
                              name="lastName"
                            />
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <Field
                              id="email"
                              className="p-2 border-2 border-gray-400"
                              name="email"
                              placeholder="Email"
                            ></Field>
                            <ErrorMessage
                              component="div"
                              className="text-red-700"
                              name="email"
                            />
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <Field
                              id="phone"
                              className="p-2 border-2 border-gray-400"
                              name="phone"
                              placeholder="Phone No."
                            ></Field>
                            <ErrorMessage
                              component="div"
                              className="text-red-700"
                              name="phone"
                            />
                          </Col>
                          <Col size={12} sm={12} className="px-1">
                            <Field
                              as="textarea"
                              id="message"
                              className="p-2 border-2 border-gray-400"
                              name="message"
                              placeholder="Message"
                            ></Field>
                            <ErrorMessage
                              component="div"
                              className="text-red-700"
                              name="message"
                            />
                          </Col>
                          <Col size={12} sm={12}>
                            <button type="submit">
                              <span>{submitButton}</span>
                            </button>
                          </Col>
                        </Row>
                      </Form>
                    )}
                  </Formik>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
