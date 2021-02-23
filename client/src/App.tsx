import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/signup" component={SignUpPage}/>
        <Route exact path="/cart" component={CartPage}/>
      </Router>
    </div>
  );
}

export default App;
