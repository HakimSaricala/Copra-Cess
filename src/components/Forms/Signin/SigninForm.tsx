"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTransition } from "react";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import { LoginUserInputValidation } from "@/schemas/validations";
import { CardWrapper } from "../Cardwrapper";
import { FormError } from "../Error";
import { FormSuccess } from "../Sucess";
import { login } from "@/actions/login";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
const FormSchema = LoginUserInputValidation;

export const SigninForm = () => {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [passwordHidden, setPasswordHidden] = useState(true);
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      login(data).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };
  return (
    <CardWrapper
      headerLabel="Enter your email below to login to your account"
      backbuttonLabel="Dont have an account?"
      backbuttonHref="/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email Address"
                    {...field}
                    type="email"
                    disabled={pending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Password"
                    {...field}
                    type={passwordHidden ? "password" : "text"}
                    disabled={pending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <p
              className="text-primary inline-block  text-sm cursor-pointer select-none"
              onClick={() => setPasswordHidden(!passwordHidden)}
            >
              {passwordHidden ? "Show" : "Hide"} Password
            </p>
          </div>
          <FormSuccess message={success} />
          <FormError message={error || urlError} />
          <Button className="w-full" type="submit" disabled={pending}>
            Log in
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
