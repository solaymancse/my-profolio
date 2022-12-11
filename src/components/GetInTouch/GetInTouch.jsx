import React,{useState} from "react";

import {useNavigate} from 'react-router-dom';
import { Wrapper, Left, Right, Input, Form,Button,Textarea,H1 } from "./GetInTouchElements";
import Map from "../Map/Map";
import swal from 'sweetalert';


export const GetInTouch = () => {
 const [data,setData] = useState();
 const history = useNavigate();
const handleChange = (e)=> {
  setData({...data,[e.target.name]:e.target.value});
}
  
  const handleSubmit = (e)=> {
    e.preventDefault();
    setData(e.target.value === "");
    swal({
      title: "Thanks For Your Email. ",
      icon: "success",
      button: history('/'),
    });



  };
  
  return (
    <div>
      <H1>Get In Touch</H1>
      <Wrapper>
        <Left>
          <Form onSubmit={handleSubmit}>
         
            <Input placeholder="Name" name="name" onChange={handleChange} />
            <Input placeholder="Email" name="email" onChange={handleChange} />
            <Input placeholder="Subject" name="subject" onChange={handleChange} />
            <Textarea placeholder="Message" type="text" name="msg" onChange={handleChange} />
            <Button type="submit" />
          </Form>
        </Left>
        <Right>
          <Map/>
        </Right>
      </Wrapper>
    </div>
  );
};
