import { auth, signOut } from "@/auth";
import React from "react";

const dashboard = async () => {
  const user = await auth();

  return (
    <div>
      Dashboard
      {JSON.stringify(user)}
      <form
        action={async () => {
          "use server";
          await signOut({
            redirectTo: "/login",
          });
        }}
      >
        <button type="submit">Logout</button>
      </form>
    </div>
  );
};

export default dashboard;
