import React, { useEffect,useContext } from 'react'
import styled from 'styled-components';
import { NavLink,useHistory } from 'react-router-dom';
import { Button, Container, FlexBetween, FlexCenter, FlexContainer } from '@components/custom';
import logo from '@assets/logo.svg';
import { colors, styles } from '@themes';
import { Avatar, Button  as AntdButton, notification} from 'antd';
import { LogoutOutlined } from '@ant-design/icons'
import Text from 'antd/lib/typography/Text';
import AuthStore from '@contexts/AuthStore';


const NavContainer = styled.div`
    background-color: ${colors.white};
    box-shadow: ${styles.boxShadow};
`;
const Logo = styled(NavLink)`
`;

const Links = styled.div`
`;

const Link = styled(NavLink)`
    display: inline-block;
    padding: 1.2em 1em;
    outline: none;
    color: ${colors.text};
    transition: all .2s;
    border-bottom: 3px solid transparent;
    &.active {
        border-bottom: 3px solid ${colors.primary};
        color: ${colors.primary};
    }
`;

export default function Navbar(user) { 
    console.log(user);

    return (
        <NavContainer>
            <Container>
                <FlexBetween>
                      <Link to="/"> StartUp</Link>
                    <Links>
                    <Button type='primary' style={{color:`${colors.white}`}}>Logout</Button>  
                    </Links>
                </FlexBetween>
            </Container>
        </NavContainer>
    )
}
