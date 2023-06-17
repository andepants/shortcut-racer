import Link from 'next/link'

export default function Home() {

  return (
    <main>
      <h1 className="flex justify-center m-5 text-orange-600 mt-40 p-2 font-bold text-6xl">Shortcut Racer</h1>
      <p className="flex justify-center m-1 -mt-2 p-1 text-gray-700 text-lg">Learn Keyboard Shortcuts. Work Faster</p>
      <Link href='/vscode' className="flex justify-center">
        <button className="px-3 sm:px-4 m-3 sm:m-2 py-2 rounded bg-blue-500 text-white font-bold text-sm sm:text-base">
          VSCode
        </button>
      </Link>
      <Link href='/excel' className="flex justify-center">
        <button className="px-3 sm:px-4 m-3 sm:m-2 py-2 rounded bg-blue-500 text-white font-bold text-sm sm:text-base">
          Excel
        </button>
      </Link>
    </main>
  )
}