import Link from 'next/link'

export default function Home() {

  return (
    <main>
      <h1 className="flex justify-center m-5 p-2 font-bold text-4xl">Shortcut Racer</h1>
      <Link href='/vscode' className="flex justify-center">
        <button className="px-3 sm:px-4 m-2 sm:m-2 py-2 rounded bg-blue-500 text-white font-bold text-sm sm:text-base">
          VSCode
        </button>
      </Link>
    </main>
  )
}