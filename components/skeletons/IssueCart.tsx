import { Grid, Skeleton } from "@radix-ui/themes";

const IssueCartSkeleton = () => {
  return (
    <Grid columns="3" gap="8" px="3" pb="3" className="border-l border-b">
      <Skeleton height="250px" />
      <Skeleton height="250px" />
      <Skeleton height="250px" />
    </Grid>
  );
};

export default IssueCartSkeleton;
