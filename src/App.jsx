import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./componets/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./componets/ItemDetail/ItemDetailContainer";
import { Navbar } from "./componets/Navbar/Navbar";
import CartContainer from "./componets/Cart/CartContainer";
import Form from "./componets/Form/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<h1>La ruta no existe</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
