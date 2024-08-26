import Link from "next/link";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto flex flex-col">
      <Header />
      <main className="px-4 sm:pb-8 sm:px-4">
        <section className="pt-8 pr-20 pb-8 sm:pl-80 sm:py-14 sm:pr-72">
          <h1 className="text-xl sm:text-4xl font-extralight leading-relaxed">
            Hello, I'm <span>Guidione</span>. <br />
            I am <span>France</span> based Product Designer. <br />
            I lead design at <span>23point5</span> previously at <span>Shopify</span>.
          </h1>
        </section>

        <section className="">
          <div className="grid grid-cols-3 gap-4">
            <aside
              className="relative flex flex-col aspect-custom bg-slate-500 rounded-3xl"
            >
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

            <aside
              className="relative flex flex-col bg-slate-500 aspect-custom rounded-3xl"
            >
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

            <aside
              className="relative flex flex-col bg-slate-500 rounded-3xl"
            >
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

      <footer className="sm:px-48 sm:pb-16 sm:pt-24">
        <div className="flex flex-col gap-2">
          <h3 className="sm:text-xl font-light">Get in touch</h3>

          <div className="flex justify-between">
            <div className="flex gap-8">
              <aside className="flex flex-col gap-2">
                <h4 className="text-xs font-light">Email</h4>
                <Link
                  href='mailto:guidione.machava@gmail.com'
                  className="font-light"
                >
                  guidione.machava@gmail.com
                </Link>
              </aside>

              <aside className="flex flex-col gap-2">
                <h4 className="text-xs font-light">LinkedIn</h4>
                <Link
                  href='https://www.linkedin.com/in/guidionemachava/'
                  className="font-light"
                >
                  Guidione Machava
                </Link>
              </aside>
            </div>

            <div className="flex gap-8">
              <Link
                href='https://drive.google.com/uc?export=download&id=1x-ly9V_TByeLn2BPBBep3852qxrNd2tr'
                className="font-light flex items-center justify-center sm:px-4 sm:py-2 border border-slate-900 rounded-full"
              >
                <span>Resume</span>
              </Link>

              <Link
                href="https://drive.google.com/uc?export=download&id=1vUawRiuFzsOh2shYTryyutMDnse2Vt6p"
                className="font-light flex items-center justify-center sm:px-4 sm:py-2 border border-slate-900 rounded-full"
              >
                <span>Portfolio</span>
              </Link>
            </div>

          </div>
        </div>
      </footer >
    </div >
  );
}
