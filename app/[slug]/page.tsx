import { getEntryBySlug, createContentClient } from "../utils/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Accordion } from "../components/Accordion";
import { AccordionProjectItem } from "../components/AccordionProjectItem";
import { Breadcrumb } from "../components/Breadcrumb";
import Image from "next/image";
import { WideCover } from "../components/WideCover";

const client = createContentClient();

// Generate static paths for projects
export async function generateStaticParams() {
  const queryOptions = {
    content_type: "projects",
    select: "fields.projectSlug",
  };

  // Fetch projects
  const projects = await client.getEntries(queryOptions);

  return projects.items.map((project) => ({
    slug: project.fields.projectSlug,
  }));
}

const renderOptions = {
  renderNode: {
    // @ts-ignore
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="text-base font-light mb-2">{children}</p>;
    },
    // @ts-ignore
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h1 className="text-base mb-3">{children}</h1>;
    },
    // @ts-ignore
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 className="text-base mb-3">{children}</h2>;
    },
    // @ts-ignore
    [BLOCKS.UL_LIST]: (node, children) => {
      return (
        <ul className="list-disc list-outside pl-5 sm:pl-10 mb-2">
          {children}
        </ul>
      );
    },
    // @ts-ignore
    [BLOCKS.OL_LIST]: (node, children) => {
      return (
        <ol className="list-decimal list-outside pl-5 sm:pl-10 mb-2">
          {children}
        </ol>
      );
    },
    // @ts-ignore
    [BLOCKS.LIST_ITEM]: (node, children) => {
      return <li className="mb-1">{children}</li>;
    },
    // @ts-ignore
    [BLOCKS.QUOTE]: (node, children) => {
      return (
        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-700 mb-4">
          {children}
        </blockquote>
      );
    },
    // @ts-ignore
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a
          href={node.data.uri}
          className="text-blue-600 underline hover:text-blue-800"
        >
          {children}
        </a>
      );
    },
  },
};

// @ts-ignore
export default async function ProjectPage(props) {
  const { params } = props;
  const { slug } = params;

  const project = await getEntryBySlug(slug, "projects");

  const {
    projectTitle,
    projectDescription,
    projectWideCover,
    projectVideoCover,
    projectContents,
  } = project.fields;

  return (
    <div className="max-w-[1880px] mx-auto">
      <Header />
      <main className="px-4 sm:px-4 sm:mb-8">
        <Breadcrumb />

        <section className="max-w-6xl mx-auto mb-4">
          {/* <h3>{projectTitle}</h3> */}
          <h1 className="flex flex-col sm:gap-2 sm:place-self-center text-2xl sm:text-4xl font-serif text-[#888] sm:leading-[52px]">
            {/* @ts-ignore */}
            {projectDescription}
          </h1>
        </section>

        {projectWideCover && (
          <div className="relative aspect-project-cover mb-8">
            <Image
              // @ts-ignore
              src={`https:${projectWideCover.fields.file.url}`}
              // @ts-ignore
              alt={projectTitle}
              fill={true}
              className="rounded-3xl"
            />
          </div>
        )}

        <section className="">
          <div className="">
            <div className="max-w-5xl sm:ml-40">
              <h1 className="text-2xl sm:text-3xl font-serif italic text-zinc-600 sm:leading-[52px]">
                Project context
              </h1>
            </div>
            <div className="justify-center bg-gray-100 mb-16">
              <Accordion>
                {/* @ts-ignore */}
                {projectContents?.map((contentItem, index) => (
                  // @ts-ignore
                  <AccordionProjectItem
                    key={index}
                    title={contentItem.fields.projectContentItemTitle}
                  >
                    {/* Render Normal Cover */}
                    {contentItem.fields.normalCover && (
                      <div className="">
                        <img
                          src={`https:${contentItem.fields.normalCover.fields.file.url}`}
                          alt="Normal Cover"
                          className="mb-4"
                        />
                      </div>
                    )}

                    {/* Render Wide Cover */}
                    {/* {contentItem.fields.wideCover && (
                      <div className="relative w-full sm:grid grid-cols-2 gap-4 mb-4">
                        <div className="image-section aspect-image-section col-span-2 h-[600px] w-full bg-red-300 relative overflow-x-scroll overflow-y-hidden">
                          <div className="image-container aspect-image-container h-[600px] overflow-auto absolute left-0 top-0 w-[400%] bg-blue-400">
                            <div className="image_wrapper absolute inset-0">
                              <img
                                src={`https:${contentItem.fields.wideCover.fields.file.url}`}
                                alt="Wide Cover"
                                className="large-image block rounded-3xl w-full h-full object-left-top object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )} */}

                    {contentItem.fields.wideCover && (
                      <WideCover
                        imageUrl={`https:${contentItem.fields.wideCover.fields.file.url}`}
                        altText="Wide Cover"
                        imageSectionHeight={
                          contentItem.fields.imageSectionHeight
                        }
                        imageContainerHeight={
                          contentItem.fields.imageContainerHeight
                        }
                        imageContainerWidth={
                          contentItem.fields.imageContainerWidth
                        }
                      />
                    )}

                    {/* Render Side-to-Side Image Cover */}
                    {contentItem.fields.sideToSideImageCover && (
                      <div className="relative w-full sm:grid grid-cols-2 gap-4 mb-8">
                        {/* @ts-ignore */}
                        {contentItem.fields.sideToSideImageCover.map(
                          (image, idx) => (
                            <img
                              key={idx}
                              src={`https:${image.fields.file.url}`}
                              alt={`Side-to-Side Cover ${idx + 1}`}
                              className="rounded-3xl w-full h-full max-w-full"
                            />
                          )
                        )}
                      </div>
                    )}

                    {/* Render Normal Video Cover Only if Available */}
                    {contentItem.fields.normalVideoCover && (
                      <div className="relative w-full sm:grid grid-cols-2 gap-4 mb-4">
                        <div className="col-span-full overflow-hidden aspect-video relative rounded-3xl">
                          <video
                            preload="auto"
                            loop
                            autoPlay
                            muted
                            playsInline
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
                          >
                            <source
                              src={`https:${contentItem.fields.normalVideoCover.fields.file.url}`}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    )}

                    {/* Render Rich Text Content */}
                    {contentItem.fields.richContent && (
                      <div className="max-w-5xl sm:ml-40 grid grid-cols-rich-content border-b border-gray-200">
                        <div className="col-span-full sm:col-start-2">
                          {documentToReactComponents(
                            contentItem.fields.richContent,
                            renderOptions
                          )}
                        </div>
                      </div>
                    )}
                  </AccordionProjectItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
