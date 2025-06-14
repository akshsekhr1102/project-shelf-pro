"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGithub, FaGoogle } from "react-icons/fa";

import { authClient } from "@/lib/auth-client";
import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form";
import { OctagonAlertIcon } from "lucide-react";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Password is required" }),
});

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setError(null);
    setPending(true);
    authClient.signIn.email(
      {
        email: data.email,
        password: data.password,
        callbackURL: "/",
      },
      {
        onSuccess: () => {
          setPending(false);
          router.push("/");
        },
        onError: ({ error }) => {
          setPending(false);
          setError(error.message);
        },
      }
    );
  };

  const onSocial = (provider: "google" | "github") => {
    setError(null);
    setPending(true);
    authClient.signIn.social(
      {
        provider: provider,
        callbackURL: "/",
      },
      {
        onSuccess: () => {
          setPending(false);
        },
        onError: ({ error }) => {
          setPending(false);
          setError(error.message);
        },
      }
    );
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
      <Card className="overflow-hidden p-0 w-full">
        <CardContent className="p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-3xl font-bold">Welcome back!</h1>
                <p className="text-muted-foreground text-center text-sm">
                  Simplify your workflow and boost your productivity.
                </p>
              </div>

              <div className="grid gap-4">
                <FormField
                                  control={form.control}
                                  name="email"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Input
                                          className="rounded-full py-6 px-4 border border-border"
                                          placeholder="Full Name"
                                          {...field}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="rounded-full py-6 px-4 border border-border"
                          placeholder="Password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {!!error && (
                <Alert className="bg-destructive/10 border-none">
                  <OctagonAlertIcon className="!text-destructive" />
                  <AlertTitle>{error}</AlertTitle>
                </Alert>
              )}

              <Button
                disabled={pending}
                type="submit"
                className="rounded-full w-full py-6"
              >
                {pending ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : "Login"}
              </Button>
              

              <div className="flex items-center gap-2">
                <span className="flex-grow border-t" />
                <span className="text-sm text-muted-foreground">or continue with</span>
                <span className="flex-grow border-t" />
              </div>

              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  type="button"
                  disabled={pending}
                  onClick={() => onSocial("google")}
                  className="rounded-full p-4"
                  aria-disabled={pending}
                >
                  <FaGoogle className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  disabled={pending}
                  onClick={() => onSocial("github")}
                  className="rounded-full p-4"
                  aria-disabled={pending}
                >
                  <FaGithub className="h-5 w-5" />
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="font-medium text-primary hover:underline">
                  Sign up
                </Link>
              </p>
            </form>
          </Form>
        </CardContent>
      </Card>

      <p className="text-center text-sm text-muted-foreground">
        By continuing, you agree to our{" "}
        <a href="#" className="hover:text-primary underline underline-offset-4">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="hover:text-primary underline underline-offset-4">
          Privacy Policy
        </a>
      </p>
    </div>
  );
}
