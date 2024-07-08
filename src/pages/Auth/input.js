export default function input({ name, labletext, password, type, onChange }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 border border-success input">
            <form className="border">
              <div htmlFor="name" className=" d-flex justify-content-between">
                <span>{labletext}</span>
                <span className="fw-light">{password}</span>
              </div>
              <input
                type={type}
                className="form-control "
                name={name}
                onChange={onChange}
                placeholder={labletext}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
