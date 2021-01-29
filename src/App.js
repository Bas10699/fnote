// import logo from './logo.svg';
// import './App.css';
// import { useHistory } from "react-router-dom";

// function App() {
//   let history = useHistory();

//   const handleClick = () => {
//     history.push("/home");
//   }
//   return (
//     <div className="App">

//       <header className="App-header">
//         <div>
//           บันทึกรายการของเธอ
//         </div>
//         <div>
//           ***** ต้องทำทุกวัน *****
//         </div>
//         <div>
//           <button className="btn btn-dark"
//                   data-toggle="collapse"
//                   data-target="#collapseExample"
//                   aria-expanded="false"
//                   aria-controls="collapseExample"
//                   onClick={handleClick}>
//                     เริ่ม
//                     </button>
//         </div>
//         <div>

//           <div className="collapse text-danger" id="collapseExample">

//              ขี้เกียจละ 5555

//           </div>
//         </div>


//       </header>
//       <div>

//       </div>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./componet/Home"
import Start from './componet/start';
import ShowData from './componet/showData';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/start'><Start /></Route>
        <Route exact path='/data'><ShowData /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

