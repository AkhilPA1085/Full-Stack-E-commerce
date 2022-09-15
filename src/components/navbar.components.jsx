import styled from 'styled-components';
import {Search,ShoppingCartOutlined} from '@material-ui/icons';
import Badge from '@mui/material/Badge';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 60px;
    ${mobile({height:"50px"})}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding:"10px 0px"})}
`
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
    text-transform: uppercase;
    ${mobile({display:"none"})}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 25px;
    padding: 5px;
    ${mobile({marginLeft:"4px"})}
`
const Input = styled.input`
    border: none;
    ${mobile({width:"50px"})}
    &:focus{
        outline: none;
    }
`
const Center= styled.div`
    flex: 1;
`
const Logo = styled.div`
    color:#232329;
    font-weight:bold;
    text-align: center;
    text-transform: uppercase;
    ${mobile({fontSize:"14px"})}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: end;
    align-items: center;
    gap:25px;
    ${mobile({flex:2, justifyContent:"center",gap:"0px"})}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize:"12px",marginLeft: "10px"})}
`

const Navbar = ()=>{
    return(
        <Container>
            <Wrapper>
                <Left>
                    <Language>en</Language>
                    <SearchContainer>
                        <Input placeholder='Search'/>
                        <Search style={{color:'gray',fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Shopping Cart</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined color="action" />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}
export default Navbar