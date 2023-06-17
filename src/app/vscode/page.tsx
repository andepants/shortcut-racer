import Link from 'next/link'
import { editing1, editing2 } from '../../../public/vscode'
import Practice from '../components/practice'

export default function VSCode() {

  return (
    <main>
      <h1 className="flex justify-center text-orange-600 m-5 p-2 font-bold text-4xl">VS Code Practicer</h1>
      <Practice defaultShortcuts={editing1}/>
      <Link href='/' className="flex justify-center">
        <button className="px-3 sm:px-4 m-2 sm:m-2 py-2 rounded bg-blue-500 text-white font-bold text-sm sm:text-base">
          Home
        </button>
      </Link>
    </main>
  )
}