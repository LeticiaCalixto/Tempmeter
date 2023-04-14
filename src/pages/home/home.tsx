import "./style/style.css";
// import logo from "../../components/images/icons8-temperatura-64.png";
import CardSensor from "./components/table";
import { Button, Col, Row, Card } from "react-bootstrap";
// import RadialChart from "./components/radialChart";
import React from "react";

export default function Login() {

  return (
    <Card>
      <div className="container">
        <Card.Body>
          <Row>
            {/* <img className="icon" src={logo} /> */}
            <h4 className="title">
              <span>Tempmeter</span>
            </h4>
          </Row>

          <Row>
            <Col>
              {/* <CardSensor>
              </CardSensor> */}
            </Col>

          </Row>
        </Card.Body>
      </div>
    </Card>
  );
}
