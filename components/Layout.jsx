import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
  return (
    <div className='flex flex-col h-full'>
        <Header />
        <main className='mb-auto py-10'>

             {children}

        </main>
        <Footer />
    </div>
  )
}

export default Layout