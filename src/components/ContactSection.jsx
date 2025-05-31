import ContactForm from "@/components/ContactForm";
export default function () {
  return (
    <>
      {/* Contact */}
      <section id="contact" className="px-4 md:px-6 py-16 max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-3 text-gray-900">Contact</h3>
        <div className="bg-white gap-2 grid grid-cols-1 md:grid-cols-2 rounded-lg shadow-lg px-8 py-6 space-x-2 space-y-8">
          <div className="items-center space-y-6">
            <h3 className='text-lg font-semibold'>Get in touch</h3>
            <p >Lorem ipsum texti text</p>
            <a
              href="mailto:daniel.feldman.contact@gmail.com"
              id="emailSVG"
              className="flex flex-row gap-3 items-center text-gray-500 hover:text-cyan-500 duration-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
              </svg>
              <p>daniel.feldman.contact@gmail.com</p>
            </a>
            <div
              id="locationSVG"
              className="flex flex-row gap-3 text-gray-500 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
              <p>Israel, Northen District</p>
            </div>
          </div>
          <ContactForm />

          {/*
          <p className="mb-3 text-lg text-gray-600">
            Get in touch.
          </p>
          <a
            href="mailto:daniel.feldman.contact@gmail.com"
            className="text-lg text-blue-600 hover:underline"
          >
            daniel.feldman.contact@gmail.com
          </a>*/}
        </div>
      </section>
    </>
  );
}
