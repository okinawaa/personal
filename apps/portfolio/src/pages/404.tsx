import { Link } from "gatsby";
import { Button, Seo } from "~/components/Common";
import { AppLayout } from "~/components/Layout";
import { FlexCenter, Image, Header1 } from "~/constants";

const NotFoundPage = () => {
  return (
    <AppLayout isFooter={false}>
      <Seo title="잘못된 페이지" />
      <FlexCenter _direction="column" selfAlignRowCenter fullWidth>
        <Image
          src="/404.png"
          alt="404 NOT FOUND"
          _width={850}
          _height={850}
          moWidth={300}
          moHeight={300}
        />
        <Link to="/">
          <Button>
            <Header1 moFontSize={24}>메인 페이지 방문</Header1>
          </Button>
        </Link>
      </FlexCenter>
    </AppLayout>
  );
};

export default NotFoundPage;
