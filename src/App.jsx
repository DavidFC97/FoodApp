import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CardContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Cart from "./components/UI/Cart.jsx";

function App() {
  return (
    
      <CartContextProvider>
        <UserProgressContextProvider>
        <Header />
        <Meals />
        <Cart />
        </UserProgressContextProvider>
      </CartContextProvider>
    
  );
}

export default App;
