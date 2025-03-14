import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "banquee.",
  icons: {
    icon: "/public/Rasel.jpg",
  },
  description: "Generated by banquee.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex flex-col md:flex-row items-center justify-between py-6 max-w-[1400px] px-3 lg:px-0 overflow-hidden mx-auto">
          <h6 className="text-[#5BB5A2] ">
            <Link className="font-[700] text-[24px] md:text-[32px]" href="/">
              banquee.
            </Link>
          </h6>

          <ul className="flex items-center  md:gap-4">
            <li>
              <Link
                className="hover:bg-[#F8F8F8] active:bg-[#f8f8f8] py-2 px-3 rounded-sm  duration-500"
                href="/feature"
              >
                Feature
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-1 hover:bg-[#F8F8F8] active:bg-[#f8f8f8] py-2 px-3 rounded-sm duration-500"
                href="/compare"
              >
                Compare <IoIosArrowDown />
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-[#F8F8F8] active:bg-[#f8f8f8] py-2 px-3 rounded-sm duration-500"
                href="/support"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-1 hover:bg-[#F8F8F8] active:bg-[#f8f8f8] py-2 px-3 rounded-sm duration-500"
                href="/blog"
              >
                Blog <IoIosArrowDown />
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-6">
            <button className="text-[#5BB5A2]">Login</button>
            <button className="px-4 py-2 text-white bg-[#5BB5A2] rounded-lg">
              Open Account
            </button>
          </div>
        </header>

        {children}

        {/* footer */}

        <footer className="max-w-[1400px] px-3 lg:px-0 box-border overflow-hidden mx-auto mt-[160px] pb-9">
          <hr />
          <div className=" flex flex-col gap-8 md:flex-row  items-center md:items-start justify-between mb-[80px] mt-[97px]">
            <h6 className="text-[#5BB5A2]  flex-2">
              <Link className="font-[700] text-[24px] md:text-[32px]" href="/">
                banquee.
              </Link>
            </h6>

            <div className="flex flex-col gap-8 flex-1">
              <h5>About</h5>
              <div className="flex flex-col gap-3 text-[#1A191E80]">
                <Link href="/feature">Features</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/support">Support</Link>
              </div>
            </div>
            <div className="flex flex-col gap-8 flex-1">
              <h5>Blog</h5>
              <div className="flex flex-col gap-3 text-[#1A191E80]">
                <Link href="/products">Products</Link>
                <Link href="/technology">Technology</Link>
                <Link href="/crypto">Crypto</Link>
              </div>
            </div>
            <div className="flex flex-col gap-8 flex-1">
              <h5>Webflow</h5>
              <div className="flex flex-col gap-3 text-[#1A191E80]">
                <Link href="/styleguide">Styleguide</Link>
                <Link href="/licensing">Licensing</Link>
                <Link href="/changelog">Changelog</Link>
              </div>
            </div>
            <div className="flex flex-col gap-8 flex-1">
              <h5>Social Media</h5>
              <div className="flex flex-col gap-3 text-[#1A191E80]">
                <Link href="/https://twitter.com/mdraseltalukdr">Twitter</Link>
                <Link href="/https://www.facebook.com/mdraseltalukder0/">
                  Facebook
                </Link>
                <Link href="/https://www.instagram.com/mdraseltalukdrr/">
                  Instagram
                </Link>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex items-center justify-between text-[#1A191E80]">
            <p>
              © Made by{" "}
              <span className="text-[#5BB5A2]">Md Rasel Talukder</span>
            </p>
            <div className="flex items-center gap-4 mt-4">
              <p>Impressum</p>
              <p>datenschutz</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
