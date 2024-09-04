export const metadata = {
  title: 'Projeto Simples',
  description: 'React Hook Form',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
