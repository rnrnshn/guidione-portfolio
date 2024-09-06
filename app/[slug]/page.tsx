import { getEntryBySlug, createContentClient } from "../utils/contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Header } from "../components/Header"
import { Footer } from "../components/Footer";
import { Accordion } from "../components/Accordion";
import { AccordionProjectItem } from "../components/AccordionProjectItem";
import { Breadcrumb } from "../components/Breadcrumb";
import Image from "next/image";

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

// @ts-ignore
export default async function ProjectPage(props) {
  const { params } = props;
  const { slug } = params;

  const project = await getEntryBySlug(slug, "projects");

  const { projectTitle, projectDescription, projectWideCover, projectVideoCover, projectContents } = project.fields;

  return (
    <div className="max-w-[1880px] mx-auto">
      <Header />
      <main className="px-4 sm:px-4 sm:mb-8">
        <Breadcrumb />

        <section className="max-w-6xl mx-auto mb-4">
          {/* <h3>{projectTitle}</h3> */}
          <h1
            className="flex flex-col sm:gap-2 sm:place-self-center text-2xl sm:text-4xl font-serif text-[#888] sm:leading-[52px]">
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

        <section className="sm:grid sm:grid-cols-header-title">
          <div className="col-start-2">
            <h1
              className="flex flex-col sm:gap-2 sm:place-self-center text-2xl sm:text-2xl font-serif italic text-zinc-600 sm:leading-[52px]">
              Project context
            </h1>
            <div className="justify-center bg-gray-100 mb-16">
              <Accordion>
                {/* @ts-ignore */}
                { // @ts-ignore
                  projectContents.map((contentItem, index) => (
                    // @ts-ignore
                    <AccordionProjectItem
                      key={index}
                      title={contentItem.fields.projectContentItemTitle}
                    >
                      {/* Render rich text content */}
                      {contentItem.fields.richContent &&
                        documentToReactComponents(contentItem.fields.richContent)}

                      {/* Render various asset covers */}
                      {contentItem.fields.normalCover &&
                        <img
                          src={`https:${contentItem.fields.normalCover.fields.file.url}`}
                          alt="Normal Cover"
                          className="your-custom-class"
                        />}
                      {contentItem.fields.wideCover &&
                        <img
                          src={`https:${contentItem.fields.wideCover.fields.file.url}`}
                          alt="Wide Cover"
                          className="your-custom-class"
                        />}
                      {contentItem.fields.sideToSideImageCover &&
                        contentItem.fields.sideToSideImageCover.map((image, idx) => (
                          <img
                            key={idx}
                            src={`https:${image.fields.file.url}`}
                            alt={`Side-to-Side Cover ${idx + 1}`}
                            className="your-custom-class"
                          />
                        ))}
                      {contentItem.fields.normalVideoCover &&
                        <img
                          src={`https:${contentItem.fields.normalVideoCover.fields.file.url}`}
                          alt="Normal Video Cover"
                          className="your-custom-class"
                        />}
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
