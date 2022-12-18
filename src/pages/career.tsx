import { PageProps } from "gatsby";
import React from "react";
import { AppLayout } from "~/components/Layout";
import { Body2 } from "~/constants";
import { careers } from "~/data";

type ElementType<T extends readonly unknown[]> = T[number];

interface PageContext {
  id: ElementType<typeof careers>["id"];
}

const Career = ({ pageContext }: PageProps<{}, PageContext>) => {
  const { id } = pageContext;
  const career = careers.find(career => career.id === id);

  if (!career) return <div>다시 시도해볼까요?</div>;

  return <AppLayout>
    <Body2 >{career.title}에서의 기록</Body2>
  </AppLayout>;
};

export default Career;
