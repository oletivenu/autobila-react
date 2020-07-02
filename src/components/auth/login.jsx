import React, { Component, useState, Link } from "react";
import { Button, Modal } from "react-bootstrap";

export class LoginPage extends Component {
  render() {
    return (
      <>
        <Modal {...this.props} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
