import styled from 'styled-components';

const ButtonComponent = styled.button`
font-weight: 700;
line-height: 2rem : clamp ();
border-radius: 570px;
padding: 4px 18px; 
color: white;
background-color: var(--clr-primary-400);
border: 2px solid var(--clr-primary-400);
    &:hover { 
      cursor: pointer;
    }
`

// Hero and the How We Help Large Button
export const LgButtonComponent = styled(ButtonComponent)`
font-size: var(--p-lg-fs);
line-height: clamp(2.2rem, 5vw, 2.4rem);
padding: 13px 30px; 
`

const Button = ({children}) => {
  return (
    <ButtonComponent>
      {children}
    </ButtonComponent>
  );
};

export default Button;
