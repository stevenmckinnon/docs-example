import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const banner = (
  <Banner storageKey="some-key">
    <div className="flex items-center gap-2 justify-center">
      V2.0 is here! <span>🎉</span>
      {"  "}
      <Link href="https://www.nextra.com" target="_blank" className="underline">
        Learn more about the changes
      </Link>
    </div>
  </Banner>
);
const navbar = (
  <Navbar
    logo={<b>My Docs App</b>}
    logoLink="/"
    className="bg-white dark:bg-gray-900 py-0 px-0 w-full"
    // ... Your additional navbar options
  />
);
const footer = <Footer>MIT {new Date().getFullYear()} © McKinnon.</Footer>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          darkMode={false}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
