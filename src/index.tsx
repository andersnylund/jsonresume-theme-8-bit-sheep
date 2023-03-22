import { renderToString } from "react-dom/server";
import { Layout } from "./Layout";

export const render = (resume: any) => renderToString(<Layout />);
