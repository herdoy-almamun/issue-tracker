import Joi from "joi";

export const issueSchema = Joi.object({
  title: Joi.string().min(1).max(255).required().label("Title"),
  description: Joi.string().min(1).max(10000).required().label("Description"),
});

export interface IssueInterface {
  title: string;
  description: string;
}

export const validateIssue = (issue: IssueInterface) => {
  return issueSchema.validate(issue);
};
