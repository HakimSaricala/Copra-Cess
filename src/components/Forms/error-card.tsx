import { FaExclamationTriangle } from "react-icons/fa";

import { CardWrapper } from "@/components/Forms/Cardwrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backbuttonHref="/login"
      backbuttonLabel="Back to login"
    >
      <div className="w-full flex justify-center items-center">
        <FaExclamationTriangle className="text-destructive" />
      </div>
    </CardWrapper>
  );
};
