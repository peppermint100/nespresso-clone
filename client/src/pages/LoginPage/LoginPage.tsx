import { Button, Paper, TextField } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import PageContainer from "../../components/Container/PageContainer/PageContainer";
import * as Yup from "yup";
import useStyles from "./styles";

const LoginPage = () => {
    const classes = useStyles();

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("이메일의 형태가 아닙니다.")
            .required("이메일은 필수 항목입니다."),
        password: Yup.string().required("비밀번호는 필수 항목입니다."),
    });

    return (
        <PageContainer>
            <Paper elevation={2} className={classes.container}>
                <div className={classes.formHeader}>로그인</div>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={validationSchema}
                    onSubmit={(data) => {
                        console.log(data);
                    }}
                >
                    {({ errors, touched }) => (
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
                                name="password"
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                className={classes.textInput}
                            />
                            <div className={classes.textInput}>
                                <p className={classes.errorText}>
                                    {touched.email && errors.email}
                                </p>
                                <p className={classes.errorText}>
                                    {touched.password && errors.password}
                                </p>
                            </div>
                            <div className={classes.buttonContainer}>
                                <Button className={classes.buttonStyle}>
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
