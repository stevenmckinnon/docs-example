import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "@/mdx-components";

export const generateStaticParams = generateStaticParamsFor("slug");

export async function generateMetadata(props: any) {
  const params = await props.params;
  const { metadata } = await importPage(params.slug);
  return metadata;
}

const Wrapper = getMDXComponents().wrapper;

export default async function MDXPage(props: any) {
  const params = await props.params;
  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode,
  } = await importPage(params.slug);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
          <MDXContent {...props} params={params} />
        </Wrapper>
      </div>
    </div>
  );
}
