"use client";
import PdfViewer from "@/components/PdfViewer";
import { Modal, Offcanvas } from "react-bootstrap";
import React, { useState } from "react";

const page = () => {
  //normal view required state
  const [first, setFirst] = useState(false);

  //off canvas required state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //modal view required state
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="p-5">
        <div className="row">
          {/* normal View */}
          <div className="col-md-12 mb-2 ">
            <div className="btn-group gap-2 ">
              <button
                className="btn btn-primary btn-sm rounded"
                onClick={() => setFirst(true)}
              >
                Open Normal PDF View
              </button>
              <button
                className="btn btn-warning btn-sm rounded"
                onClick={() => setFirst(false)}
                disabled={!first ? true : false}
              >
                Close Normal PDF View
              </button>
            </div>

            {first && <PdfViewer fileUrl="/pdf/pdf.pdf" />}
          </div>

          {/* Offcanvas View */}
          <div className="col-md-12 mb-2 ">
            <button
              className="btn btn-primary btn-sm rounded"
              onClick={() => handleShow(true)}
            >
              Open Offcanvas PDF View
            </button>
            {Offcanvas && (
              <>
                <Offcanvas show={show} onHide={handleClose} placement="end">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your PDF Name</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <PdfViewer fileUrl="/pdf/sample_.pdf" />
                  </Offcanvas.Body>
                </Offcanvas>
              </>
            )}
          </div>

          {/* modal View */}
          <div className="col-md-12">
            <button
              className="btn btn-primary btn-sm rounded"
              onClick={() => setModalShow(true)}
            >
              Open Modal PDF View
            </button>
            <Modal
              show={modalShow}
              onHide={() => setModalShow(false)}
              size="lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Your PDF File Name
                </Modal.Title>
              </Modal.Header>
              <Modal.Body
                style={{
                  maxHeight: "calc(100vh - 210px)",
                  overflowY: "auto",
                }}
              >
                <PdfViewer fileUrl="/pdf/sample.pdf" />
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
