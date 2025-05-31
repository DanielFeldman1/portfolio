export default function AboutSection() {
  return (
    <>
      {/* About */}
      <section id="about" className="px-4 md:px-6 py-16 max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6 text-left text-gray-900">
          About Me
        </h3>
        <div className="bg-white rounded-lg shadow-lg px-8 py-8">
          <h4 className="font-semibold text-2xl">
            Braude College of Engineering
          </h4>
          <div className="space-y-2 my-2">
            <div className="flex flex-row gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="text-yellow-500 bi bi-trophy-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
              </svg>
              <p>Dean's Excellence List (1 Year).</p>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pen-fill"
                viewBox="0 0 16 16"
              >
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
              </svg>
              <p>Cumulative GPA: 86.</p>
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-3">
            I’ve worked with React, Next.js, Python, MongoDB, and Firebase, and
            I thrive in collaborative environments where solving real-world
            problems is the goal. I'm always learning and pushing my limits
            whether it's through code or new ideas.
          </p>
          <h4 className="font-semibold text-2xl">Personal Life</h4>
          <p className="text-lg text-gray-600 italic">
            Outside the editor, I’m training for a half marathon and love
            reading books on tech, mindset, and personal growth. Weight
            training, Mindfulness. I believe consistent effort, in code or life,
            leads to powerful outcomes.
          </p>
          <div className="mt-2">
            <div className="flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="text-yellow-800 bi bi-book-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
              </svg>
              <p>Reading.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
