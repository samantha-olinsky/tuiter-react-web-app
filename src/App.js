import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter, Link} from "react-router-dom";
import {Routes, Route} from "react-router";
import Midterm from "./labs/midterm";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route index
                   element={<Labs/>}/>
            <Route path="/hello"
                   element={<HelloWorld/>}/>
            <Route path="/tuiter/*"
                   element={<Tuiter/>}/>
            <Route path="/labs/midterm/*"
                   element={<Midterm/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;

// import Asd from "./labs/midterm/Asd"
// import Rew from "./labs/midterm/Rew"
// function App() {
//   return(
//       <BrowserRouter>
//         <Link to="/qwe/21/14/wer">LINK A</Link>
//         <Routes>
//           <Route path="/qwe/:qwe/:wer/wer" element={<Rew/>}/>
//           <Route path="/asd/:zxc/:xcv" element={<Asd/>}/>
//         </Routes>
//       </BrowserRouter>
//   )
// }
// export default App;