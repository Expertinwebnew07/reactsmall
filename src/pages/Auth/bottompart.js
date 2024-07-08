import React from "react";

export default function bottompart({ Signlogin, click }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col border sborder-succes input">
            <form className="border">
              <div className="input-group mb-3 d-flex align-items-center  ">
                <input
                  className="form-check-input my-1 "
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
                <label htmlFor="/" className="m-3">
                  Remeberme for 30 Days.
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col border sborder-succes input">
            <form className="border">
              <button
                onClick={click}
                className=" col-12 btn btn-outline-success my-2"
              >
                {" "}
                {Signlogin}
              
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col border border-success input">
            <form className="border d-flex align-items-center justify-content-center">
              <p className="border my-1 ">
                Do't have clarity account? Register now
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
