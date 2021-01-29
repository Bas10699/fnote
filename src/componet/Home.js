
import '../App.css';
import { useHistory } from "react-router-dom";
import background from "../const/img/bg.jpg";

function Home() {
  let history = useHistory();

  // const handleClick = () => {
  //   history.push("/start");
  // }
  return (
    <div className="App">

      <header className="App-header" style={{ backgroundImage: `url(${background})` }}>
        <div >
          <div>
            บันทึกรายการของเธอ
        </div>
          <div >
            ***** ต้องทำทุกวัน *****
        </div>
        </div>
        <div>
          <button className="btn btn-outline-dark"
            onClick={() => { history.push("/start") }}>
            บันทึกข้อมูล
                    </button>
          <button className="btn btn-outline-dark"
            onClick={() => history.push("/data")}>
            ดูข้อมูล
                    </button>
        </div>


      </header>
      <div>

      </div>
    </div>
  );
}

export default Home;
