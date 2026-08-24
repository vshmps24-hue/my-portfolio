export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Contact
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
          Feel free to reach out if you want to work together or just say hello.
        </p>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 space-y-6">
          <div>
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              Email
            </h2>
            <p className="text-lg text-gray-900 dark:text-white">
              vshmps24@gmail.com
            </p>
          </div>

          <div>
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              Location
            </h2>
            <p className="text-lg text-gray-900 dark:text-white">
              India
            </p>
          </div>

          <div>
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              Available for
            </h2>
            <p className="text-lg text-gray-900 dark:text-white">
              Freelance projects and full-time opportunities
            </p>
          </div>

          <div>
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              Social
            </h2>
            <div className="flex gap-4 mt-1">
              <a
                href="https://github.com/vshmps24-hue"
                target="_blank"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}