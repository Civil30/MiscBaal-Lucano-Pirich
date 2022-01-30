import { Container, Wrapper, MobileIcon, LogoContainer, Menu, MenuItems, MenuItemsLinks } from './NavBar-Styled'
import CartWidget from './CartWidget';
import { RiStarSmileLine } from "react-icons/ri";
import { VscMenu } from "react-icons/vsc";
import { useState } from 'react';


export default function NavBar () {
    const [mobileMenu, setMobileMenu] = useState(false)

    function showMenu () {
        setMobileMenu(!mobileMenu)
    }

    return (
        <Container>
            <Wrapper>
                <MobileIcon onClick={showMenu}>
                    <VscMenu />
                </MobileIcon>
                <LogoContainer to="/">
                    <RiStarSmileLine />
                    <p>Misc</p>
                    <p>Baal</p>
                </LogoContainer>
                <Menu open={mobileMenu}>
                    <MenuItems>
                        <MenuItemsLinks to='/'>
                            Inicio
                        </MenuItemsLinks>
                    </MenuItems>
                    <MenuItems>
                        <MenuItemsLinks to='/products'>
                            Productos
                        </MenuItemsLinks>
                    </MenuItems>
                    <MenuItems>
                        <MenuItemsLinks to='/about'>
                            Nosotros
                        </MenuItemsLinks>
                    </MenuItems>
                </Menu>
                <CartWidget />
            </Wrapper>
        </Container>
    )
}