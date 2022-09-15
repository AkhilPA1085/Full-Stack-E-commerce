import styled from 'styled-components';
import {Search,ShoppingCartOutlined} from '@material-ui/icons';
import Badge from '@mui/material/Badge';

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`
const Center= styled.div`
    flex: 1;
`
const Logo = styled.div`
    font-weight:bold;
    text-align: center;
    text-transform: uppercase;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: end;
    align-items: center;
    gap:25px;
`
const MenuItem = styled.div`
    font-size: 14px;
`

const Navbar = ()=>{
    return(
        <Container>
            <Wrapper>
                <Left>
                    <Language>en</Language>
                    <SearchContainer>
                        <Input/>
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