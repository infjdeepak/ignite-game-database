//global styles
import GlobalStyles from "./components/GlobalStyles";
//components
import Nav from "./components/Nav";
import Home from "./pages/Home";
//router
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Home />} />
        <Route path="/*" element={<h1>NOt found</h1>} />
      </Routes>
    </>
  );
}

export default App;
