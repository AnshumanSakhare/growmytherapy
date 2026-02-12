import type { Metadata } from "next"
import "./globals.css"
import Header from "./Components/Header"

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds",
  description: "Therapy website template",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-secondary text-primary overflow-x-hidden`}>
        <div className="relative w-full overflow-x-hidden">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}