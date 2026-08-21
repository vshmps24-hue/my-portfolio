export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Contact
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Feel free to reach out if you want to work together or just say hello.
        </p>

        <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-6">
          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-1">Email</h2>
            <p className="text-lg text-gray-900">
              your.email@example.com
            </p>
          </div>

          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-1">Location</h2>
            <p className="text-lg text-gray-900">
              India
            </p>
          </div>

          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-1">Available for</h2>
            <p className="text-lg text-gray-900">
              Freelance projects and full-time opportunities
            </p>
          </div>
        </div>

        <p className="mt-8 text-gray-500 text-sm">
          You can also connect with me on LinkedIn or GitHub (links will be added soon).
        </p>
      </div>
    </main>
  );
}