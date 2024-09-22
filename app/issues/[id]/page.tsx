import InvalidIssueId from "@/components/invalid-issue-id";
import IssueStatusBadeg from "@/components/issue-status-badeg";
import prisma from "@/prisma/client";
import { Button, Card, Container, Flex, Grid } from "@radix-ui/themes";
import Link from "next/link";
import { AiOutlineDelete } from "react-icons/ai";
import { LiaEdit } from "react-icons/lia";
import IssueDeleteDialog from "./issue-delete-dialog";

interface Props {
  params: {
    id: string;
  };
}

const IssueDetails = async ({ params }: Props) => {
  try {
    const issue = await prisma.issue.findUnique({ where: { id: params.id } });
    if (!issue) return null;
    return (
      <Container>
        <Grid columns={{ initial: "1", md: "1fr 200px" }} gap="4">
          <div>
            <div className="mb-3">
              <h2 className="text-2xl"> {issue.title} </h2>
              <Flex align="center" gap="3" mt="2">
                <IssueStatusBadeg status={issue.status} />
                <span className="text-sm">
                  {issue.createdAt.toDateString()}
                </span>
              </Flex>
            </div>
            <Card>{issue.description}</Card>
          </div>
          <Flex direction="column" gap="3">
            <Button>Assign to user</Button>
            <Button variant="surface">
              <Link
                href={`/issues/${issue.id}/new`}
                className="flex items-center"
              >
                <LiaEdit className="text-xl" />
                Edit Issue
              </Link>
            </Button>
            <IssueDeleteDialog issueId={issue.id} />
          </Flex>
        </Grid>
      </Container>
    );
  } catch (error) {
    return <InvalidIssueId />;
  }
};

export default IssueDetails;
