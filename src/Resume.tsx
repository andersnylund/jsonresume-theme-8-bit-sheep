import { z } from "zod";
import { resumeSchema } from "./schema";

interface Props {
  resume: z.infer<typeof resumeSchema>;
}

export const Resume = ({ resume }: Props) => {
  return <h1>{resume.basics?.name}</h1>;
};
