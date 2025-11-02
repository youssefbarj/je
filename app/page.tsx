import ContraindicationsGrid from "@/components/contraindications-grid"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Eyelash Extension Contraindications
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Important: These conditions and factors may prevent you from safely receiving eyelash extensions.
            Hover over each card to learn more.
          </p>
        </div>
        <ContraindicationsGrid />

        {/* Professional Responsibility Section */}
        <div className="mt-12 bg-red-50 border-l-4 border-red-500 p-6 mx-4 rounded-r-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Professional Responsibility</h3>
              <p className="text-red-700">
                As a professional, it is your responsibility to detect these contraindications during the
                preliminary consultation to ensure the safety of your clients during eyelash extension
                treatments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
