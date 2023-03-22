import { renderToString } from "react-dom/server";
import { Resume } from "./Resume";
import { resumeSchema } from "./schema";

export const render = (resume: unknown) => {
  const parsedResume = resumeSchema.parse(resume);
  return renderToString(<Resume resume={parsedResume} />);
};
