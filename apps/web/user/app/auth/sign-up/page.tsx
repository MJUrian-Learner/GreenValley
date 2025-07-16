import SignUpForm from "@/components/auth/sign-up/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function SignIn() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">
          Create Your Account
        </CardTitle>
        <CardDescription>
          Join our community and start booking facilities to your liking
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <Button variant="outline" className="w-full">
            <div className="relative h-4 w-4">
              <Image src="/google.svg" alt="Google Icon" fill />
            </div>
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full bg-primary">
            <div className="relative h-4 w-4">
              <Image src="/fb.svg" alt="Google Icon" fill />
            </div>
            Continue with Facebook
          </Button>
        </div>
        <div className="flex items-center gap-4 my-7">
          <Separator className="flex-1 border-1" />
          <span className="text-sm text-muted-foreground">
            OR CREATE ACCOUNT WITH EMAIL
          </span>
          <Separator className="flex-1 border-1" />
        </div>
        <SignUpForm />
      </CardContent>
    </Card>
  );
}
