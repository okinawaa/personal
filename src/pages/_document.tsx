import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from "next/document";
import { ReactElement } from "react";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";

type DocumentPropTypes = {
  // using `interface` is also ok
  styleTags: ReactElement;
  pathname: string;
};

export default class MyDocument extends Document<DocumentPropTypes> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const { styleTags } = this.props;
    return (
      <Html>
        <Head>
          {/* favicon */}
          <link rel="icon" href="/favicon.ico" />

          {/* Step 5: Output the styles in the head  */}
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
