import React from "react";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Link from "next/link";

const SignUpForm = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center">Create an account</h1>
      <p className="text-sm text-muted-foreground text-center mb-6">
        Enter your email below to create your account
      </p>

      <div className="flex justify-between gap-4 mb-4">
        <Button variant="outline" className="flex-1">
          <Github className="mr-2 h-5 w-5" /> GitHub
        </Button>
        <Button variant="outline" className="flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
              fill="currentColor"
            />
          </svg>{" "}
          Google
        </Button>
      </div>

      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
        <span className="relative z-10 bg-background px-2 text-muted-foreground">
          Or continue with
        </span>
      </div>

      <form className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="first_name">First name</Label>
          <Input
            id="first_name"
            type="first_name"
            placeholder="John"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="last_name">Last name</Label>
          <Input id="last_name" type="last_name" placeholder="Doe" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Create account
        </Button>
      </form>
      <div className="text-center text-sm mt-6">
        Already have an account?{" "}
        <Link href="/login" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
