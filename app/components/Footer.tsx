import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-4 p-12 sm:px-48 sm:pb-16 sm:pt-8 border-t border-zinc-100">
      <div className="flex flex-col gap-2">
        <h3 className="sm:text-xl font-light">Get in touch</h3>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <aside className="flex flex-col sm:gap-2">
              <h4 className="text-xs font-light">Email</h4>
              <Link
                href='mailto:guidione.machava@gmail.com'
                className="font-light"
              >
                guidione.machava@gmail.com
              </Link>
            </aside>

            <aside className="flex flex-col sm:gap-2">
              <h4 className="text-xs font-light">LinkedIn</h4>
              <Link
                href='https://www.linkedin.com/in/guidionemachava/'
                className="font-light"
              >
                Guidione Machava
              </Link>
            </aside>
          </div>
          <div className="flex gap-4 sm:gap-8">
            <Link
              href='https://drive.google.com/uc?export=download&id=1x-ly9V_TByeLn2BPBBep3852qxrNd2tr'
              className="font-light flex items-center justify-center px-4 py-2 border border-slate-900 rounded-full"
            >
              <span>Resume</span>
            </Link>

            <Link
              href="https://drive.google.com/uc?export=download&id=1vUawRiuFzsOh2shYTryyutMDnse2Vt6p"
              className="font-light flex items-center justify-center px-4 py-2 border border-slate-900 rounded-full"
            >
              <span>Portfolio</span>
            </Link>
          </div>

        </div>
      </div>
    </footer >
  )
}