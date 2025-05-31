const contributions = {
  "first-contributions": {
    name: "first-contributions",
    link: "https://github.com/firstcontributions/first-contributions",
    description: "Added my name to the Contributors.md file.",
  },
  "code-contributions": {
    name: "code-contributions",
    link: "https://github.com/roshanjossey/code-contributions",
    description: "Added an HTML card with my data to the contributers list.",
  },
};
export default function OpenSourceContributions() {
  return (
    <section id="openSource" className="px-4 md:px-6 py-16 max-w-4xl mx-auto">
      <h3 className="text-3xl font-semibold mb-6 text-gray-900 text-left">
        Open Source Contributions
      </h3>
      <div className="bg-white rounded-lg shadow-lg p-8">
        {Object.keys(contributions).map((item, i) => (
          <div key={i} className="p-2 mt-2">
            <h4 className="text-2xl font-semibold">{`${i+1}. ${item}`}</h4>
            <a
              href={contributions[item].link}
              className="flex flex-row items-center gap-2 text-gray-400 hover:text-amber-300 duration-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-link-45deg"
                viewBox="0 0 16 16"
              >
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
              </svg>
              {contributions[item].link}
            </a>

            <h4 className="font-semibold pt-2 text-xl">Description:</h4>
            <p className="text-lg text-gray-600">
              {contributions[item].description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
