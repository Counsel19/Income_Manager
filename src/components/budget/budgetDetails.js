import styled from "styled-components";
import IconsWrapper from "./IconsWrapper";


const BudgetContent = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 0.9fr 1fr;
  align-items: center;
  background-color: #ffe5d1;
  padding: 10px;
  border-radius: 5px;
  color: var(--light-color);
  margin-bottom: 10px;
`;

const Description = styled.div``;

const Amount = styled.div`
  text-align: center;
`;

const BudgetDetails = ({ budget, id, onDelete, update, setUpdate, index, setIndex }) => {



  return (
    <div>
      <BudgetContent>

        <Description>
          {budget.description}
          <div>{budget.day}</div>
        </Description>

        <Amount>{budget.amount}</Amount>

        <IconsWrapper
          onDelete={onDelete}
          id={id}
          update={update}
          setUpdate={setUpdate}
          index={index}
          setIndex = {setIndex}
        />

      </BudgetContent>
    </div>
  );
};

export default BudgetDetails;
