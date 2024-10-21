import { client } from "@/app/query-client-provider";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const useAssignIssue = (issueId: string) => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["assign"],
    mutationFn: (email: string) =>
      axios.put(`/api/issues/${issueId}`, { email }).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["users"] });
      toast.success("Successfullyy Assigned");
      router.refresh();
    },
    onSettled: () => client.invalidateQueries({ queryKey: ["users"] }),
  });
};

export default useAssignIssue;
