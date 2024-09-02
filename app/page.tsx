import Link from "next/link";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto flex flex-col">
      <Header />
      <main className="px-4 sm:px-4">
        <section className="pt-8 pr-20 pb-8 sm:pl-80 sm:py-14 sm:pr-72">
          <h1 className="text-xl sm:text-4xl font-extralight leading-relaxed">
            Hello, I'm <span>Guidione</span>. <br />
            I am <span>France</span> based Product Designer. <br />
            I lead design at <span>23point5</span> previously at <span>Shopify</span>.
          </h1>
        </section>

        <section className="">
          <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4">
            <aside className="relative flex flex-col aspect-custom bg-slate-500 rounded-3xl">
              <div className="absolute bottom-0 left-0 z-10 sm:p-4">
                <h2 className="text-sm">
                  23point5
                </h2>
                <h3 className="text-sm">
                  An innovative apparel technology and manufacturing platform
                </h3>
              </div>
              <video
                preload="auto"
                loop
                autoPlay
                className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl"
              >
                <source src="/23point5-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </aside>

            <aside className="relative flex flex-col aspect-custom bg-slate-500 rounded-3xl">
              <div className="absolute bottom-0 left-0 z-10 sm:p-4">
                <h2 className="text-sm">
                  Shopify Blockchain
                </h2>
                <h3 className="text-sm">
                  Building for blockchain/token-powered commerce
                </h3>
              </div>
              <video
                preload="auto"
                loop
                autoPlay
                className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl"
              >
                <source src="/23point5-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </aside>

            <aside className="relative flex flex-col aspect-custom bg-slate-500 rounded-3xl">
              <div className="absolute bottom-0 left-0 z-10 sm:p-4">
                <h2 className="text-sm">
                  Shopify - NFT Sales Eligibility Application
                </h2>
                <h3 className="text-sm">
                  An application helps merchants in selling, gifting, and minting NFTs.
                </h3>
              </div>
              <video
                preload="auto"
                loop
                autoPlay
                className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl"
              >
                <source src="/23point5-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div >
  );
}
