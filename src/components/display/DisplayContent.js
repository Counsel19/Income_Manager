import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 190px;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Heading = styled.h3`
  color: var(--light-color);
  background-color: inherit;
  text-align: center;
  font-weight: 500;
`;

const Details = styled.p`
  font-size: 24px ;
  color: var(--lighter-color);
  background-color: inherit;
  align-self: flex-end;
`;

const DisplayContent = ({ name, amount }) => {
  return (
    <Wrapper>
      <Heading>{name}</Heading>
      <Details >{amount} </Details>
    </Wrapper>
  );
};

export default DisplayContent;
