import type { Metadata } from "next"
import { MDXRemote } from 'next-mdx-remote/rsc'
import fs from 'fs'
import path from 'path'

export const metadata: Metadata = {
  title: "Docs ",
  description: "Welcome to our minimal documentation site",
}

export default function Home() {
  const mdDir = path.join(process.cwd(), 'app', 'md')
  const files = fs.readdirSync(mdDir).filter(file => file.endsWith('.mdx')).sort()
  const mdxContents = files.map(file => {
    const filePath = path.join(mdDir, file)
    const content = fs.readFileSync(filePath, 'utf-8')
    return { file, content }
  })

  return (
    <main className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold">Welcome to Our Docs</h1>
      <p className="mb-4">
        This is a gorgeous minimal documentation site built with Next.js, Tailwind CSS, and shadcn/ui components.
      </p>
      {mdxContents.map(({ file, content }, index) => (
        <div key={file} id={`section${index + 1}`} className="mb-8">
          <MDXRemote source={content} />
        </div>
      ))}
    </main>
  )
}
