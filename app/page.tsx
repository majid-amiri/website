import {
  faGithub,
  faInstagram,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const contacts = [
  {
    icon: faInstagram,
    url: "https://www.instagram.com/majidamiri.dev",
  },
  {
    icon: faTelegram,
    url: "https://t.me/majidamiridev",
  },
  {
    icon: faWhatsapp,
    url: "https://wa.me/message/PFUDXKM2INRJJ1",
  },
  {
    icon: faGithub,
    url: "https://github.com/majid-amiri",
  },
  {
    icon: faEnvelopeOpen,
    url: "mailto:m@majidamiri.dev",
  },
];

export default function Home() {
  return (
    <div className="min-h-[calc(100dvh)] h-full relative isolate">
      <div className="h-full container mx-auto">
        <div className="h-full grid justify-items-center md:items-center md:grid-cols-2 gap-8 md:gap-4">
          <div className="text-center px-4 md:px-0 md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight text-gray-300">
              Majid Amiri
            </h1>
            <p className="mt-6 text-xl font-bold leading-8 text-gray-400">
              Senior Software Engineer &<br />
              Web Development Instructor
            </p>
            <div className="mt-6 text-gray-400 flex gap-4 justify-center md:justify-start">
              {contacts.map((c) => (
                <a
                  href={c.url}
                  key={c.url}
                  target="_blank"
                  className="hover:opacity-70"
                >
                  <FontAwesomeIcon icon={c.icon} size="xl" />
                </a>
              ))}
            </div>
          </div>
          <div className="self-end md:self-center w-2/3 md:w-3/4 order-first md:order-last">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/majid.webp"
              className="aspect-square rounded-full border-8 border-gray-300 shadow-2xl w-full h-fit"
              alt="Majid Amiri"
            />
          </div>
        </div>
        <div
          className="absolute w-full md:w-3/4 left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl md:top-6"
          aria-hidden="true"
        >
          <div
            className="w-full max-h-[calc(100dvh)] aspect-[1/2] md:aspect-[2/1] bg-gradient-to-tr from-[#0054FE] to-[#64AFE5] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
