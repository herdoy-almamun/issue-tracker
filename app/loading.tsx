import IssueCartSkeleton from "@/components/skeletons/IssueCart";
import IssueTableSkeleton from "@/components/skeletons/IssueTable";
import { Card, Container, Grid, Skeleton } from "@radix-ui/themes";
import Navbar from "./navbar";

const Loading = () => {
  return (
    <div>
      <Navbar />
      <Container className="px-4">
        <Grid columns={{ initial: "1", md: "2" }} gap="4" height="full">
          <div className="h-[300px] space-y-3 mb-[120px] md:mb-0">
            <Grid columns="3" gap="4" mb="2">
              <Card className="!flex flex-col gap-1 !border !border-red-500 text-red-500">
                <h1 className="text-md md:text-xl">Open</h1>
                <Skeleton className="h-6 w-10" />
              </Card>
              <Card className="!flex flex-col gap-1 !border !border-purple-500 text-purple-500">
                <h1 className="text-md md:text-xl">In Progress</h1>
                <Skeleton className="h-6 w-10" />
              </Card>
              <Card className="!flex flex-col gap-1 !border !border-green-500 text-green-500">
                <h1 className="text-md md:text-xl">Closed</h1>
                <Skeleton className="h-6 w-10" />
              </Card>
            </Grid>
            <IssueCartSkeleton />
          </div>
          <div className="h-full">
            <h1 className="text-2xl font-semibold mb-2">Latest Issues</h1>
            <IssueTableSkeleton />
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default Loading;
