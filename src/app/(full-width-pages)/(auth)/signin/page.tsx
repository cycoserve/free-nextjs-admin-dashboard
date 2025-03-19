import { SignIn } from "@stackframe/stack";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js SignIn Page | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Signin Page TailAdmin Dashboard Template",
};

export default function CustomSignInPage() {
  return( 
  <>
  <div className="min-h-screen flex flex-1 justify-center items-center w-full px-4">
      <SignIn fullPage />
  </div>
  </>
  );
}
