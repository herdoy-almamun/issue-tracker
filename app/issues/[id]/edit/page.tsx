import InvalidIssueId from "@/components/invalid-issue-id";
import prisma from "@/prisma/client";
import dynamic from "next/dynamic";
const IssueFrom = dynamic(() => import("@/components/issue-from"), {
  ssr: false,
});

interface Props {
  params: {
    id: string;
  };
}

const NewIssue = async ({ params }: Props) => {
  try {
    const issue = await prisma.issue.findUnique({ where: { id: params.id } });
    if (issue)
      return (
        <div className="px-3">
          <IssueFrom issue={issue} />
        </div>
      );
  } catch (error) {
    return <InvalidIssueId />;
  }
};

export default NewIssue;
