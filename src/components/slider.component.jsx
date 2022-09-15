import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from "react"
import styled from "styled-components"
import { sliderItems } from "../data"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    background-color: aliceblue;
    overflow: hidden;
    ${mobile({display:"none"})}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #e2e2e2;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    position: absolute;
    top: 0;
    bottom: 0;
    left:${props=> props.direction === "left" && "10px"};
    right:${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props)=>props.sliderIndex * -100}vw);
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props=>props.bg};
`
const ImgContainer = styled.div`
    height: 100%;
    flex:1;
`
const Image = styled.img`
    height: 100%;
`
const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 45px;
    font-weight: bolder;
    color: #232329;
    margin: 0;
    text-transform: uppercase;
`
const Description = styled.p`
    font-size: 16px;
    margin:30px 0;
    color: #232329;
    text-transform: uppercase;
`
const Button = styled.button`
    padding: 10px;
    font-size: 16px;
    background-color: transparent;
    cursor: pointer;
    border: 1px solid teal;
    text-transform: uppercase;
    font-weight: 700;
`

const Slider = () => {
    const [sliderIndex, setSliderIndex] = useState(0)

    const handleClick = (direction)=>{
        if(direction === "left"){
            setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2 );
        }else{
            setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
        }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick('left')}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper sliderIndex = {sliderIndex}>
            {sliderItems.map((item)=>(
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.image}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.description}</Description>
                        <Button>shop now</Button>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick('right')}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider