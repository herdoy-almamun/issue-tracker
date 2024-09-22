"use client";
import AuthOptions from "@/components/auth-options";
import { useCurrentAuthPageStore } from "@/store";
import { loginSchema } from "@/utils/Auth";
import { UserInterface, userSchema } from "@/utils/User";
import { joiResolver } from "@hookform/resolvers/joi";
import {
  Button,
  Card,
  Container,
  Flex,
  Grid,
  TextField,
} from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import SignInOptions from "./sign-in-options";
import SignupNav from "./signup-nav";

const SignIn = () => {
  const current = useCurrentAuthPageStore((s) => s.current);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInterface>({
    resolver: joiResolver(current === "Login" ? loginSchema : userSchema),
  });

  return (
    <>
      <SignupNav />
      <Container>
        <Flex align="center" justify="center" className="h-[calc(100vh-64px)]">
          <Card className="w-[450px]">
            <SignInOptions />
            <form
              onSubmit={handleSubmit((data) => console.log(data))}
              className="py-3 mt-5 space-y-3"
            >
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
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-red-400 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <Button className="!w-full"> {current} </Button>
            </form>
            <AuthOptions />
          </Card>
        </Flex>
      </Container>
    </>
  );
};

export default SignIn;
