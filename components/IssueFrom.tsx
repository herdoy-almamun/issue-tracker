"use client";
import { IssueInterface, issueSchema } from "@/utils/Issue";
import { joiResolver } from "@hookform/resolvers/joi";
import { Issue } from "@prisma/client";
import { Button, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";

interface Props {
  issue?: Issue;
}

const IssueFrom = ({ issue }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IssueInterface>({
    resolver: joiResolver(issueSchema),
    defaultValues: {
      title: issue?.title,
      description: issue?.description,
    },
  });

  return (
    <div className="flex items-center justify-center">
      <div className="w-full lg:w-6/12 p-4 border rounded-3xl">
        <h1 className="pb-3 text-center text-xl font-semibold">
          {issue ? "Update Issue" : "Add Issue"}
        </h1>
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="w-full space-y-5"
        >
          <div className="space-y-2">
            <TextField.Root {...register("title")} placeholder="Title" />
            {errors.title && (
              <p className="text-red-400"> {errors.title.message} </p>
            )}
          </div>
          <div className="space-y-2">
            <Controller
              name="description"
              control={control}
              render={({ field }) => <SimpleMDE {...field} />}
            />
            {errors.description && (
              <p className="text-red-400"> {errors.description.message} </p>
            )}
          </div>
          <Button className="!w-full"> {issue ? "Update" : "Submit"} </Button>
        </form>
      </div>
    </div>
  );
};

export default IssueFrom;
