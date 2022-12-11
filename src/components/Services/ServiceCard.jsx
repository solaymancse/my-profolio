import React,{useState} from 'react'

import { ModalBox } from '../modal/ModalBox';
import {
    Img,
    H1,
    H2,
    Card,
    ContentDiv,
    Top,
    Button,
    Description
  } from "./ServicesElements";
export const ServiceCard = ({data}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card  data-aos="zoom-in-down" data-aos-duration="1000">
            <Top>
              <Img src={data.img} alt={data.title} />
            </Top>

            <ContentDiv>
              <H1 color="#333">{data.title}</H1>
              <div>
                <H2>
                <li>{data.h2[0]}</li>
              </H2>
              <H2>
                <li>{data.h2[1]}</li>
              </H2>
              <H2>
                <li>{data.h2[2]}</li>
              </H2>
              <H2>
                <li>{data.h2[3]}</li>
              </H2>
              <H2>
                <li>{data.h2[4]}</li>
              </H2>
              </div>
             
              <Description>
                {data.desc}
               
              </Description>
              <Button onClick={handleOpen}>Order Now</Button>
              <ModalBox    open={open}
                onClose={handleClose} data={data}/>
            </ContentDiv>
            
          </Card>
  )
}
