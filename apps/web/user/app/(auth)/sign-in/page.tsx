import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
        <CardDescription>
          Sign in to your account to manage your facility reservations
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
            OR CONTINUE WITH EMAIL
          </span>
          <Separator className="flex-1 border-1" />
        </div>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Sign In
        </Button>
        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-primary">
            Create one here
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
