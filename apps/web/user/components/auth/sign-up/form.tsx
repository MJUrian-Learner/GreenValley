"use client";

import { signUpSchema } from "@/app/schemas/auth/sign-in.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { PasswordInput } from "@/components/ui/passsword-input";
import { Checkbox } from "@/components/ui/checkbox";

function SignUpForm() {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      isTermsAccepted: false,
    },
  });

  const onSubmit = (data: z.infer<typeof signUpSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="m@example.com" {...field} />
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput
                  id={field.name}
                  placeholder="********"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <PasswordInput
                  id={field.name}
                  placeholder="********"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isTermsAccepted"
          render={({ field }) => (
            <FormItem>
              <div className="flex space-x-1 items-start">
                <FormControl>
                  <Checkbox
                    
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>

                <div className="font-light text-sm">
                  <p className="text-justify leading-none">
                    By selecting <span className="font-semibold">Sign Up</span>,
                    you are confirming that you have read and agree to our{" "}
                    <Link href="/terms-and-conditions" className="text-primary">
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" className="text-primary">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>
              <FormMessage className="mt-1" />
            </FormItem>
          )}
        />
        <div className="space-y-2">
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-primary">
              Sign in here
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
}

export default SignUpForm;
