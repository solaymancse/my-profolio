import React from 'react'
import { Container } from 'react-bootstrap';
import { CopyRight } from '../components/CopyRight/CopyRight';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import { Services } from '../components/Services/Services';

export const ServicesPage = () => {
  return (
    <>
    <Container>
        <Navbar/>   
        <Services/>
    </Container>
        <Footer/>
        <CopyRight/>    
    </>
  )
}
