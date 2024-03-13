"use client";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormControlLabel, Checkbox } from "@mui/material";
import Button from "../button";
import googleIMG from "../../../../public/assets/google.png";

import * as Yup from "yup";

import { Montserrat } from "@next/font/google";
import Link from "next/link";

const montserratFont = Montserrat({
  subsets: ["latin"],
  preload: true,
});

const Register = ({ onClose, onLoginClick }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (values, { setSubmitting }) => {
    console.log("Logging in with:", values);
    onClose();
    setSubmitting(false);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "", confirmPassword: "" }}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <div className={`${montserratFont.className} mb-6`}>
            <p className="font-light text-customGray">Welcome</p>
          </div>
          <h2
            className={`${montserratFont.className} mb-6 text-customGray text-2xl`}
          >
            Register{" "}
          </h2>
          <Field
            as={TextField}
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            autoComplete="off"
            helperText={<ErrorMessage name="email" />}
            error={Boolean(errors.email)}
            style={{ marginBottom: "24px" }}
            InputProps={{
              style: {
                color: "#CDCDCD",
                backgroundColor: "rgba(20, 20, 20, 1)",
              },
            }}
            InputLabelProps={{ style: { color: "#CDCDCD" } }}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": { border: 0 },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#FDD502",
                },
            }}
          />
          <Field
            as={TextField}
            type={showPassword ? "text" : "password"}
            name="password"
            label="Password"
            variant="outlined"
            fullWidth
            autoComplete="off"
            helperText={<ErrorMessage name="password" />}
            error={Boolean(errors.password)}
            style={{ marginBottom: "24px" }}
            InputProps={{
              style: {
                color: "#CDCDCD",
                backgroundColor: "rgba(20, 20, 20, 1)",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    aria-label="toggle password visibility"
                  >
                    {showPassword ? (
                      <VisibilityOff sx={{ color: "#CDCDCD" }} />
                    ) : (
                      <Visibility sx={{ color: "#CDCDCD" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ style: { color: "#CDCDCD" } }}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": { border: 0 },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#FDD502",
                },
            }}
          />
          <Field
            as={TextField}
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            label="Confirm password"
            variant="outlined"
            fullWidth
            autoComplete="off"
            helperText={
              touched.confirmPassword && errors.confirmPassword ? (
                <ErrorMessage name="confirmPassword" />
              ) : null
            }
            error={
              errors.confirmPassword && touched.confirmPassword // Check if confirmPassword has an error and if it has been touched
            }
            style={{ marginBottom: "24px" }}
            InputProps={{
              style: {
                color: "#CDCDCD",
                backgroundColor: "rgba(20, 20, 20, 1)",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    aria-label="toggle password visibility"
                  >
                    {showPassword ? (
                      <VisibilityOff sx={{ color: "#CDCDCD" }} />
                    ) : (
                      <Visibility sx={{ color: "#CDCDCD" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ style: { color: "#CDCDCD" } }}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": { border: 0 },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#FDD502",
                },
            }}
          />
          <div className="flex items-center justify-between">
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                />
              }
              label={
                <span
                  style={{
                    fontWeight: 300,
                    color: "#CDCDCD",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  Remember Me
                </span>
              }
            />
            <Link
              href="#"
              className="font-light text-customGray"
              onClick={() => alert("Forgot Password clicked")}
            >
              Forgot Password?
            </Link>
          </div>
          <div className="mt-6">
            <Button
              type="submit"
              disabled={isSubmitting}
              label={isSubmitting ? "Logging in..." : "Log in"}
              className="rounded-lg w-full bg-yellow-400 py-3 mb-6 text-black"
            ></Button>
            <div className="mb-6 flex justify-center font-light ">Or</div>
            <Button
              type="button"
              label={"Register with Google"}
              className="flex justify-center gap-2 rounded-lg w-full py-3 mb-6 text-black bg-gradient-custom text-customGray font-light "
              imageSrc={googleIMG.src}
            ></Button>
          </div>

          <h2
            className={`${montserratFont.className} font-light text-customGray text-center mt-8`}
          >
            Have an Account ?{" "}
            <Button
              type="button"
              className="text-yellow-500"
              label={"Log in"}
              onClick={onLoginClick}
            />
          </h2>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
