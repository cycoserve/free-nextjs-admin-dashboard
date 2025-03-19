import { SignUp } from "@stackframe/stack";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js SignUp Page | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js SignUp Page TailAdmin Dashboard Template",
  // other metadata
};

export default function CustomSignUpPage() {
  return (
  <>
  <div className="min-h-screen flex flex-1 justify-center items-center w-full">
      <SignUp fullPage />
  </div>
  </>

  );
}
