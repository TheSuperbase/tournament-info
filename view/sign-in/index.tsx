"use client";

import SignInForm from "@/feature/sign-in/SignInForm";
import { AlertProvider } from "@/shared/providers/alertProvider";
import Title from "@/widget/home/title";

function SignInPage() {
  return (
    <div>
      <Title />
      <AlertProvider>
        <SignInForm />
      </AlertProvider>
    </div>
  );
}

export default SignInPage;
