import { Button, Container } from "@radix-ui/themes";
import Link from "next/link";

const Issues = () => {
  return (
    <Container>
      <div className="space-y-5">
        <div>
          <Link href="/issues/new">
            <Button>Add Issue</Button>
          </Link>
        </div>
        <div>
          <p>Issues....</p>
        </div>
      </div>
    </Container>
  );
};

export default Issues;
