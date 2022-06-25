import * as Images from "@images/main";
import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PImage from "~/components/Common/NImage/PImage";

const Home: NextPage = () => {
  const { t } = useTranslation("home");

  return (
    <div>
      <span>{t("home_test")}</span>
      <PImage src={Images.profile} alt="박찬혁 프로필사진" />
    </div>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"]))
      // Will be passed to the page component as props
    }
  };
}

export default Home;
