
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="px-4 py-6 z-50 lg:px-6 bg-gray-100 border-t-[1px] border-gray-300">
        <div className="flex items-center max-[700px]:flex-col justify-between">
          <p className="text-xs text-gray-500">© 2023 Ebook Store. All rights reserved.</p>
          <nav className="flex gap-4 text-xs">
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
  )
}

export default Footer
