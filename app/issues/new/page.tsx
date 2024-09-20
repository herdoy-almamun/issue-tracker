"use client";
import dynamic from "next/dynamic";
const IssueFrom = dynamic(() => import("@/components/IssueFrom"), {
  ssr: false,
});

const NewIssue = () => {
  return (
    <div className="px-3">
      <IssueFrom />
    </div>
  );
};

export default NewIssue;
