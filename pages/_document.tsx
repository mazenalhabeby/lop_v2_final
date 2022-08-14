import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="facebook-domain-verification"
            content="u5h4aw86ylzoqssxtqqgz7hsq72rsj"
          />
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-WEPC74HGWB"></Script>
          <Script src="/scripts/fb.js"></Script>
          <Script src="/scripts/Google.js"></Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{display: 'none'}}
              src="https://www.facebook.com/tr?id=654574859662239&ev=PageView&noscript=1"
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
