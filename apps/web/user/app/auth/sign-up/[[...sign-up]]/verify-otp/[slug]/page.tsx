"use server";

import VerifyOtpForm from "@/components/auth/sign-up/verify-otp/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function VerifyOtp({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: signUpId } = await params;

  return (
    <Card className="w-full max-w-md mx-auto bg-white p-8 shadow-lg rounded-xl">
      <CardHeader className="text-center space-y-2 mb-6">
        <CardTitle className="text-3xl font-semibold">
          Verify Your Email
        </CardTitle>
        <CardDescription className="text-gray-600 text-sm">
          We’ve sent a 6‑digit verification code to your email address
        </CardDescription>
      </CardHeader>

      <CardContent className="px-4">
        <VerifyOtpForm signUpId={signUpId} />

        <div className="mt-6 text-center space-y-4">
          <p className="text-sm text-gray-500">
            Didn’t receive the code?{" "}
            <Button
              variant="link"
              className="p-0 h-auto text-sm font-medium hover:underline"
            >
              Resend code
            </Button>
          </p>

          <div className="flex justify-center">
            <Link href="/auth/sign-up">
              <Button variant="ghost" size="sm" className="gap-2 font-medium">
                <ArrowLeft className="h-4 w-4" />
                Back to sign up
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
