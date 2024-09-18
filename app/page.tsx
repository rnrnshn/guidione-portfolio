import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { getProjects } from "./utils/contentful";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto flex flex-col">
      <Header />
      <main className="px-4 sm:px-4 pb-8 sm:pb-16">
        <section className="sm:grid sm:grid-cols-header-title sm:p-20 pr-24 py-8">
          <h1 className="flex flex-col sm:gap-2 header-title sm:place-self-center sm:col-start-2 sm:col-end-3 text-2xl sm:text-4xl font-serif text-[#888] sm:leading-[52px]">
            <span>Hello, I'm <span className="text-black">Guidione</span>. </span>
            <span>I am <span className="text-black">France</span> based Product Designer. </span>
            <span>
              I lead design at <span className="text-black italic">23point5</span>, previously at <span className="text-black italic">Shopify</span>.
            </span>
          </h1>
        </section>

        <section>
          <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4">
            {projects
              .filter((project) => project?.showProject !== false) // Filter projects based on the 'showProject' attribute
              .map((project) => {
                // @ts-ignore
                const videoUrl = project?.projectVideoCover?.fields?.file?.url;
                const projectSlug = project?.projectSlug ?? "#";

                return (
                  // @ts-ignore
                  <div key={projectSlug}>
                    <Link href={`/${projectSlug}`}>
                      <aside className="relative flex flex-col aspect-custom bg-slate-500 rounded-3xl group">
                        <div className="absolute bottom-0 left-0 z-10 sm:p-4 opacity-0 transform translate-y-4 transition-opacity duration-300 group-hover:opacity-100 group-hover:translate-y-0 bg-white/50 w-full">
                          {/* @ts-ignore */}
                          <h2 className="text-sm text-black">{project.projectTitle}</h2>
                          {/* @ts-ignore */}
                          <h3 className="text-sm text-black">{project.projectDescription}</h3>
                        </div>
                        {videoUrl ? (
                          <video
                            preload="auto"
                            loop
                            autoPlay
                            muted
                            className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl"
                          >
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <img
                            src="/default-cover.jpg"
                            alt="Default cover"
                            className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl"
                          />
                        )}
                      </aside>
                    </Link>
                  </div>
                );
              })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Revalidate the page every 10 seconds (ISR)
export const revalidate = 10;