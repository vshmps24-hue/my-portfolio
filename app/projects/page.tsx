type Project = {
  title: string;
  description: string;
  tech: string[];
  status: "Completed" | "In Progress";
  link?: string; // optional link for future use
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Personal Portfolio",
      description:
        "A clean and modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, responsive design, and a working contact form.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Formspree"],
      status: "Completed",
      link: "https://my-portfolio-tawny-kappa-60.vercel.app",
    },
    {
      title: "Project Two",
      description:
        "This project is currently under development. More details and a live link will be added soon.",
      tech: ["Coming soon"],
      status: "In Progress",
    },
    {
      title: "Project Three",
      description:
        "Another project planned for the future. This section will be updated as I continue building.",
      tech: ["Coming soon"],
      status: "In Progress",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 py-16 px-6">
      <div className="max-w-5xl mx-auto animate-fade-in">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          A selection of projects I have worked on. More will be added as I continue building.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col hover:shadow-lg transition"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <span
                  className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    project.status === "Completed"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                      : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Link (only show if available) */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}