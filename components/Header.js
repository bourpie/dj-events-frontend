import Link from 'next/link'
import Navbar from "../components/navbar";
import Image from "next/image";
import { useContent } from '../context/AppContext';
import { Button } from 'flowbite-react'

function Header() {

  const { content, logo, navigation, liensSecondaires, boutonActionDtos } = useContent()

  return (
    <header>
      <div className="container flex justify-between">
        <div className='flex items-center gap-5'>
          <Link className="flex" href={logo.lienDto.urlTo}>
              <Image src={logo.url} priority alt={logo.attributAlt} width="170" height="71" />
              <div className="sr-only">{content.titre}</div>
          </Link>
          <div className='flex gap-5 pt-5'>
            { navigation.menuPrincipalDtos.map((item, index) => (
                <Link key={index} href={item.lienDto.urlTo}>{item.lienDto.texte}</Link>
            ))}
          </div>
        </div>
        <div className="pt-5">
          <div className="flex gap-5 py-4">
              {liensSecondaires.map((item, index) => (<Link  href={item.urlTo} target={item.cible} key={index}>{item.texte}</Link>))}
          </div>
          <div className="flex gap-5">
            {boutonActionDtos.map((item, index) => (<Button outline={index === 1 ? true : false} key={index} size="xl">Button</Button>))}  
          </div>
        </div>
      </div>      
    </header>
  )
}

export default Header