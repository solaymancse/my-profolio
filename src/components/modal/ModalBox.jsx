import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import {Container } from "./ModalElement";
import {H1, Input } from "../Services/ServicesElements";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #fff',
  boxShadow: 24,
  p: 4,

};

export const ModalBox = ({ open, onClose, data }) => {

  return (
    <Container>
     
      <Modal
       open={open}
       onClose={onClose}
       closeAfterTransition
       BackdropComponent={Backdrop}
       BackdropProps={{
         timeout: 500,
       }}
    >
       <Fade in={open}>
          <Box sx={style}>
          <H1 color='#333'>{data.title}</H1>
            
      <form>
        <Input type="text" placeholder="Name"/>
        <Input type="email" placeholder="Email"/>
        <Input type="text" placeholder="What's App Number"/>
        <select style={{width:"100%",padding:"5px",marginTop:"10px",border: "0.5px solid lightgray",color:'gray'}}>
            <option >--- Select Service</option>
            <option>Front End Design</option>
            <option>Back End Design</option>
            <option>Full Stack Web Application</option>
            <option>Database Design</option>
            <option>Convert XD,PSD,HTMl</option>
            <option>Web Solution & Customization</option>
        </select>
        <Input type="submit" value="SEND"/>
      </form>
          </Box>
        </Fade>

  
    </Modal>
    
    </Container>
  );
};
