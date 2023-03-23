import React from "react";
import styled from "styled-components";
import { z } from "zod";
import { resumeSchema } from "./schema";

interface Props {
  resume: z.infer<typeof resumeSchema>;
}

export const Resume = ({ resume }: Props) => {
  return (
    <Container>
      <StyledH1>{resume.basics?.name}</StyledH1>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const StyledH1 = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
