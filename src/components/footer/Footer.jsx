import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Food1, Facebook } from "../../assets/img";
import "../../assets/scss/index.scss";

const Footer = () => {
  return (
    <div className="container pt-4">
      <Row className="d-flex justify-content-center align-items-stretch py-4">
        <Col sm={12} lg={4} className="parent-img mb-4">
          <div className="footer-item">
            <div className="img-food-item">
              <Image
                src={Food1}
                className="img-food img-fluid"
                alt="food image in footer"
              />
            </div>
            <h2 className="text-mow text-darken mt-3 fw-bold">
              Meals on Wheels
            </h2>
          </div>
        </Col>
        <Col
          sm={12}
          lg={4}
          className="d-md-flex justify-content-md-center justify-content-lg-end mb-4 "
        >
          <div className="contact-footer">
            <p className="contact-item mb-3 text-darken">
              Street AAABBB No.7, Bali - Indonesia
            </p>
            <p className="contact-item mb-3 text-darken">
              mealsonwheels@gmail.com
            </p>
            <p className="contact-item mb-3 text-darken">+62 123 4567 8901</p>
          </div>
        </Col>
        <Col
          sm={12}
          lg={4}
          className="site-link d-md-flex justify-content-md-center justify-content-lg-end"
        >
          <div className="d-flex flex-column site-item">
            <Link
              to="####"
              className="link mb-3 text-darken text-decoration-none"
            >
              ABOUT US
            </Link>

            <Link
              to="####"
              className="link mb-3 text-darken text-decoration-none"
            >
              CONTACT US
            </Link>

            <Link
              to="####"
              className="link mb-3 text-darken text-decoration-none"
            >
              SITE MAP
            </Link>

            <Link to="####" className="link text-darken text-decoration-none">
              PRIVACY POLICY
            </Link>
          </div>
        </Col>
        <Col className="py-3 footer-bottom mt-4">
          <div className="bottom-item d-flex align-items-md-center flex-column">
            <div className="social-icon mb-3">
              <a href="##" target="_blank" rel="noreferrer">
                <img src={Facebook} alt="Icon" />
              </a>
              <a href="##" target="_blank" rel="noreferrer">
                <img src={Facebook} alt="Icon" />
              </a>
              <a href="##" target="_blank" rel="noreferrer">
                <img src={Facebook} alt="Icon" />
              </a>
            </div>
            <div className="copyright text-muted">
              <p>
                © 2023 All Rights Reserved.{" "}
                <Link to="/home" className="text-decoration-none text-darken">
                  &ensp;www.mealsonwheels.com
                </Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
