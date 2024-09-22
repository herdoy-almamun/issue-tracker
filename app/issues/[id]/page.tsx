import IssueStatusBadeg from "@/components/issue-status-badeg";
import prisma from "@/prisma/client";
import { Button, Card, Container, Flex, Grid } from "@radix-ui/themes";
import { AiOutlineDelete } from "react-icons/ai";
import { LiaEdit } from "react-icons/lia";

interface Props {
  params: {
    id: string;
  };
}

const IssueDetails = async ({ params }: Props) => {
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
              <span className="text-sm">{issue.createdAt.toDateString()}</span>
            </Flex>
          </div>
          <Card>{issue.description}</Card>
        </div>
        <Flex direction="column" gap="3">
          <Button>Assign to user</Button>
          <Button variant="surface">
            <LiaEdit className="text-xl" />
            Edit Issue
          </Button>
          <Button color="red">
            <AiOutlineDelete className="text-xl" /> Delete Issue
          </Button>
        </Flex>
      </Grid>
    </Container>
  );
};

export default IssueDetails;
