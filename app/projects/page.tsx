type Project = {
  title: string;
  description: string;
  tech: string;
  status: "Completed" | "In Progress";
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Personal Portfolio",
      description:
        "A clean and modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Fully responsive and deployed on Vercel.",
      tech: "Next.js • TypeScript • Tailwind CSS",
      status: "Completed",
    },
    {
      title: "Project Two",
      description:
        "This project is currently under development. More details will be added soon.",
      tech: "Coming soon",
      status: "In Progress",
    },
    {
      title: "Project Three",
      description:
        "Another project planned for the future. This section will be updated as I build more.",
      tech: "Coming soon",
      status: "In Progress",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
        <p className="text-lg text-gray-600 mb-12">
          A selection of projects I have worked on. More will be added as I continue building.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h2>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    project.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <p className="text-sm text-gray-500">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}