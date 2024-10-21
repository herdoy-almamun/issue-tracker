import IssueTableSkeleton from "@/components/skeletons/IssueTable";
import { Button, Container, Skeleton } from "@radix-ui/themes";
import Link from "next/link";

const Loading = () => {
  return (
    <Container className="px-4">
      <div className="flex items-center justify-between mb-4">
        <Skeleton height="30px" width="80px" />
        <Link href="/issues/new">
          <Button>Add Issue</Button>
        </Link>
      </div>
      <IssueTableSkeleton />;
    </Container>
  );
};

export default Loading;
