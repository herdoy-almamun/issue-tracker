"use client";

import { useCurrentAuthPageStore } from "@/store";
import { Button, Grid } from "@radix-ui/themes";

const SignInOptions = () => {
  const { current, setCurrentAuthPage } = useCurrentAuthPageStore();
  return (
    <>
      <h1 className="text-2xl font-semibold text-center pb-3">
        {current} Form
      </h1>
      <Grid columns="2" gap="4">
        <Button
          onClick={() => setCurrentAuthPage("Login")}
          variant={current === "Login" ? "solid" : "soft"}
        >
          Log In
        </Button>
        <Button
          variant={current === "Signup" ? "solid" : "soft"}
          onClick={() => setCurrentAuthPage("Signup")}
        >
          Create Account
        </Button>
      </Grid>
    </>
  );
};

export default SignInOptions;
