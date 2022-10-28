import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #FFF;
  border-radius: 4rem;
  box-shadow: 0 0 20px rgba(0,0,0, 0.2);
  padding: 30px;
  margin: 80px auto;

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



  input{
    flex:1;
    border: 1px solid ${(props) => (props.error ? '#FF0000' : '#eee')};
    padding: 10px 15px;
    border-radius: 4rem;
    font-size: 1.7rem;
    background: ${({ loading }) => (loading ? 'blue' : 'red')}

  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background:#0D2636;
  border: 0;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;


  &[disabled]{
    cursor: not-allowed;
    opacity: .5;
  }

  svg{
    animation: ${({ loading }) =>
      loading ? 'animate 300ms linear infinite' : 'none'};
  }

`;

export const List = styled.ul`
  list-style:none;
  margin-top: 20px;

  li{
    padding: 15px 0;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;

    & + li{
      border-top: 1px solid #eee;
    }

    a{
      color:#0D2636;
      text-decoration: none;
    }


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
`;

//Keyframes

const animate = keyframes`
      from{
        transform: rotate(0deg);
      }
    
      to{
        transform: rotate(360deg);
      }
    `;
