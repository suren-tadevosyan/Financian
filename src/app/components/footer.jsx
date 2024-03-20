"use client";

import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { TextField } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import CopyrightIcon from "@mui/icons-material/Copyright";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const Footer = () => {
  return (
    <div className="mx-[140px] my-[100px] ">
      <div href="/" className="w-[187.1px] h-[32px] relative mb-10 ">
        <Image src="/assets/Logo.svg" alt="logo" fill />{" "}
      </div>
      <div className="w-full flex justify-between">
        <div className="w-[350px]">
          <p className="font-light text-customGray mb-5">
            Lorem ipsum dolor sit amet consectetur. Tempor massa in suspendisse
            gravida parturient. Dolor iaculis f
          </p>
          <p className="font-light text-customGray">
            Sign up to get the latest in CoinFlip news, discounts, and more.
          </p>

          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            // onSubmit={handleLogin}
          >
            {({ isSubmitting, errors }) => (
              <Form>
                <Field
                  className="mt-5"
                  as={TextField}
                  name="email"
                  label="Email Address"
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
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: 1,
                      borderColor: "#FDD502",
                      borderRadius: "10px",
                    },
                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#FDD502",
                      },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#FDD502",
                      },
                  }}
                />
              </Form>
            )}
          </Formik>
        </div>
        <div className="font-light flex flex-col gap-5 w-[150px]">
          <p>Our courses</p>
          <p>All in one</p>
          <p>Packages</p>
          <p>Get started now</p>
        </div>
        <div className="w-[250px]">
          <p className="font-light text-customGray mb-5">Follow us on</p>
          <div className="flex justify-between mt-2">
            <div className="rounded-full border border-[#453B18]  p-2  h-[50px] w-[50px] flex items-center justify-center relative ">
              <div className="hover:text-blue-600 pointer cursor-pointer">
                <FacebookIcon />
              </div>
            </div>
            <div className="rounded-full border   border-[#453B18] p-2  h-[50px] w-[50px] flex items-center justify-center relative cursor-pointer ">
              <div className="hover:text-purple-600  cursor-pointer ">
                <InstagramIcon />
              </div>
            </div>{" "}
            <div className="rounded-full border border-[#453B18] p-2  h-[50px] w-[50px] flex items-center justify-center relative  cursor-pointer">
              <div className="hover:text-red-600">
                <YouTubeIcon />
              </div>
            </div>{" "}
            <div className="rounded-full border  border-[#453B18] p-2  h-[50px] w-[50px] flex items-center justify-center relative  cursor-pointer">
              <div className="hover:text-blue-500">
                <TwitterIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[180px]">
          <p className="font-light text-customGray mb-5">Contact us</p>
          <div className="flex w-[115px] justify-between mt-2">
            <div className="rounded-full border  border-[#453B18] p-2  h-[50px] w-[50px] flex items-center justify-center relative  cursor-pointer">
              <div className="hover:text-blue-300">
                <TelegramIcon />
              </div>
            </div>{" "}
            <div className="rounded-full border  border-[#453B18] p-2  h-[50px] w-[50px] flex items-center justify-center relative  cursor-pointer">
              <div className="hover:text-green-500">
                <WhatsAppIcon />
              </div>
            </div>
          </div>
          <p className="mt-5">info@logoipsum.com</p>
        </div>
      </div>
      <div className="flex items-center gap-1 text-customGray font-light">
        <CopyrightIcon fontSize="10px" />
        <p>2024 FINANCIAN LLC</p>
      </div>
    </div>
  );
};

export default Footer;
