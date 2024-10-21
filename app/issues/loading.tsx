import IssueTableSkeleton from "@/components/skeletons/IssueTable";
import { Container } from "@radix-ui/themes";

const Loading = () => {
  return (
    <Container className="px-4">
      <IssueTableSkeleton />;
    </Container>
  );
};

export default Loading;
