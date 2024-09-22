import { Button, Dialog, Flex } from "@radix-ui/themes";
import { AiOutlineDelete } from "react-icons/ai";

interface Props {
  issueId: string;
}

const IssueDeleteDialog = ({ issueId }: Props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button color="red">
          <AiOutlineDelete className="text-xl" /> Delete Issue
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Delete Issue</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Are your sure yout want to delete this issue? This action cannot be
          undone.
        </Dialog.Description>
        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button color="red">Delete</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default IssueDeleteDialog;
