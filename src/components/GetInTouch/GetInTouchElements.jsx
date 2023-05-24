import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    gap: 20px;

    @media (min-width: 320px) and (max-width: 480px){
    flex-direction: column;
    padding: 10px;
}

`
export const H1 = styled.h1`
   

    @media (min-width: 320px) and (max-width: 480px){
    font-size: 18px;
    font-weight: normal;
    margin: 10px;
}

`
export const Left = styled.div`
flex: 1;
`
export const Form = styled.form`
display: flex;
flex-direction: column;
`
export const Right = styled.div`
flex: 1;
`
export const Input = styled.input`
    padding: 10px;
    border-radius: 10px;
    outline: none;
    border: 0.5px solid #333;
    margin-bottom: 10px;
    background-color: #104241;
    
`
export const Textarea = styled.textarea`
   height: 150px;
   outline: none;
   margin-bottom: 40px;
   border-radius: 5px;
   background-color: #104241;
   border-color: #104241;
`
export const Button = styled.input`
   background-color: #009572;
   color: #fff;
   padding: 10px;
   border-radius: 10px;
   border: 0.5px solid #333;
   cursor: pointer;

   &:hover{
       background-color: #333;
   }
`

