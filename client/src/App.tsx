import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import CartPage from "./pages/CartPage/CartPage";
import { createMuiTheme, Snackbar, ThemeProvider } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideMessage } from "./redux/actions/MessageAction";
import MuiAlert from "@material-ui/lab/Alert";
import { RootReducerType } from "./redux/reducers/rootReducer";

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
        },
    });

    const message = useSelector((state: RootReducerType) => state.message);

    const dispatch = useDispatch();

    const closeMessage = () => {
        dispatch(hideMessage());
    };

    return (
        <div>
            <ThemeProvider theme={theme}>
                {message.open && (
                    <Snackbar
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "center",
                        }}
                        open={message.open}
                        autoHideDuration={5000}
                        onClose={closeMessage}
                    >
                        <MuiAlert
                            onClose={closeMessage}
                            severity={message.severity}
                        >
                            {message.message}
                        </MuiAlert>
                    </Snackbar>
                )}
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
