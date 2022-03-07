import styled from "styled-components";

const BtnWrapper = styled.button`
        padding: 1rem;
        background-color: var(--light-color);
        border-radius: 5px;
        color: #fff;
        border: none;
        cursor: pointer;
    `

const Button = ({title, onClick}) => {

    return (
        <BtnWrapper onClick={onClick}>{title}</BtnWrapper>
    );
}

export default Button;