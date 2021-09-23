import React from "react";
import useForm from "../useForm";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreditCardForm.css";
import Cards from "react-credit-cards";
import logo from '../assets/logo-big2.png';
import safe from '../assets/safe-badge.png';
import {SUCCESS_MSG} from '../constants';
import "react-credit-cards/es/styles-compiled.css";

const CreditCardForm = () => {
  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
  return (
    <div>
      <div className="container">
        <div className="box justify-content-center align-items-center">
          <div className="formDiv">
          <img className="formLogo" src={logo} alt="GoInterview logo" />
          <h3 className="formTitle">RecruiterAI Monthly Subscription</h3>
          <h4 className="formTitle">30 day free trial.</h4>
          <h5 className="formTitle">Afterwards you will be charged $29 + tax each month.</h5>
          <div className="creditCard">
          <Cards
            cvc={values.cardSecurityCode}
            expiry={values.cardExpiration}
            focused={values.focus}
            name={values.cardName}
            number={values.cardNumber}
          />
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                id="cardName"
                data-testid="cardName"
                name="cardName"
                placeholder="Cardholder Name"
                value={values.cardName}
                onChange={handleChange}
                onFocus={handleFocus}
                isValid={errors.cname}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="number"
                id="cardNumber"
                data-testid="cardNumber"
                name="cardNumber"
                placeholder="Card Number"
                value={values.cardNumber}
                onChange={handleChange}
                onFocus={handleFocus}
                isValid={errors.cnumber}
              />
            </Form.Group>
            <Row>
              {/* <Col>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="cardType"
                    id="cardType"
                    data-testid="cardType"
                    placeholder="Card Type"
                    value={values.cardType}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.ctype}
                  />
                </Form.Group>
              </Col> */}
              <Col>
                <Form.Group>
                  <Form.Control
                    type="text"
                    id="cardExpiration"
                    data-testid="cardExpiration"
                    name="cardExpiration"
                    placeholder="Expiration Date"
                    value={values.cardExpiration}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.cexp}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="number"
                    id="cardSecurityCode"
                    data-testid="cardSecurityCode"
                    name="cardSecurityCode"
                    placeholder="Security Code"
                    value={values.cardSecurityCode}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.ccvv}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="text"
                    id="cardPostalCode"
                    data-testid="cardPostalCode"
                    name="cardPostalCode"
                    placeholder="Postal Code"
                    value={values.cardPostalCode}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.cpostal}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="purchaseNotes">
              <p>Total payment due: $29 + tax*</p>
              <p>*$29 paid monthly. 30 days free trial.</p>
              <p>Free cancellation anytime.</p>
            </div>
            <Button
              size={"block"}
              disabled={SUCCESS_MSG === errors.message}
              data-testid="validateButton"
              id="validateButton"
              type="submit"
            >
              Start 30-day Free Trial
            </Button>
          </Form>
          <img className="safeImg" src={safe} alt="Safe payment" />
          </div>
          <Alert
            id="alertMessage"
            data-testid="alertMessage"
            variant={errors.variant}
            show={errors.show}
          >
            {errors.message}
          </Alert>{" "}
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
