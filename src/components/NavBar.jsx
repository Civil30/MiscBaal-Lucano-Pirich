import React from 'react';
import { Container, Wrapper, LogoContainer, Menu, MenuItems, MenuItemsLinks } from './NavBar-Elements'
import { RiStarSmileFill, RiStarSmileLine } from "react-icons/ri";


const NavBar = () =>  {
    
    return (
        <Container>
            <Wrapper>
                <LogoContainer>
                    <RiStarSmileLine />
                    {/* <RiStarSmileFill /> */}
                    <p>Misc<span>Baal</span></p>
                </LogoContainer>
                <Menu>
                    <MenuItems>
                        <MenuItemsLinks>
                            Inicio
                        </MenuItemsLinks>
                    </MenuItems>
                    <MenuItems>
                        <MenuItemsLinks>
                            Servicios
                        </MenuItemsLinks>
                    </MenuItems>
                    <MenuItems>
                        <MenuItemsLinks>
                            Nosotros
                        </MenuItemsLinks>
                    </MenuItems>
                </Menu>
            </Wrapper>
        </Container>
    )
}

export default NavBar