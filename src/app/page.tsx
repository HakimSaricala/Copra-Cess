import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Header from "@/components/header";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";
const services = [
  {
    name: "Real-time",
    logo: "/static/images/realtime.png",
    description: "Get real-time price of Copra around Quezon province",
  },
  {
    name: "Transaction Records",
    logo: "/static/images/transaction.png",
    description: "Keep all your Transaction neatly",
  },
  {
    name: "Schedule Delivery",
    logo: "/static/images/delivery.png",
    description: "Schedule Delivery of Copra to oil mills",
  },
  {
    name: "Virtual Queue",
    logo: "/static/images/virtual queue.png",
    description: "Seamless Line queuing for Trucks",
  },
  {
    name: "Map",
    logo: "/static/images/map.png",
    description: "Find the most profitable route to deliver",
  },
  {
    name: "Qr code",
    logo: "/static/images/scan.png",
    description: "Scan Qr code for Tracing",
  },
  {
    name: "Digital Payment",
    logo: "/static/images/payment.png",
    description: "Make you payment easier than ever",
  },
  {
    name: "Customizable Settings",
    logo: "/static/images/settings.png",
    description: "Edit UI to your Preference",
  },
];
export default function Home() {
  //Need to redirect to login when user is not Logged In
  return (
    <>
      <Header />
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl mt-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl ">
            Transforming the way you{" "}
            <span className="copracess bg-transparent">Trade Copra</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to Copracess, your premier platform revolutionizing copra
            trading through seamless web and mobile applications. Experience the
            future of the industry at your fingertips with our innovative
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/dashboard" className={buttonVariants()}>
              Get Started
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>
      <section className="border-">
        <MaxWidthWrapper className="py-20 md:px-10">
          <h3 className="text-center text-5xl font-bold copracess mt-10 mb-8">
            Our Services
          </h3>
          <p className="text-center text-3xl font-semibold mt-10 mb-8">
            We offer tailored solutions to optimize copra trading
          </p>
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <Card className="w-full max-w-sm mx-auto h-full flex flex-col ">
                  <div className="flex-grow flex flex-col items-center justify-center p-6 ">
                    <div className="h-32 flex items-center justify-center w-auto ">
                      <Image
                        src={service.logo}
                        alt="Services offered"
                        priority
                        className="object-contain "
                        width="80"
                        height="80"
                        style={{
                          width: service.name === "Qr code" ? "auto" : 128,
                          height: service.name === "Qr code" ? 128.6 : 128,
                        }}
                      />
                    </div>
                  </div>
                  <CardHeader className="text-center flex flex-col justify-center p-4">
                    <CardTitle className="text-xl font-semibold ">
                      {service.name}
                    </CardTitle>
                    <CardDescription className="text-lg text-black-700 ">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
