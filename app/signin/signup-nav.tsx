import { Container, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { IoBug } from "react-icons/io5";

const SignupNav = () => {
  return (
    <div className="bg-gray-200">
      <Container>
        <Flex align="center" className="h-16">
          <Link href="/">
            <IoBug className="text-2xl" />
          </Link>
        </Flex>
      </Container>
    </div>
  );
};

export default SignupNav;
