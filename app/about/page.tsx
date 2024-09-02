import { Header } from "../components/Header"
import Image from "next/image";
import GuidioneWide from '../../public/guidione-wide.jpg'
import { Footer } from "../components/Footer";

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
          <p>
            I am a Product Designer with +9 years of working experience. I have worked for Shopify - Blockchain team, The World Bank, and a few early-stage startups. I hold a degree in Economics and a not concluded Honours in Interaction Design. I am a passionate design Advocate, I have authored a book, spearheaded conferences, and spoken at multiple events worldwide
          </p>
        </section>

      </main>
      <Footer />
    </div>
  )
}