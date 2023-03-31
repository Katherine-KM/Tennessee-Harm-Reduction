import styled from 'styled-components';

const ButtonComponent = styled.button`
font-weight: 700;
font-size: ${props => props.size === 'lg' ? '17px': '14px'};
line-height: 24px;
text-align: center; 
border-radius: 570px;
max-width: ${props => props.size === 'lg' ? '280px' : props.size === 'xl' ? '500px': '150px'};
padding: ${props => 
    props.size === 'lg' ? '10px 25px'
    : props.size === 'sm' ? '6px 21px'
    : '5px 10px'}; 
color: ${props => 
    props.bgColor === 'black' ? 'white'
    : props.bgColor === 'white' ? 'black'
    : 'white'}; 
background-color: ${props => 
    props.bgColor === 'black' ? 'black'
    : props.bgColor === 'white' ? 'white'
    : '#EB8C5B'};
border: 2px solid ${props =>
    props.bgColor === 'white' ? 'black'
    : props.bgColor === 'black' ? 'black'
    : '#EB8C5B'};
`

const Button = ({ type, className, id, onClick, children, size, bgColor }) => {
  return (
    <ButtonComponent
      type={type ? type : "button"}
      className={className ? `btn-component ${className}` : "btn-component"}
      id={id}
      onClick={onClick}
      size={size}
      bgColor={bgColor}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
