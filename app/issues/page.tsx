import IssueTable from "@/components/issue-table";
import Pagination from "@/components/pagination";
import prisma from "@/prisma/client";
import { Button, Container } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
  searchParams: {
    page: string;
  };
}

const Issues = async ({ searchParams }: Props) => {
  const page = parseInt(searchParams.page) || 1;
  const pageSize = 5;
  const issues = await prisma.issue.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
  const issueCount = await prisma.issue.count();
  return (
    <Container>
      <div className="space-y-5 pb-6">
        <div>
          <Link href="/issues/new">
            <Button>Add Issue</Button>
          </Link>
        </div>
        <div className="space-y-4">
          <IssueTable issues={issues} />
          <Pagination
            itemsCount={issueCount}
            pageSize={pageSize}
            currentPage={page}
          />
        </div>
      </div>
    </Container>
  );
};

export default Issues;
