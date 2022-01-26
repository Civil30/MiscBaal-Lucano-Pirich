// import React, { useEffect } from 'react';
import { Container, Wrapper, LogoContainer, Menu, MenuItems, MenuItemsLinks } from './NavBar-Styled'
import CartWidget from './CartWidget';
import { RiStarSmileLine } from "react-icons/ri";
// import { Link } from 'react-router-dom';


export default function NavBar () {
    
    return (
        <Container>
            <Wrapper>
                <LogoContainer to="/">
                    <RiStarSmileLine />
                    <p>Misc<span>Baal</span></p>
                </LogoContainer>
                <Menu>
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
                    <CartWidget />
                </Menu>
            </Wrapper>
        </Container>
    )
}