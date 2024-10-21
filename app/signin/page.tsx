"use client";
import AuthOptions from "@/components/auth-options";
import { useCurrentAuthPageStore } from "@/store";
import { loginSchema } from "@/utils/Auth";
import { UserInterface, userSchema } from "@/utils/User";
import { joiResolver } from "@hookform/resolvers/joi";
import { User } from "@prisma/client";
import {
  Button,
  Card,
  Container,
  Flex,
  Grid,
  TextField,
} from "@radix-ui/themes";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import SignInOptions from "./sign-in-options";
import SignupNav from "./signup-nav";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const current = useCurrentAuthPageStore((s) => s.current);
  const { status } = useSession();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInterface>({
    resolver: joiResolver(current === "Login" ? loginSchema : userSchema),
  });

  const onSubmit = handleSubmit((data) => {
    const { firstName, lastName, email, password } = data;
    if (current === "Signup") {
      axios
        .post<User>("/api/users", {
          name: `${firstName} ${lastName}`,
          email,
          password,
        })
        .then(() => {
          toast.success("Sign Up Success!");
          signIn("credentials", { email, password, callbackUrl: "/issues" });
        })
        .catch(() => toast.error("Something went worn!"));
    }
    if (current === "Login") {
      signIn("credentials", {
        email,
        password,
        callbackUrl: "/issues",
        redirect: false,
      }).then((res) => {
        if (res?.ok) {
          toast.success("Login Success!");
          router.push("/issues");
        }
        if (res?.error) {
          toast.error("Invalid username or password");
        }
      });
    }
  });

  if (status === "authenticated") return router.push("/");

  return (
    <>
      <SignupNav />
      <Container className="px-4 mt-10 md:mt-30">
        <Flex align="center" justify="center">
          <Card className="w-[450px] sm:mt-10">
            <SignInOptions />
            <form onSubmit={onSubmit} className="py-3 mt-5 space-y-3">
              {current === "Signup" && (
                <Grid columns="2" gap="2">
                  <div className="space-y-2">
                    <TextField.Root
                      {...register("firstName")}
                      placeholder="First Name"
                    />
                    {errors.firstName && (
                      <p className="text-red-400 text-[11px]">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <TextField.Root
                      {...register("lastName")}
                      placeholder="Last Name"
                    />
                    {errors.lastName && (
                      <p className="text-red-400 text-[11px]">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </Grid>
              )}
              <div className="space-y-2">
                <TextField.Root
                  {...register("email")}
                  placeholder="Email address"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <TextField.Root
                  {...register("password")}
                  type="password"
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-red-400 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <Button type="submit" className="!w-full">
                {" "}
                {current}{" "}
              </Button>
            </form>
            <AuthOptions />
          </Card>
        </Flex>
      </Container>
    </>
  );
};

export default SignIn;
