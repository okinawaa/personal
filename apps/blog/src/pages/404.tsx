import * as React from "react";
import { Link } from "gatsby";
import "../styles/pages/404.scss";
import { Seo } from "~/components/Common";
import { AppLayout } from "~/components/Layout";

const NotFoundPage = () => {
  return (
    <AppLayout>
      <Seo title="잘못된 페이지" />
      <div className="error-404-page-wrapper">
        <img className="image" src="/404.png" alt="404 NOT FOUND" />
        <Link className="link-to-home" to="/">
          홈으로
        </Link>
      </div>
    </AppLayout>
  );
};

export default NotFoundPage;
