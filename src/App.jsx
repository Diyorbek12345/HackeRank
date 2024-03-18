import { Section } from "./components/section";
import "./index.css";


function App() {
  return (
    <div className="container">
      <Section/>
    </div>
  );
}

export default App;

{/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="registr" element={<Registr />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter> */}