import { UserInfo } from "@/components/Forms/user-info";
import { currentUser } from "@/lib/auth";
import React from "react";

const Profile = async () => {
  const user = await currentUser();
  return (
    <div className="flex justify-center align-middle">
      <UserInfo user={user} label="💻 Server component" />
    </div>
  );
};

export default Profile;
