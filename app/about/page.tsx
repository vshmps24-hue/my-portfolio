export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          About Me
        </h1>

        {/* Introduction */}
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed mb-12">
          <p>
            I am a web developer with several years of experience building websites and web applications. 
            Over time I have worked with different technologies and am now focused on modern tools like 
            <strong> Next.js</strong>, <strong>React</strong>, and <strong>TypeScript</strong>.
          </p>

          <p>
            I enjoy creating clean, fast, and useful applications. I believe in writing simple and 
            maintainable code that solves real problems.
          </p>

          <p>
            Currently I am actively improving my skills by building real projects and learning deeply 
            instead of just watching tutorials. My goal is to become a strong and reliable developer 
            who can deliver quality work.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm">
              Next.js
            </span>
            <span className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm">
              React
            </span>
            <span className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm">
              TypeScript
            </span>
            <span className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm">
              JavaScript
            </span>
            <span className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm">
              Tailwind CSS
            </span>
            <span className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm">
              HTML & CSS
            </span>
            <span className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm">
              Git & GitHub
            </span>
          </div>
        </div>

        {/* Approach Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            My Approach
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-black font-bold">•</span>
              Focus on building real projects instead of only learning theory
            </li>
            <li className="flex gap-3">
              <span className="text-black font-bold">•</span>
              Write clean and understandable code
            </li>
            <li className="flex gap-3">
              <span className="text-black font-bold">•</span>
              Continuously improve through practice and consistency
            </li>
            <li className="flex gap-3">
              <span className="text-black font-bold">•</span>
              Aim to deliver reliable and useful solutions
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}