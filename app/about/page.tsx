export default function About() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML & CSS",
    "Git & GitHub",
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 py-16 px-6">
      <div className="max-w-3xl mx-auto animate-fade-in">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About Me
        </h1>

        <div className="space-y-5 text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
          <p>
            I am a web developer focused on building clean, fast, and useful web applications.
            I work primarily with <strong>Next.js</strong>, <strong>React</strong>, and <strong>TypeScript</strong>.
          </p>

          <p>
            I believe in learning by building real projects instead of only watching tutorials.
            My goal is to become a reliable developer who can deliver quality work and continuously improve.
          </p>

          <p>
            Currently I am strengthening my skills through consistent practice and by shipping real projects that I can be proud of.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg text-sm text-gray-800 dark:text-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            My Approach
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              Build real projects instead of only learning theory
            </li>
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              Write clean and maintainable code
            </li>
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              Focus on consistency and continuous improvement
            </li>
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              Aim to deliver reliable and useful solutions
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}