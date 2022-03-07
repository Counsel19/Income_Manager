import styled from "styled-components";
import BudgetMain from "./BudgetMain";

const BudgetContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  background-color: inherit;
`;

const BudgetHeadings = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  width: 100%;
  color: var(--light-color);
  padding-top: 10px;
  margin-bottom: 10px;
  background-color: inherit;
`;

const DescHeading = styled.h3`
  font-size: 1rem;
  margin-left: 20px;
`;

const AmountHeading = styled.h3`
  font-size: 1rem;
`;
const IconPlaceHolder = styled.div`
  background-color: inherit;
`;

const BudgetFrame = ({
  budgets,
  onDelete,
  update,
  setUpdate,
  onUpdate,
  description,
  amount,
  budgetDate,
  setDescription,
  setAmount,
  setBudgetDate,
  index,
  setIndex
}) => {
  return (
    <BudgetContainer>
      <BudgetHeadings>
        <DescHeading>Description</DescHeading>
        <AmountHeading>Amount (&#8358;)</AmountHeading>
        <IconPlaceHolder />
      </BudgetHeadings>

      <BudgetMain
        budgets={budgets}
        onDelete={onDelete}
        update={update}
        setUpdate={setUpdate}
        onUpdate={onUpdate}
        description={description}
        amount={amount}
        budgetDate={budgetDate}
        setDescription={setDescription}
        setAmount={setAmount}
        setBudgetDate={setBudgetDate}
        index={index}
        setIndex = {setIndex}
      />
    </BudgetContainer>
  );
};

export default BudgetFrame;
