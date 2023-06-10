import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const contacts = [
  {
    icon: faEnvelopeOpen,
    url: "mailto:m@majidamiri.dev",
  },
  {
    icon: faGithub,
    url: "https://github.com/majid-amiri",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/majidamiri.dev",
  },
];

export default function Home() {
  return (
    <div>
      <div className="h-screen">
        <div className="h-full relative isolate overflow-hidden bg-gray-900 flex flex-col justify-center px-4 md:px-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-8xl font-bold tracking-tight text-gray-300">
              Majid Amiri
            </h1>
            <p className="mt-6 text-xl font-bold leading-8 text-gray-400">
              Senior Software Engineer
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
          <div
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
