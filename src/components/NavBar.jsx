// import React, { useEffect } from 'react';
import { Container, Wrapper, MobileIcon, LogoContainer, Menu, MenuItems, MenuItemsLinks } from './NavBar-Styled'
import CartWidget from './CartWidget';
import { RiStarSmileLine } from "react-icons/ri";
import { VscMenu } from "react-icons/vsc";


export default function NavBar () {
    
    return (
        <Container>
            <Wrapper>
                <MobileIcon>
                    <VscMenu />
                </MobileIcon>
                <LogoContainer to="/">
                    <RiStarSmileLine />
                    <p>Misc</p>
                    <p>Baal</p>
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
                </Menu>
                    <CartWidget />
            </Wrapper>
        </Container>
    )
}