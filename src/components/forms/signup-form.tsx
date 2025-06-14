"use client"

import type React from "react"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Eye, EyeOff, Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"

// Zod schema
const signupSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    username: z.string().min(3, "Username must be at least 3 characters").max(20).regex(/^[a-zA-Z0-9_-]+$/, "Username can only contain letters, numbers, hyphens, and underscores"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one uppercase letter, one lowercase letter, and one number"),
    confirmPassword: z.string(),
    userType: z.enum(["designer", "developer", "writer"], { required_error: "Please select your profession" }),
    agreeToTerms: z.boolean().refine((val) => val === true, "You must agree to the terms and conditions"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

type SignupFormValues = z.infer<typeof signupSchema>

const userTypes = [
  { value: "designer", label: "Designer", icon: "🎨" },
  { value: "developer", label: "Developer", icon: "💻" },
  { value: "writer", label: "Writer", icon: "✍️" },
]

export function SignupForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [step, setStep] = useState(1)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      userType: undefined,
      agreeToTerms: false,
    },
  })

  const watchedPassword = form.watch("password")
  const watchedUsername = form.watch("username")

  const passwordRequirements = [
    { label: "At least 8 characters", met: watchedPassword?.length >= 8 },
    { label: "One uppercase letter", met: /[A-Z]/.test(watchedPassword || "") },
    { label: "One lowercase letter", met: /[a-z]/.test(watchedPassword || "") },
    { label: "One number", met: /\d/.test(watchedPassword || "") },
  ]

  const onSubmit = (data: SignupFormValues) => {
    setError(null)
    setPending(true)
    authClient.signUp.email(
      {
        name: data.fullName,
        email: data.email,
        password: data.password,
        callbackURL: "/",
      },
      {
        onSuccess: () => {
          setPending(false)
          router.push("/")
        },
        onError: ({ error }) => {
          setPending(false)
          setError(error?.message ?? "Something went wrong. Please try again.")
        },
      }
    )
  }

  const nextStep = async () => {
    const fieldsToValidate =
      step === 1 ? (["fullName", "username", "email"] as const) : (["password", "confirmPassword"] as const)
    const isValid = await form.trigger(fieldsToValidate)
    if (isValid) {
      setStep(step + 1)
    }
  }

  const prevStep = () => setStep(step - 1)

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Join ProjectShelf</h1>
        <p className="text-gray-600 text-base">Create your professional portfolio in minutes</p>
        <p className="text-gray-600 text-base">Showcase your work to the world with</p>
        <Image src="/logo.svg" alt="Logo" width={100} height={100} className="mx-auto" />
      </div>

      <div className="flex items-center justify-center gap-2">
        {[1, 2, 3].map((stepNumber) => (
          <div key={stepNumber} className="flex items-center">
            <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
              stepNumber <= step ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500")}>
              {stepNumber < step ? <Check className="w-4 h-4" /> : stepNumber}
            </div>
            {stepNumber < 3 && <div className={cn("w-8 h-0.5 mx-2 transition-colors", stepNumber < step ? "bg-blue-600" : "bg-gray-200")} />}
          </div>
        ))}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {step === 1 && (
            <div className="space-y-4 animate-in slide-in-from-right-5 duration-300">
              <FormField control={form.control} name="fullName" render={({ field }) => (
                <FormItem>
                  <FormControl><Input placeholder="Full Name" className="rounded-full py-6 px-4 border border-border" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="username" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input placeholder="Username" className="rounded-full py-6 px-4 border border-border" {...field} />
                      {watchedUsername && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500">
                          projectshelf.com/{watchedUsername}
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormControl><Input type="email" placeholder="Email Address" className="rounded-full py-6 px-4 border border-border" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <Button type="button" onClick={nextStep} className="rounded-full w-full py-6">Continue</Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-in slide-in-from-right-5 duration-300">
              <FormField control={form.control} name="password" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input type={showPassword ? "text" : "password"} placeholder="Password" className="rounded-full py-6 px-4 border border-border" {...field} />
                      <Button type="button" variant="ghost" size="sm" className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 p-0 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? (<EyeOff className="h-4 w-4 text-gray-500" />) : (<Eye className="h-4 w-4 text-gray-500" />)}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <div className="space-y-2">
                {passwordRequirements.map((req, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    {req.met ? <Check className="w-4 h-4 text-green-500" /> : <X className="w-4 h-4 text-gray-400" />}
                    <span className={req.met ? "text-green-600" : "text-gray-500"}>{req.label}</span>
                  </div>
                ))}
              </div>
              <FormField control={form.control} name="confirmPassword" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" className="rounded-full py-6 px-4 border border-border" {...field} />
                      <Button type="button" variant="ghost" size="sm" className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 p-0 hover:bg-transparent"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {showConfirmPassword ? (<EyeOff className="h-4 w-4 text-gray-500" />) : (<Eye className="h-4 w-4 text-gray-500" />)}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <div className="flex gap-
3">
<Button type="button" variant="outline" onClick={prevStep} className="rounded-full flex-1 py-6">Back</Button>
<Button type="button" onClick={nextStep} className="rounded-full flex-1 py-6">Continue</Button>
</div>
</div>
)}      {step === 3 && (
  <div className="space-y-6 animate-in slide-in-from-right-5 duration-300">
    <div>
      <label className="text-sm font-medium text-gray-700 mb-3 block">What best describes you?</label>
      <FormField control={form.control} name="userType" render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="grid grid-cols-1 gap-3">
              {userTypes.map((type) => (
                <label key={type.value} className={cn("flex items-center gap-3 p-4 rounded-full border-2 cursor-pointer transition-all",
                  field.value === type.value ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-gray-300")}>
                  <input type="radio" value={type.value} checked={field.value === type.value} onChange={field.onChange} className="sr-only" />
                  <span className="text-2xl">{type.icon}</span>
                  <span className="font-medium text-gray-900">{type.label}</span>
                  {field.value === type.value && <Check className="w-5 h-5 text-blue-600 ml-auto" />}
                </label>
              ))}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
    </div>

    <FormField control={form.control} name="agreeToTerms" render={({ field }) => (
      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
        <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl>
        <div className="space-y-1 leading-none">
          <label className="text-sm text-gray-700">
            I agree to the{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 underline">Terms of Service</a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</a>
          </label>
          <FormMessage />
        </div>
      </FormItem>
    )} />

    {error && (
      <div className="rounded-lg bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
        {error}
      </div>
    )}

    <div className="flex gap-3">
      <Button type="button" variant="outline" onClick={prevStep} className="rounded-full flex-1 py-6" disabled={pending}>Back</Button>
      <Button type="submit" className="rounded-full flex-1 py-6" disabled={pending}>
        {pending ? (
          <div className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
            Creating...
          </div>
        ) : "Create Account"}
      </Button>
    </div>
  </div>
)}
</form>
</Form>

<div className="text-center text-sm text-gray-600">
Already have an account?{" "}
<a href="#" className="text-blue-600 hover:text-blue-700 underline font-medium">Sign in</a>
</div>
</div>
  )}