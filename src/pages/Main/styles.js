import styled, { keyframes, css } from 'styled-components';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';

const animate = keyframes`
      from{
        transform: rotate(0deg);
      }
    
      to{
        transform: rotate(360deg);
      }
    `;

export const Container = styled.div`
  padding: 30px;
  margin: 100px 20px;
  display:flex;
  align-items: center;
  justify-content: center; 
  flex-direction: column;
`;

export const H1 = styled.h1`
text-align: center;
text-transform: uppercase;
color:white;
position: relative;
font-family: Verdana, Geneva, Tahoma, sans-serif;

text-shadow: 1px 1px 1px #919191, 
1px 2px 1px #919191, 
1px 3px 1px #919191, 
1px 4px 1px #919191, 


1px 18px 6px rgba(16,16,16,0.4),
1px 22px 10px rgba(16,16,16,0.2),
1px 25px 35px rgba(16,16,16,0.2),
1px 30px 60px rgba(16,16,16,0.4);

@media screen and (max-width:388px){
    font-size: 2.6rem;
    }

`;

export const Main = styled.div`
 max-width: 700px;
padding: 30px;
display:flex;
    align-items: center;
    flex-direction:column;


h1{
    font-size: 2rem;
    display:flex;
    align-items: center;
    flex-direction:row;
    
    svg{
      margin-right: 10px;
      font-size: 2.5rem;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display:flex;
  flex-direction: row;
`;

export const InputContainer = styled.div`
position:relative;

input{
    color: rgb(218 255 255);
    flex:1;
    border: 1px solid ${(props) => (props.error ? '#FF0000' : '#eee')};
    padding: 10px 15px;
    border: 0;
    border-bottom: 2px solid rgb(200, 200,200);
    outline: 0;
    font-size: 1.7rem;
    background: transparent;
    /* background: ${({ loading }) => (loading ? 'blue' : 'red')}; */

    &:focus, &:valid {
        border-bottom: 2px solid #00A1C9;;
    }

    &:focus ~ label,  &:valid ~ label{
        transform: translateY(-28px);
        font-size: 1.4rem;
        color: #00A1C9;
    }

    @media screen and (max-width:388px){
    width:200px
    }
  }

  label{
    position:absolute;
    left:0;
    bottom: 5px;
    color: rgb(150, 150, 150);
    cursor: text;
    transition: .5s;
    font-size: 2rem;
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
    border: 0;
    background: transparent;
    margin-left: 10px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;


  &[disabled]{
    cursor: not-allowed;
    opacity: .5;
  }

  svg{
    animation: ${({ loading }) =>
      loading ? 'animate 300ms linear infinite' : 'none'};
  }
`;

export const RepositoriesContainer = styled.div`

  margin-top: 20px;
`;

export const Card = styled(Tilt)`
    margin-top:20px;
    padding: 10px ;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    backdrop-filter: blur(2px);
    border: 2px solid rgba(255,255,255, 0.1);
    border-radius: 2rem;

   span{
    font-size: 2rem;
    color: #000;
    margin-right:20px;
   }

    a{
      color:#0D2636;
      text-decoration: none;
    }

    svg{
        font-size: 2rem;
    }
`;

export const RepositoryInfo = styled(Link)`
svg{
    font-size: 2.5rem;
    margin-right:10px;
}
`;

export const DeleteButton = styled.button.attrs({
  type: 'button',
})`
  background: transparent;
  color:#0D2636;
  border:0;
  padding: 8px 7px;
  outline:0;
  border-radius: 4px;

  svg{
    font-size: 2rem;
  }
`;
