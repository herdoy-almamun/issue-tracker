import IssueTable from "@/components/issue-table";
import prisma from "@/prisma/client";
import { Container, Grid } from "@radix-ui/themes";
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
    take: 5,
  });
  return (
    <Suspense>
      <Navbar />
      <Container className="px-4">
        <Grid columns={{ initial: "1", md: "2" }} gap="3">
          <div className="h-[340px]">
            <IssueChart open={open} inProgress={inProgress} closed={closed} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-2">Latest Issues</h1>
            <IssueTable issues={issues} />
          </div>
        </Grid>
      </Container>
    </Suspense>
  );
};

export default Home;
