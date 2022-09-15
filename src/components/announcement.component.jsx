import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: teal;
  color: #fff;
  font-size: 18px;
  text-align: center;
  height: 30px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Announcement = () => {
  return (
    <Container>
        Flat 50% offer
    </Container>
  )
}

export default Announcement