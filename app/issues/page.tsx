import IssueTable from "@/components/issue-table";
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
          <IssueTable issues={issues} />
        </div>
      </div>
    </Container>
  );
};

export default Issues;
