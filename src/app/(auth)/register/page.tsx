import React from "react";
import { SignupForm } from "@/components/Forms/Signup/SignupForm";
function register() {
  return (
    <section className=" h-screen flex items-center justify-center ">
      <div>
        <SignupForm />
      </div>
    </section>
  );
}

export default register;
