import { Button, Grid } from "@radix-ui/themes";
import { FcGoogle } from "react-icons/fc";

const AuthOptions = () => {
  return (
    <div>
      <Grid columns="1fr 20px 1fr" align="center" gap="2">
        <div className="h-[1px] bg-gray-300" />
        <p className="text-center">or</p>
        <div className="h-[1px] bg-gray-300" />
      </Grid>
      <Button variant="soft" className="!w-full !mt-3">
        <FcGoogle className="text-xl mr-1" /> Continue with Google
      </Button>
    </div>
  );
};

export default AuthOptions;
