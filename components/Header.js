import Link from 'next/link'
function Header() {
  return (
    <header className="bg-slate-100 py-10">
        <div className="container flex">
          <div className="logo mr-auto">Logo</div>
          <nav className='flex gap-4' aria-label="Navigation principale">
            <Link href="/">Accueil</Link>
            <Link href="/about">À propos</Link>
          </nav>
        </div>
    </header>
  )
}

export default Header