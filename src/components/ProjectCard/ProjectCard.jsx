import { useState } from 'react';

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { AiFillEye } from "react-icons/ai";
import { Title, Code, Desc, Links, CardBox, Media } from "./ProjectCardElement";
import Details from '../Projects/Details';

export const ProjectCard = ({data}) => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const handleShow = ()=> {
   
    setFullscreen(true);
    setShow(true);
  }
  return (
    <>
    
        <CardBox>
          <Media background={data.img} />
          <CardContent
            style={{ textAlign: "center", backgroundColor: "#2D343E" }}
          >
            <Title>{data.title}</Title>
            <Code>
              {data.code.map((langs, index) => (
                <Desc key={index}>{langs}</Desc>
              ))}
            </Code>
          </CardContent>
          <CardActions
            style={{ justifyContent: "center", backgroundColor: "#2D343E",paddingBottom:"20px"}}
          >
            <Links target="_blank" size="small" href={data.live}>
              <AiFillEye
                style={{ marginRight: "8px", textDecoration: "none" }}
              />
              Live Link
            </Links>
            <Links size="small" target="_blank" href={data.source}>
              Source Code
            </Links>
            <Links onClick={handleShow} size="small">
             Details
            </Links>
              <Details open={show}  fullscreen={fullscreen} onClose={()=> setShow(false)} data={data}/>
          </CardActions>
        </CardBox>

    </>
  );
};
