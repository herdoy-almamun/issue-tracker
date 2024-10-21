import IssueTable from "@/components/issue-table";
import prisma from "@/prisma/client";
import { Card, Container, Grid } from "@radix-ui/themes";
import { Suspense } from "react";
import IssueChart from "./issue-chart";
import Navbar from "./navbar";

const Home = async () => {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 7,
  });
  return (
    <Suspense>
      <Navbar />
      <Container className="px-4">
        <Grid columns={{ initial: "1", md: "2" }} gap="4" height="full">
          <div className="h-[300px] space-y-3 mb-[120px] md:mb-0">
            <Grid columns="3" gap="4">
              <Card className="!flex flex-col gap-1 !border !border-red-500 text-red-500">
                <span className="text-xl">Open</span>
                <span className="text-2xl">{open}</span>
              </Card>
              <Card className="!flex flex-col gap-1 !border !border-purple-500 text-purple-500">
                <span className="text-xl">In Progress</span>
                <span className="text-2xl">{open}</span>
              </Card>
              <Card className="!flex flex-col gap-1 !border !border-green-500 text-green-500">
                <span className="text-xl">Closed</span>
                <span className="text-2xl">{open}</span>
              </Card>
            </Grid>
            <IssueChart open={open} inProgress={inProgress} closed={closed} />
          </div>
          <div className="h-full">
            <h1 className="text-2xl font-semibold mb-2">Latest Issues</h1>
            <IssueTable issues={issues} />
          </div>
        </Grid>
      </Container>
    </Suspense>
  );
};

export default Home;
