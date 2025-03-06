import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-gray-900 text-white h-screen flex flex-col items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold uppercase tracking-wide">
          MetalMancer
        </h1>
        <p className="text-xl">
          Crie sua própria banda de metal com o MetalMancer
        </p>
        <Link href="/metalmancer">
          <button
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Começar Agora
          </button>
        </Link>
      </div>
    </main>
  )
}
