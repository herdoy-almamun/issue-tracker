import { Button, Container } from "@radix-ui/themes";

const Issues = () => {
  return (
    <Container>
      <div className="space-y-5">
        <div>
          <Button>Add Issue</Button>
        </div>
        <div>
          <p>Issues....</p>
        </div>
      </div>
    </Container>
  );
};

export default Issues;
