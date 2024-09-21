import prisma from "@/prisma/client";
import { Button, Container } from "@radix-ui/themes";
import Link from "next/link";

const Issues = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <Container>
      <div className="space-y-5">
        <div>
          <Link href="/issues/new">
            <Button>Add Issue</Button>
          </Link>
        </div>
        <div>
          {issues.map((issue) => (
            <p key={issue.id}> {issue.title} </p>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Issues;
