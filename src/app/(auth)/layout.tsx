import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  return (
    <MaxWidthWrapper>
      <header className="sticky">
        <Link href={"/"}>
          <Image
            src="/static/images/logo.png"
            alt="LOGO"
            sizes="90vw"
            style={{
              width: "5%",
              height: "auto",
            }}
            width={0}
            height={0}
          />
        </Link>
      </header>

      <div className="h-screen flex w-full justify-center">
        <div className=" ld:w-full flex flex-col items-start p-6">
          <div>{children}</div>
        </div>

        <div className="hidden lg:flex flex-1 w-full max-h-full max-w-4000px overflow-hidden relative bg-cream  flex-col pt-10 pl-24 gap-3">
          <h2 className="text-gravel md:text-4xl font-bold">
            Hi, I’m your AI powered sales assistant, Corinna!
          </h2>
          <p className="text-iridium md:text-sm mb-10">
            Corinna is capable of capturing lead information without a form...{" "}
            <br />
            something never done before 😉
          </p>
          <Image
            src="/static/images/dashboard.png"
            alt="App UI"
            loading="lazy"
            sizes="30"
            className="absolute shrink-0 !w-[1600px] top-48"
            width={0}
            height={0}
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Layout;
