import './globals.css'

export const metadata = {
  title: 'Shortcut Racer',
  description: 'A shortcut game for programmers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-blue-200">{children}</body>
    </html>
  )
}
