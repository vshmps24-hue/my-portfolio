export default function Projects() {
    const projects = [
        {
            title: "Personal Portfolio",
            description: "A clean and modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.",
            tech: "In Progress",
        },
        {
            title: "Coming Soon",
            description: "More projects will be added soon. Stay tuned!",
            tech: "In Progress",
        },
    ];

    return (
        <main className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Projects</h1>
                <p className="text-lg text-gray-600 mb-12">
                    Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge and solution.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white border-gray-200 rounded-xl p-6 hover:shadow-md transition">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h2>
                            <p className="text-gray-600 mb-4">
                                {project.description}
                            </p>
                            <p className="text-sm text-gray-500">
                                {project.tech}
                            </p>
                        </div>
                    ))}
                    </div>
                    </div>
                    </main>
    );
}