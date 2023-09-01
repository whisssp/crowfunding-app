import React from "react";
import LayoutAuthentication from "layouts/LayoutAuthentication";
import ButtonGoogle from "components/button/ButtonGoogle";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
import { Link } from "react-router-dom";
import FormGroup from "components/common/FormGroup";
import { Label } from "components/label";
import { Input } from "components/input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { IconEyeToggle } from "components/icon";
import useToggle from "hooks/useToggle";
import { Button } from "components/button";

const schema = yup.object({
   email: yup.string().email().required("This field is required"),
   password: yup
      .string()
      .min(8, "Password must be 8 character")
      .required("This field is required"),
});

const SignInPage = () => {
   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(schema),
      mode: "onSubmit",
   });
   console.log("🚀 ~ file: SignInPage.js:30 ~ SignInPage ~ errors:", errors);

   const [showPassword, handleToggleShowPassword] = useToggle(false);

   const handleSignIn = (values) => {
      console.log(values);
   };

   return (
      <LayoutAuthentication heading="Welcome Back!">
         <p className="mb-6 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text3">
            Dont have an account?{" "}
            <Link to="/sign-in" className="font-medium underline text-primary">
               Sign In
            </Link>
         </p>
         <ButtonGoogle text="Sign in with Google"></ButtonGoogle>
         <form onSubmit={handleSubmit(handleSignIn)}>
            <FormGroup className="mb-6 lg:mb-5">
               <Label for="email">Email *</Label>
               <Input
                  control={control}
                  type="text"
                  name="email"
                  placeholder="example.email"
                  error={errors.email?.message}
               ></Input>
            </FormGroup>
            <FormGroup className="mb-6 lg:mb-5">
               <Label for="password">Password *</Label>
               <Input
                  control={control}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Type your password"
                  error={errors.password?.message}
               >
                  <IconEyeToggle
                     open={showPassword}
                     onClick={handleToggleShowPassword}
                  ></IconEyeToggle>
               </Input>
            </FormGroup>
            <FormGroup className="mb-6 lg:mb-5">
               <span className="text-sm font-medium text-right cursor-pointer text-primary">
                  Forgot Password
               </span>
            </FormGroup>
            <Button type="submit" className="w-full text-white bg-primary">
               Sign in
            </Button>
         </form>
      </LayoutAuthentication>
   );
};

export default withErrorBoundary(SignInPage, {
   FallbackComponent: <ErrorComponent></ErrorComponent>,
});
