import React from "react";
import styled from "styled-components";
import { z } from "zod";
import { GlobalStyle } from "./GlobalStyles";
import { resumeSchema } from "./schema";

interface Props {
  resume: z.infer<typeof resumeSchema>;
}

export const Resume = ({ resume }: Props) => {
  return (
    <>
      <GlobalStyle />
      <Layout></Layout>
    </>
  );
};

const Layout = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 794px;
`;
