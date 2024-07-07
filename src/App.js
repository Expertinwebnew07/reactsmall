import "./scss/_bootstap.js";
import "./scss/_bootstap.scss";

import Header from "./component/Header/headers";
import Forgotpassword from "./pages/Auth/forgetpassword.js";
//  import Button from './component/Header/buttons';
import Footer from "./component/Footer/index";
import Register from "./pages/Auth/SignIn.js";
import Login from "./pages/Auth/Login.js";

function App() {
  let register = false;
  let login = false;
  return (
    <div className="App">
      <Header />

      <main>
        <div className="container login">
          <div className="row">
            <div className="col d-flex flex-column align-items-center justify-content-center">
              {register ? <Register /> : login ? <Login /> : <Forgotpassword />}
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
