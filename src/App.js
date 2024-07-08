import "./scss/_bootstap.js";
import "./scss/_bootstap.scss";

import Header from "./component/Header/headers";
import Forgotpassword from "./pages/Auth/forgetpassword.js";
//  import Button from './component/Header/buttons';
import Footer from "./component/Footer/index";
import Register from "./pages/Auth/SignIn.js";
import Login from "./pages/Auth/Login.js";

function App() {
  let register = true;
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

// import React, { useState } from "react";
// import "./scss/_bootstap.js";
// import "./scss/_bootstap.scss";

// import Header from "./component/Header/headers";
// import Forgotpassword from "./pages/Auth/forgetpassword.js";
// import Footer from "./component/Footer/index";
// import Register from "./pages/Auth/SignIn.js";
// import Login from "./pages/Auth/Login.js";

// function App() {
//   const [activeComponent, setActiveComponent] = useState("login");

//   const renderComponent = () => {
//     switch (activeComponent) {
//       case "register":
//         return <Register />;

//       case "forgotpassword":
//         return <Forgotpassword />;
//       default:
//         return <Login />;
//     }
//   };

//   let login=<span onClick={() => setActiveComponent("login")}>Login</span>;
//   putinsignin=login

//   return (
//     <div className="App">
//       <Header />

//       <main>
//         <div className="container login">
//           <div className="row">
//             <div className="col d-flex flex-column align-items-center justify-content-center">
//               {renderComponent()}
//             </div>
//           </div>

//           <div className="row">
//             <div className="col d-flex flex-column align-items-center justify-content-center">
//               <span onClick={() => setActiveComponent("register")}>
//                 Register
//               </span>
//               <span onClick={() => setActiveComponent("login")}>Login</span>
//               <span onClick={() => setActiveComponent("forgotpassword")}>
//                 Forgot Password
//               </span>
//             </div>
//           </div>
//         </div>
//       </main>

//       <footer className="footer">
//         <Footer />
//       </footer>
//     </div>
//   );
// }

// export default App;
