import Link from 'next/link'

const Header = () => {
  return (
    <header className="p-5">
      <Link href="/">
        <p>Header</p>
      </Link>
    </header>
  );
}

export default Header
