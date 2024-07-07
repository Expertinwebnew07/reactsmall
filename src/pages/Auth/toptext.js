import React from 'react'

export default function toptext({Signlogin}) {
  return (
    <>
<div className="container">
          <div className="row">
            <div className="col border input">
              <div className="border">
                <p>
                  <img
                    className="diamond"
                    src="https://img.icons8.com/?size=100&id=8221&format=png&color=000000"
                    alt=""
                  />{" "}
                  CLARITY
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col border border-succes input">
              <div className="border">
                <h5 className="  col-12 ">{Signlogin}</h5>
                <p className="  col-12 ">
                  Ok Sir continue my design journey with Clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
