import Link from 'next/link'
import { entertingData1 } from '../../../public/excel'
import Practice from '../components/practice'

export default function VSCode() {

  return (
    <main>
      <h1 className="flex text-orange-600 justify-center m-5 p-2 font-bold text-4xl">Excel Practicer</h1>
      <Practice defaultShortcuts={entertingData1}/>
      <Link href='/' className="flex justify-center">
        <button className="px-3 sm:px-4 m-2 sm:m-2 py-2 rounded bg-blue-500 text-white font-bold text-sm sm:text-base">
          Home
        </button>
      </Link>
    </main>
  )
}