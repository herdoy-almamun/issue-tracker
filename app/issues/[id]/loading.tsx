import { Card, Container, Flex, Grid, Skeleton } from "@radix-ui/themes";

const Loading = () => {
  return (
    <Container>
      <Grid columns={{ initial: "1", md: "1fr 200px" }} gap="4">
        <div>
          <div className="mb-3">
            <Skeleton height="20px" />
            <Flex align="center" gap="3" mt="2">
              <Skeleton width="60px" height="25px" />
              <Skeleton width="60px" height="25px" />
            </Flex>
          </div>
          <Card>
            <div className="space-y-4">
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </div>
          </Card>
        </div>
        <Flex direction="column" gap="3">
          <Skeleton height="30px" />
          <Skeleton height="30px" />
          <Skeleton height="30px" />
        </Flex>
      </Grid>
    </Container>
  );
};

export default Loading;
