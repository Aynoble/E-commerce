import styled from "styled-components";
// import Cart from "./Pages/Cart";
// import Login from "./Pages/Login";
import Home from "./Pages/Home";
// import ProductList from "./Pages/ProductList";
// import Product from "./Pages/Product";
// import Register from "./Pages/Register";

const Container = styled.div`
  overflow-x: hidden;
`;

function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;
