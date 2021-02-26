import { Button, Paper, TextField } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import PageContainer from "../../components/Container/PageContainer/PageContainer";
import * as Yup from "yup";
import useStyles from "./styles";

import { SignUpRequest } from "../../types/Request";
import { useDispatch } from "react-redux";
import { showMessage } from "../../redux/actions/MessageAction";
import { BasicResponse, ErrorResponse } from "../../types/Response";
import axios from "axios";
import { axiosConfigs } from "../../configs/axios";

const SignUpPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("이메일의 형태가 아닙니다.")
            .required("이메일은 필수 항목입니다."),
        firstName: Yup.string().required("이름은 필수 항목입니다."),
        lastName: Yup.string().required("성은 필수 항목입니다."),
        password: Yup.string().required("비밀번호는 필수 항목입니다."),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
            .required("비밀번호 확인은 필수 항목입니다."),
        address: Yup.string().required("주소은 필수 항목입니다."),
    });

    const signUpRequest = (data: SignUpRequest) => {
        // use promise cuz in typescript does not support err in catch phraise type yet
        axios
            .post("/user/signup", data, axiosConfigs)
            .then((r) => r.data as BasicResponse)
            .then((response) => {
                dispatch(showMessage(response.message, "info"));
                history.push("/login");
            })
            .catch((err: ErrorResponse) => {
                if (err.response) {
                    dispatch(showMessage(err.response.data.message, "warning"));
                }
            });
    };

    return (
        <PageContainer>
            <Paper elevation={2} className={classes.container}>
                <div className={classes.formHeader}>회원가입</div>
                <Formik
                    initialValues={{
                        email: "",
                        firstName: "",
                        lastName: "",
                        password: "",
                        confirmPassword: "",
                        address: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={signUpRequest}
                >
                    {({ handleChange, errors, touched }) => (
                        <Form className={classes.formContainer}>
                            <Field
                                as={TextField}
                                name="email"
                                label="E-Mail"
                                fullWidth
                                variant="outlined"
                                onChange={handleChange}
                                helperText={touched.email && errors.email}
                                type="text"
                                className={classes.textInput}
                            />
                            <Field
                                as={TextField}
                                name="firstName"
                                label="First Name"
                                type="text"
                                helperText={
                                    touched.firstName && errors.firstName
                                }
                                variant="outlined"
                                fullWidth
                                className={classes.textInput}
                            />
                            <Field
                                as={TextField}
                                name="lastName"
                                label="Last Name"
                                type="text"
                                variant="outlined"
                                helperText={touched.lastName && errors.lastName}
                                fullWidth
                                className={classes.textInput}
                            />
                            <Field
                                as={TextField}
                                name="password"
                                label="Password"
                                type="password"
                                variant="outlined"
                                helperText={touched.password && errors.password}
                                fullWidth
                                className={classes.textInput}
                            />
                            <Field
                                as={TextField}
                                name="confirmPassword"
                                label="Password Confirm"
                                type="password"
                                variant="outlined"
                                helperText={
                                    touched.confirmPassword &&
                                    errors.confirmPassword
                                }
                                fullWidth
                                className={classes.textInput}
                            />
                            <Field
                                as={TextField}
                                name="address"
                                label="Address"
                                type="text"
                                variant="outlined"
                                helperText={touched.address && errors.address}
                                fullWidth
                                className={classes.textInput}
                            />
                            <div className={classes.buttonContainer}>
                                <Button
                                    type="submit"
                                    className={classes.buttonStyle}
                                >
                                    회원가입
                                </Button>
                            </div>
                            <p className={classes.helperText}>
                                이미 계정이 있으신가요?
                                <Link to="/login" className={classes.linkText}>
                                    로그인
                                </Link>
                            </p>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </PageContainer>
    );
};

export default SignUpPage;
