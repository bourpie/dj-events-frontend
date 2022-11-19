import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
  return (
    <div className='flex flex-col h-screen'>
        <Header />
        <main className='mb-auto py-10'>
            <div className="container">
             {children}
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default Layout