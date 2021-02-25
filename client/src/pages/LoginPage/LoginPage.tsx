import { Button, Paper, TextField } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import PageContainer from "../../components/Container/PageContainer/PageContainer";
import * as Yup from "yup";
import useStyles from "./styles";
import { LoginRequest } from "../../types/Request";
import { ErrorResponse, LoginResponse } from "../../types/Response";
import { api, cookie } from "../../lib/axios";
import { showMessage } from "../../redux/actions/MessageAction";
import { useDispatch } from "react-redux";

const LoginPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("이메일의 형태가 아닙니다.")
            .required("이메일은 필수 항목입니다."),
        password: Yup.string().required("비밀번호는 필수 항목입니다."),
    });

    const loginRequest = (data: LoginRequest) => {
        // use promise cuz in typescript does not support err in catch phraise type yet
        api.post("/user/login", data)
            .then((r) => r.data as LoginResponse)
            .then((response) => {
                cookie.set("X-TOKEN", response.token);
                dispatch(showMessage(response.message, "info"));
                history.push("/");
            })
            .catch((err: ErrorResponse) => {
                dispatch(showMessage(err.response.data.message, "warning"));
            });
    };

    return (
        <PageContainer>
            <Paper elevation={2} className={classes.container}>
                <div className={classes.formHeader}>로그인</div>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={validationSchema}
                    onSubmit={(data) => {
                        console.log(data);
                        loginRequest(data);
                    }}
                >
                    {({ handleChange, errors, touched }) => (
                        <Form className={classes.formContainer}>
                            <Field
                                as={TextField}
                                name="email"
                                label="E-Mail"
                                fullWidth
                                helperText={touched.email && errors.email}
                                onChange={handleChange}
                                variant="outlined"
                                type="text"
                                className={classes.textInput}
                            />
                            <Field
                                as={TextField}
                                name="password"
                                label="Password"
                                type="password"
                                helperText={touched.password && errors.password}
                                onChange={handleChange}
                                variant="outlined"
                                fullWidth
                                className={classes.textInput}
                            />
                            <div className={classes.buttonContainer}>
                                <Button
                                    type="submit"
                                    className={classes.buttonStyle}
                                >
                                    로그인
                                </Button>
                            </div>
                            <p className={classes.helperText}>
                                아직 회원이 아니신가요?
                                <Link to="/signup" className={classes.linkText}>
                                    회원가입
                                </Link>
                            </p>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </PageContainer>
    );
};

export default LoginPage;
