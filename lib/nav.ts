import fs from 'fs'
import path from 'path'

export function getNavItems() {
  const mdDir = path.join(process.cwd(), 'app', 'md')
  const files = fs.readdirSync(mdDir).filter(file => file.endsWith('.mdx')).sort()
  const navItems = files.map((file, index) => {
    const filePath = path.join(mdDir, file)
    const content = fs.readFileSync(filePath, 'utf-8')
    const title = content.split('\n')[0].replace('# ', '').trim()
    return { title, url: `section${index + 1}` }
  })
  return [{ title: "Introduction", url: "/" }, ...navItems]
}
