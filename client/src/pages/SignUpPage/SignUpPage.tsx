import { Button, Paper, TextField } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import PageContainer from "../../components/Container/PageContainer/PageContainer";
import * as Yup from "yup";
import useStyles from "./styles";

import { SignUpRequest } from "../../types/Request";

const SignUpPage = () => {
    const classes = useStyles();

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
                    onSubmit={(data: SignUpRequest) => {
                        const {
                            email,
                            firstName,
                            lastName,
                            password,
                            confirmPassword,
                            address,
                        } = data;
                    }}
                >
                    {({ errors, touched, values }) => (
                        <Form className={classes.formContainer}>
                            <Field
                                as={TextField}
                                id="standard-full-width"
                                name="email"
                                label="E-Mail"
                                fullWidth
                                variant="outlined"
                                type="text"
                                className={classes.textInput}
                            />
                            <Field
                                as={TextField}
                                name="firstName"
                                label="First Name"
                                type="text"
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
                                fullWidth
                                className={classes.textInput}
                            />
                            <Field
                                as={TextField}
                                name="password"
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                className={classes.textInput}
                            />
                            <Field
                                as={TextField}
                                name="confirmPassword"
                                label="Password Confirm"
                                type="password"
                                variant="outlined"
                                fullWidth
                                className={classes.textInput}
                            />
                            <Field
                                as={TextField}
                                name="address"
                                label="Address"
                                type="text"
                                variant="outlined"
                                fullWidth
                                className={classes.textInput}
                            />
                            <div className={classes.textInput}>
                                <p className={classes.errorText}>
                                    {touched.email && errors.email}
                                </p>
                                <p className={classes.errorText}>
                                    {touched.firstName && errors.firstName}
                                </p>
                                <p className={classes.errorText}>
                                    {touched.lastName && errors.lastName}
                                </p>
                                <p className={classes.errorText}>
                                    {touched.password && errors.password}
                                </p>
                                <p className={classes.errorText}>
                                    {touched.confirmPassword &&
                                        errors.confirmPassword}
                                </p>
                                <p className={classes.errorText}>
                                    {touched.address && errors.address}
                                </p>
                            </div>
                            <div className={classes.buttonContainer}>
                                <Button className={classes.buttonStyle}>
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
