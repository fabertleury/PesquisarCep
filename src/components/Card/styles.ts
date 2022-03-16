import styled from 'styled-components';

export const Container = styled.div`
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   h1 {
    font-size: 3rem;
    color: #fff;
  
   }


  
`

export const Content = styled.div`
  background-color: var(--background-input);
  background-color: var(--background-input);
  padding: 15px;
  margin: 34px 0;
  display: flex;
  border-radius: 7px;
  box-shadow: 1px 3px 8px var(--shadow);
  font-size: 20px;
  color: #fff;
  border: 0;
  outline: none;
  margin-right: 8px;

  input {
    background-color: transparent;
    border: none;
    font-size: 20px;
    color: #fff;
    outline: none;
    margin-right: 8px;

    ::placeholder{
      color: #f1f1f1;
    }
  }

  button {
    background-color: transparent;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.5 
    
  }

  &:hover {
    button {
      transform: scale(1.2);
    }
      
    }
    


`;


export const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    width: 500px;
    border-radius: 8px;

    h2 {
      margin: 16px 0;
      font-size: 39px;
    }

    span {
      margin-bottom: 16px;
      font-weight: bold;  
    }

`;

