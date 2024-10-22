import prisma from "@/prisma/client";
import { Container, Grid } from "@radix-ui/themes";
import { Suspense } from "react";
import IssueChart from "./issue-chart";
import IssueSummary from "./issue-summary";
import LatestIssues from "./latestIssues";
import Navbar from "./navbar";

const Home = async () => {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });

  return (
    <Suspense>
      <Navbar />
      <Container className="px-4 !pb-10">
        <Grid columns={{ initial: "1", md: "2" }} gap="4" height="full">
          <div className="h-[300px] space-y-3 mb-[120px] md:mb-0">
            <IssueSummary open={open} closed={closed} inProgress={inProgress} />
            <IssueChart open={open} inProgress={inProgress} closed={closed} />
          </div>
          <div className="h-full">
            <h1 className="text-2xl font-semibold mb-2">Latest Issues</h1>
            <LatestIssues />
          </div>
        </Grid>
      </Container>
    </Suspense>
  );
};

export default Home;

export const dynamic = "force-dynamic";
