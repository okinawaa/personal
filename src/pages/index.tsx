import * as Styled from "@pageStyle/index.style";

import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MainContentSection from "~/components/Main/MainContentSection/MainContentSection";
import SkillSection from "~/components/Main/SkillSection/SkillSection";

const Main: NextPage = () => {
  const { t } = useTranslation("main");

  return (
    <Styled.Container>
      <MainContentSection />
      <SkillSection />
    </Styled.Container>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "main"]))
    }
  };
}

export default Main;
