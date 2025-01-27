"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextInput } from "../components/TextInput";
import { CommonButton } from "../components/CommonButton";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter a valid email address"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function LoginSection() {
  const { register, handleSubmit, formState: { errors }, reset, clearErrors, watch } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const watchEmail = watch("email");
  const watchPassword = watch("password");

  useEffect(() => {
    if (watchEmail && !errors.email) {
      clearErrors("email");
    }
  }, [watchEmail, errors.email, clearErrors]);

  useEffect(() => {
    if (watchPassword && !errors.password) {
      clearErrors("password");
    }
  }, [watchPassword, errors.password, clearErrors]);

  const onSubmit = () => {
    reset();
    clearErrors()
  };

  return (
    <div className="bg-white flex-1 md:order-2 order-1">
      <form
        className="space-y-4 md:w-2/3"
        noValidate
      >
        <h2 className="md:w-2/3 text-xl md:text-4xl mt-10 mb-10 font-sans md:text-center font-semibold text-gray-800">
          Sign in
        </h2>

        <div>
          <TextInput
            label="Email address"
            type="email"
            required
            placeholder="test@test.com"
            {...register("email")}
          />
          {errors.email && (
            <div className="bg-errorBackground mt-5 p-2 w-3/4 rounded-md">
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            </div>
          )}
        </div>

        <div>
          <TextInput
            label="Password"
            type="password"
            required
            placeholder="*****************"
            {...register("password")}
          />
          {errors.password && (
            <div className="bg-errorBackground mt-5 p-2 w-3/4 rounded-md">
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            </div>
          )}
        </div>

          <CommonButton type="submit" label="Sign in" onClick={handleSubmit(onSubmit)}/>
      </form>
    </div>
  );
}
