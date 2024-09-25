import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { LiaDownloadSolid } from "react-icons/lia";

export function Footer() {
  const linkClasses = "hover:text-orange-500 text-zinc-600 transition-all duration-300 ease-in-out"; 
  const buttonLinkClasses = "hover:border-orange-500 hover:text-orange-500 transition-all duration-300 ease-in-out"; 
  
  return (
    <footer id="footer" className="px-4 py-8 sm:px-48 sm:pb-16 sm:pt-8 border-t border-zinc-100">
      <div className="flex flex-col gap-2">
        <h3 className="sm:text-xl font-normal">Get in touch</h3>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <aside className="flex flex-col sm:gap-2">
              <h4 className="text-xs font-light">Email</h4>
              <Link
                href='mailto:guidione.machava@gmail.com'
                className={`font-normal ${linkClasses}`}
              >
                guidione.machava@gmail.com
              </Link>
            </aside>

            <aside className="flex flex-col sm:gap-2">
              <h4 className="text-xs font-light">LinkedIn</h4>
              <Link
                href='https://www.linkedin.com/in/guidionemachava/'
                className={`font-normal flex items-center gap-1 ${linkClasses}`}
              >
                <span>Guidione Machava</span>
                <FiArrowUpRight />
              </Link>
            </aside>
          </div>

          <div className="sm:self-end flex gap-4 sm:gap-8">
            <Link
              href='https://drive.google.com/uc?export=download&id=1x-ly9V_TByeLn2BPBBep3852qxrNd2tr'
              className={`text-sm font-normal flex gap-2 items-center justify-center py-2 px-4 border border-slate-900 rounded-full ${buttonLinkClasses}`}
            >
              <span>Resume</span>
              <LiaDownloadSolid />
            </Link>

            <Link
              href="https://drive.google.com/uc?export=download&id=1vUawRiuFzsOh2shYTryyutMDnse2Vt6p"
              className={`text-sm font-normal flex gap-2 items-center justify-center px-4 border border-slate-900 rounded-full ${buttonLinkClasses}`}
            >
              <span className="font-sm">Portfolio</span>
              <LiaDownloadSolid />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
