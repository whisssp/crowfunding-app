import React from "react";
import LayoutAuthentication from "layouts/LayoutAuthentication";
import { Link } from "react-router-dom";
import { Label } from "components/label";
import { Input } from "components/input";
import { useForm } from "react-hook-form";
import FormGroup from "components/common/FormGroup";
import { Button } from "components/button";
import { Checkbox } from "components/checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IconEyeToggle } from "components/icon";
import useToggle from "hooks/useToggle";
import ButtonGoogle from "components/button/ButtonGoogle";

const schema = yup.object({
   fullName: yup.string().required("This field is required"),
   email: yup
      .string()
      .email("Invalid email address")
      .required("This field is required"),
   password: yup
      .string()
      .min(8, "Password must be 8 character")
      .required("This field is required"),
});

const SignUpPage = () => {
   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(schema),
      mode: "onSubmit",
   });
   const [acceptTerms, handleToggleTerms] = useToggle(false);
   const [showPassword, handleToggleShowPassword] = useToggle(false);

   const handleSignUp = (values) => {
      console.log(values);
   };

   return (
      <LayoutAuthentication heading="Sign Up">
         <p className="mb-6 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text3">
            You already have account?{" "}
            <Link to="/sign-in" className="font-medium underline text-primary">
               Sign In
            </Link>
         </p>
         <ButtonGoogle text="Sign up with Google"></ButtonGoogle>
         <p className="mb-4 text-xs font-normal text-center lg:text-sm text-text2 lg:mb-5 dark:text-white">
            Or sign up with email
         </p>
         <form onSubmit={handleSubmit(handleSignUp)}>
            <FormGroup className="mb-6 lg:mb-5">
               <Label for="fullName">Full Name *</Label>
               <Input
                  control={control}
                  type="text"
                  name="fullName"
                  placeholder="Whisper"
                  error={errors.fullName?.message}
               ></Input>
            </FormGroup>
            <FormGroup className="mb-6 lg:mb-5">
               <Label for="email">Email *</Label>
               <Input
                  control={control}
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  error={errors.email?.message}
               ></Input>
            </FormGroup>
            <FormGroup className="mb-6 lg:mb-5">
               <Label for="password">Password *</Label>
               <Input
                  control={control}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Type a password"
                  error={errors.password?.message}
               >
                  <IconEyeToggle
                     open={showPassword}
                     onClick={handleToggleShowPassword}
                  ></IconEyeToggle>
               </Input>
            </FormGroup>
            <div className="mb-6 lg:mb-5">
               <Checkbox onClick={handleToggleTerms} checked={acceptTerms}>
                  <p className="flex-1 text-xs font-normal cursor-pointer lg:text-sm">
                     I agree to the{" "}
                     <span className="underline text-secondary">
                        Terms of Use
                     </span>{" "}
                     and have read and understand the{" "}
                     <span className="underline text-secondary">
                        Privacy policy
                     </span>
                     .
                  </p>
               </Checkbox>
            </div>
            <Button type="submit" className="w-full text-white bg-primary">
               Create my account
            </Button>
         </form>
      </LayoutAuthentication>
   );
};

export default SignUpPage;
