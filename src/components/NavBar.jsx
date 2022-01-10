// import React, { useEffect } from 'react';
import { Container, Wrapper, LogoContainer, Menu, MenuItems, MenuItemsLinks } from './NavBar-Styled'
import { CartIcon } from './CartWidget-Styled';
import { RiStarSmileLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";


const NavBar = () =>  {
    
    return (
        <Container>
            <Wrapper>
                <LogoContainer>
                    <RiStarSmileLine />
                    <p>Misc<span>Baal</span></p>
                </LogoContainer>
                <Menu>
                    <MenuItems>
                        <MenuItemsLinks href='#'>
                            Inicio
                        </MenuItemsLinks>
                    </MenuItems>
                    <MenuItems>
                        <MenuItemsLinks href='#'>
                            Servicios
                        </MenuItemsLinks>
                    </MenuItems>
                    <MenuItems>
                        <MenuItemsLinks href='#'>
                            Nosotros
                        </MenuItemsLinks>
                    </MenuItems>
                    <CartIcon>
                        <FiShoppingCart />
                    </CartIcon>
                </Menu>
            </Wrapper>
        </Container>
    )
}

export default NavBar 