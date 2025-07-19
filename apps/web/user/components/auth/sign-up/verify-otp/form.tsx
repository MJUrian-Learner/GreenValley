"use client";

import { verifyOtpSchema } from "@/app/validation/auth/verify-otp.schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useSignUp } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { notFound } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function VerifyOtpForm({ signUpId }: { signUpId: string }) {
  const { isLoaded, signUp, setActive } = useSignUp();

  const form = useForm<z.infer<typeof verifyOtpSchema>>({
    resolver: zodResolver(verifyOtpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const { isSubmitting } = form.formState;

  if (isLoaded) {
    if (
      !signUp ||
      signUp.id !== signUpId ||
      signUp.status !== "missing_requirements"
    )
      return notFound();
  }

  const onSubmit = async (data: z.infer<typeof verifyOtpSchema>) => {
    if (!isLoaded) return;

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code: data.otp,
      });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
      } else {
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (e: unknown) {
      console.error(JSON.stringify(e, null, 2));
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium text-gray-700">
                One‑Time Password
              </FormLabel>
              <FormControl>
                <InputOTP
                  maxLength={6}
                  {...field}
                  className="space-x-2 justify-center"
                >
                  <InputOTPGroup className="flex justify-center space-x-2">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <InputOTPSlot
                        key={index}
                        index={index}
                        className="w-12 h-12 text-center rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200"
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription className="text-gray-500 text-sm">
                Please enter the one‑time password sent to your phone.
              </FormDescription>
              <FormMessage className="text-red-600 text-sm" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full py-3 bg-green-600 hover:bg-green-700 disabled:opacity-50 rounded-lg text-white font-semibold transition"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Verifying…" : "Verify OTP"}
        </Button>
      </form>
    </Form>
  );
}
