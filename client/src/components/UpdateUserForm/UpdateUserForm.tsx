import { Button, makeStyles, TextField } from "@material-ui/core";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { axiosConfigs } from "../../configs/axios";
import { showMessage } from "../../redux/actions/MessageAction";
import { RootReducerType } from "../../redux/reducers/rootReducer";
import { BasicResponse, ErrorResponse } from "../../types/Response";

const useStyles = makeStyles((theme) => ({
    formContainer: {
        width: "100%",
        height: "100%",
        padding: "15px",
    },
    formHeader: {
        backgroundColor: theme.palette.grey[300],
        height: "30px",
        padding: "18px",
        color: theme.palette.grey[600],
        fontWeight: 600,
        fontSize: "16px",
        marginBottom: "50px",
    },
    textInput: {
        display: "block",
        width: "70%",
        margin: "0 auto",
        marginBottom: "30px",
    },
    buttonContainer: {
        width: "70%",
        margin: "0 auto",
    },
    buttonStyle: {
        marginTop: "50px",
        display: "block",
        color: "#fff",
        width: "100%",
        fontSize: "18px",
        height: "50px",
        backgroundColor: theme.palette.success.main,
        "&:hover": {
            backgroundColor: theme.palette.success.light,
        },
        "&:active": {
            backgroundColor: theme.palette.success.main,
        },
    },
    helperText: {
        textAlign: "center",
        color: theme.palette.grey[600],
    },
    linkText: {
        marginLeft: "7px",
        color: theme.palette.grey[600],
        "&:hover": {
            textDecoration: "underline",
            color: theme.palette.grey[900],
        },
    },
}));
const UpdateUserForm = () => {
    const classes = useStyles();
    const user = useSelector((state: RootReducerType) => state.user);
    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("이메일의 형태가 아닙니다.")
            .required("이메일은 필수 항목입니다."),
        firstName: Yup.string().required("이름은 필수 항목입니다."),
        lastName: Yup.string().required("성은 필수 항목입니다."),
        confirmEmail: Yup.string()
            .email("이메일의 형태가 아닙니다.")
            .oneOf([Yup.ref("email"), null], "두 이메일이 일치하지 않습니다.")
            .required("이메일 확인은 필수 항목입니다."),
    });

    const updateAddressRequest = (data: {
        firstName: string;
        lastName: string;
        email: string;
    }) => {
        axios
            .put(`/user/${user.userId}/update-info`, data, axiosConfigs)
            .then((r) => r.data)
            .then((response: BasicResponse) => {
                dispatch(showMessage(response.message, "info"));
            })
            .catch((e: ErrorResponse) => {
                dispatch(showMessage(e.response.data.message, "warning"));
            });
    };

    return (
        <Formik
            initialValues={{
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                confirmEmail: "",
            }}
            validationSchema={validationSchema}
            onSubmit={updateAddressRequest}
        >
            {({ errors, touched }) => (
                <Form className={classes.formContainer}>
                    <Field
                        as={TextField}
                        name="firstName"
                        label="First Name"
                        type="text"
                        helperText={touched.firstName && errors.firstName}
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
                        name="email"
                        label="E-Mail"
                        type="email"
                        variant="outlined"
                        helperText={touched.email && errors.email}
                        fullWidth
                        className={classes.textInput}
                    />
                    <Field
                        as={TextField}
                        name="confirmEmail"
                        label="Confirm E-Mail"
                        type="email"
                        variant="outlined"
                        helperText={touched.confirmEmail && errors.confirmEmail}
                        fullWidth
                        className={classes.textInput}
                    />
                    <div className={classes.buttonContainer}>
                        <Button type="submit" className={classes.buttonStyle}>
                            내 정보 수정
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default UpdateUserForm;
