import React from 'react'
import { Container } from 'react-bootstrap';
import { CopyRight } from '../components/CopyRight/CopyRight';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';

export const Contact = () => {
  return (
    <Container>
        <Navbar/>
        <Footer/>
        <CopyRight/>      
    </Container>
  )
}
