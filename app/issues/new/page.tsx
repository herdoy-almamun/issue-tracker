"use client";
import dynamic from "next/dynamic";
const IssueFrom = dynamic(() => import("@/components/IssueFrom"), {
  ssr: false,
});

const NewIssue = () => {
  return (
    <div>
      <IssueFrom />
    </div>
  );
};

export default NewIssue;
