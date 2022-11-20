import NavLink from '../components/NavLink';
import { useContent } from '../context/AppContext';

const Navbar = () => { 

    const { navigation} = useContent()

    return (
        <nav aria-label="Navigation principale" className='flex gap-8 font-bold'>
            { navigation.menuPrincipalDtos.map((item, index) => (
                <NavLink key={index} href={item.lienDto.urlTo}>{item.lienDto.texte}</NavLink>
            ))}
        </nav>
)};

export default Navbar;