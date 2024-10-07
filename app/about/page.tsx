import { Header } from "../components/Header"
import Image from "next/image";
import GuidioneWide from '../../public/guidione-wide.jpg'
import { Footer } from "../components/Footer";
import { Accordion } from "../components/Accordion";
import { AccordionItem } from "../components/AccordionItem";
import { Breadcrumb } from "../components/Breadcrumb";
import experienceData from "../utils/jobs.json";

export default function About() {
  const breadcrumbs = [
    { label: "Projects", url: "/" },
    { label: "About" },
  ]

  return (
    <div className="max-w-[1880px] mx-auto">
      <Header />
      <main className="px-4 sm:px-4 sm:mb-20">
      <Breadcrumb breadcrumbs={breadcrumbs} />
        <Image
          src={GuidioneWide}
          alt="Logo"
          className="rounded-lg mb-8"
          data-aos="fade-up"
        />

        <section className="max-w-6xl mx-auto">
          <p className="text-zinc-500 leading-loose mb-8"
          data-aos="fade-up">
            I am a Product Designer with +9 years of working experience. I have worked for Shopify - Blockchain team, The World Bank, and a few early-stage startups. I hold a degree in Economics and a not concluded Honours in Interaction Design. I am a passionate design Advocate, I have authored a book, spearheaded conferences, and spoken at multiple events worldwide
          </p>

          <div className="justify-center bg-gray-100 mb-16">
            <Accordion>
              {experienceData.experience.map((job) => (
                // @ts-ignore
                <AccordionItem
                  key={job.id}
                  title={job.company_name}
                  subTitle={job.job_title}
                >
                  <div>
                    <h3>
                      {new Date(job.start_date).toLocaleDateString("en-US", { year: 'numeric', month: 'long' })} - {''}
                      {job.end_date ? new Date(job.end_date).toLocaleDateString("en-US", { year: 'numeric', month: 'long' }) : "Present"}, {''}
                      {job.location}
                    </h3>
                    <p>{job.description}</p>
                    <ul className="list-disc ml-6">
                      {job.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="hidden sm:flex gap-32">
            <aside>
              <h3 className="pb-4 mb-8 text-3xl font-serif italic text-zinc-600 border-b border-gray-200">Education</h3>
              <div className="mb-8 leading-relaxed">
                <h4 className="font-semibold">The Open Window Institute</h4>
                <p>Honors in Interaction Design</p>
                <p>2019 - 2021</p>
                <p>South Africa</p>
              </div>

              <div className="leading-relaxed">
                <h4 className="font-semibold">St. Thomas University</h4>
                <p>Bachelor's in Economicsn</p>
                <p>2012 - 2015 </p>
                <p>Mozambique</p>
              </div>
            </aside>

            <aside>
              <h3 className="pb-4 mb-8 text-3xl font-serif italic text-zinc-600 border-b border-gray-200">Volunteering</h3>
              <div className="mb-8 leading-relaxed">
                <h4 className="font-semibold">IxDA Global</h4>
                <p>Support Team Interaction 20</p>
                <p>Feb - 2020 Milan, Italy </p>
                <p>Milan, Italy</p>
              </div>

              <div className="leading-relaxed">
                <h4 className="font-semibold">TEDx Pretoria</h4>
                <p>Support Team </p>
                <p>Nov 2018</p>
                <p>Pretoria, South Africa</p>
              </div>
            </aside>

            <aside>
              <h3 className="pb-4 mb-8 text-3xl font-serif italic text-zinc-600 border-b border-gray-200">Personal projects</h3>
              <div className="mb-8 leading-relaxed">
                <h4 className="font-semibold">World-class Designer</h4>
                <p>Online design school for early-stage designers.</p>
                <p>Feb - 2020, present </p>
                <p>Pretoria, South Africa</p>
              </div>

              <div className="leading-relaxed">
                <h4 className="font-semibold">Design Sutra (book)</h4>
                <p>Collection of 40 timeless design principles</p>
                <p>August - 2020</p>
                <p>Maputo, Mozambique</p>
              </div>
            </aside>
          </div>

          <div className="sm:hidden justify-center bg-gray-100 mb-8" data-aos="fade-up">
            <Accordion>
              { /* @ts-ignore */}
              <AccordionItem title="Education">
                <div className="text-sm mb-4 leading-relaxed">
                  <h4 className="font-semibold">The Open Window Institute</h4>
                  <p>Honors in Interaction Design</p>
                  <p>2019 - 2021</p>
                  <p>South Africa</p>
                </div>

                <div className="text-sm leading-relaxed">
                  <h4 className="font-semibold">St. Thomas University</h4>
                  <p>Bachelor's in Economicsn</p>
                  <p>2012 - 2015 </p>
                  <p>Mozambique</p>
                </div>
              </AccordionItem>
              { /* @ts-ignore */}
              <AccordionItem title="Volunteering">
                <div className="text-sm mb-8 leading-relaxed">
                  <h4 className="font-semibold">IxDA Global</h4>
                  <p>Support Team Interaction 20</p>
                  <p>Feb - 2020 Milan, Italy </p>
                  <p>Milan, Italy</p>
                </div>

                <div className="text-sm leading-relaxed">
                  <h4 className="font-semibold">TEDx Pretoria</h4>
                  <p>Support Team </p>
                  <p>Nov 2018</p>
                  <p>Pretoria, South Africa</p>
                </div>
              </AccordionItem>
              { /* @ts-ignore */}
              <AccordionItem title="Personal projects">
                <div className="text-smmb-8 leading-relaxed">
                  <h4 className="font-semibold">World-class Designer</h4>
                  <p>Online design school for early-stage designers.</p>
                  <p>Feb - 2020, present </p>
                  <p>Pretoria, South Africa</p>
                </div>

                <div className="text-sm leading-relaxed">
                  <h4 className="font-semibold">Design Sutra (book)</h4>
                  <p>Collection of 40 timeless design principles</p>
                  <p>August - 2020</p>
                  <p>Maputo, Mozambique</p>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}