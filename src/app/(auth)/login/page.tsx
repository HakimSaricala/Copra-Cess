import React from "react";
import { SigninForm } from "@/components/Forms/Signin/SigninForm";
function login() {
  return (
    <section className=" h-screen flex items-center justify-center ">
      <div>
        <SigninForm />
      </div>
    </section>
  );
}

export default login;
