import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import CartPage from "./pages/CartPage/CartPage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

function App() {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#535c68",
            },
            secondary: {
                main: "#535c68",
                // light: "#bdc3c7",
            },
            success: {
                main: "#27ae60",
                light: "#2ecc71",
            },
        },
    });

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Router>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/signup" component={SignUpPage} />
                    <Route exact path="/cart" component={CartPage} />
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
