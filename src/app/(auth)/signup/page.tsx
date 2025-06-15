import { redirect } from "next/navigation";
import { headers } from "next/headers";

import { auth } from "@/lib/auth";
import { SignupForm } from "@/components/forms/signup-form";


export default async function SignUp() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) {
    redirect("/");
  }
  return <SignupForm />;
}
