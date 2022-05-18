import { useState, useEffect } from "react";
import Content from "./Component/Content";
import Header from "./Component/Header";
function App() {
  const [message, setMessage] = useState(0);
  const [color, setColor] = useState("red");
  const onClickListener = () => setMessage(message + 1);
  // useEffect(() => console.log("rendering!"));
  // useEffect(() => {
  //   console.log("rendering!");
  // }, []);
  useEffect(() => {
    console.log("rendering!");
  }, [message]);
  return (
    <div>
      {/* <Header></Header>
      <Content content={"안녕하세요"} name=("임민재")></Content> */}
      <button onClick={onClickListener}>State변경</button>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        red
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        red
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        red
      </button>

      <p style={{ color }}>현재 색은 {color} 입니다.</p>
    </div>
  );
}

export default App;
