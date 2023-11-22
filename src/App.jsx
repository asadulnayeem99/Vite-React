import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Invent from "./Components/Invent";
import Users from "./Components/Users";
function App() {
  let [count, setCount] = useState(0);
  const [hoverCount, setHoverCount] = useState(0);
  const handleMouseOver = () => setHoverCount(hoverCount + 1);

  const handleClick = () => setCount(count + 1);
  const heroes = ["Iron Man", "Dare Devil", "Batman", "Wanda Maximoff"];

  return (
    <>
      <h5 onMouseOver={handleMouseOver}>{hoverCount}</h5>
      <Users />
      <h1>HI....{count}</h1>
      <button onClick={handleClick}>Click</button>
      {heroes.map((x, index) => (
        <li key={index}>{x}</li>
      ))}
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/Invent" element={<Invent />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
