import { Container, Wrapper, MobileIcon, LogoContainer, Menu, MenuItems, MenuItemsLinks } from 'components/NavBar/NavBar-Styled'
import { CartWidget } from 'components/NavBar/CartWidget';
import { RiStarSmileLine } from "react-icons/ri";
import { VscMenu } from "react-icons/vsc";
import { useState } from 'react';


export function NavBar () {
    const [mobileMenu, setMobileMenu] = useState(false)

    function showMenu () {
        setMobileMenu(!mobileMenu)
    }

    function closeMenu () {
        setMobileMenu(false)
    }

    return (
        <Container onClick={ mobileMenu ? closeMenu : null }>
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
                        <MenuItemsLinks to='/category/peluches'>
                            Peluches
                        </MenuItemsLinks>
                    </MenuItems>
                    <MenuItems>
                        <MenuItemsLinks to='/category/figuras'>
                            Figuras
                        </MenuItemsLinks>
                    </MenuItems>
                </Menu>
                <CartWidget />
            </Wrapper>
        </Container>
    )
}