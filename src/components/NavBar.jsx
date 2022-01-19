// import React, { useEffect } from 'react';
import { Container, Wrapper, LogoContainer, Menu, MenuItems, MenuItemsLinks } from './NavBar-Styled'
import CartWidget from './CartWidget';
import { RiStarSmileLine } from "react-icons/ri";


export default function NavBar () {
    
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
                    <CartWidget />
                </Menu>
            </Wrapper>
        </Container>
    )
}