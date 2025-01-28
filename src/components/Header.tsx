import Link from 'next/link'

const Header = () => {
  return (
    <header className="p-5 border-b-2 bg-white border-gray-200 flex items-center">
      <Link href="/" className='text-3xl'>
          Octo
      </Link>
    </header>
  );
}

export default Header
