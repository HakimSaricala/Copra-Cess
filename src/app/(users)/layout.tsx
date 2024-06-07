// import Sidebar from "@/components/sidebar";
import Header from "@/components/mobile-header/header";
import Sidebar from "@/components/sidebar";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <SessionProvider>
          <main className="flex-1 overflow-hidden pt-16">{children}</main>
        </SessionProvider>
      </div>
    </>
  );
};

export default ProtectedLayout;
