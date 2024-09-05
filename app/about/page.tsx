import { Header } from "../components/Header"
import Image from "next/image";
import GuidioneWide from '../../public/guidione-wide.jpg'
import { Footer } from "../components/Footer";
import { Accordion } from "../components/Accordion";
import { AccordionItem } from "../components/AccordionItem";

export default function About() {
  return (
    <div className="max-w-[1880px] mx-auto">
      <Header />
      <main className="px-4 sm:px-4">
        <Image
          src={GuidioneWide}
          alt="Logo"
          className="rounded-lg mb-8"
        />

        <section className="max-w-6xl mx-auto">
          <p className="text-zinc-500 leading-loose mb-8">
            I am a Product Designer with +9 years of working experience. I have worked for Shopify - Blockchain team, The World Bank, and a few early-stage startups. I hold a degree in Economics and a not concluded Honours in Interaction Design. I am a passionate design Advocate, I have authored a book, spearheaded conferences, and spoken at multiple events worldwide
          </p>

          <div className="justify-center bg-gray-100">
            <Accordion>
              { /* @ts-ignore */}
              <AccordionItem title="23point5" subTitle="Lead Product Designer">
                <p>
                  Content for section 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </AccordionItem>
              { /* @ts-ignore */}
              <AccordionItem title="Shopify, blockchain" subTitle="Senior Product Designer">
                <p>
                  Content for section 2. Nulla accumsan, metus ultrices eleifend gravida.
                </p>
              </AccordionItem>
              { /* @ts-ignore */}
              <AccordionItem title="Gomarket (Acquired)" subTitle="Funder and Lead Designer">
                <p>
                  Content for section 3. Maecenas non laoreet dui. Curabitur ac libero nec nulla facilisis.
                </p>
              </AccordionItem>
              { /* @ts-ignore */}
              <AccordionItem title="Lepsta Inc" subTitle="Product Manager">
                <p>
                  Content for section 3. Maecenas non laoreet dui. Curabitur ac libero nec nulla facilisis.
                </p>
              </AccordionItem>
              { /* @ts-ignore */}
              <AccordionItem title="" subTitle="UX/UI -Product Designer">
                <p>
                  Content for section 3. Maecenas non laoreet dui. Curabitur ac libero nec nulla facilisis.
                </p>
              </AccordionItem>
              { /* @ts-ignore */}
              <AccordionItem title="The World Bank" subTitle="Product Manager ">
                <p>
                  Content for section 3. Maecenas non laoreet dui. Curabitur ac libero nec nulla facilisis.
                </p>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}