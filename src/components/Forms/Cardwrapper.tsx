"use client";

import { Header } from "@/components/Forms/header"; // Adjust the path according to your project structure
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Social } from "./social";
import { BackButton } from "./back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backbuttonLabel: string;
  backbuttonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backbuttonLabel,
  backbuttonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card>
      <CardHeader className="space-y-2 text-center w-96">
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backbuttonLabel} href={backbuttonHref} />
      </CardFooter>
    </Card>
  );
};
