import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { Resume } from "./Resume";
import { resumeSchema } from "./schema";

const sheet = new ServerStyleSheet();
export const render = (resume: unknown) => {
  try {
    const parsedResume = resumeSchema.parse(resume);
    const renderResult = renderToString(
      sheet.collectStyles(<Resume resume={parsedResume} />)
    );
    const styleTags = sheet.getStyleTags();
    const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    ${styleTags}
  </head>
  <body>${renderResult}</body>
</html>`;
    return html;
  } catch (e) {
    console.error(e);
  } finally {
    sheet.seal();
  }
};
