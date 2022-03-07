import styled from "styled-components";
import BudgetFrame from "./BudgetFrame";
import Button from "../Button";
import FormWrap from "../new-income/FormWrap";

const BudgetWrap = styled.section`
  padding: 10px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: 15px;
`;

const Heading = styled.h2`
  color: var(--dark-color);
  margin-bottom: 8px;
  background-color: inherit;
`;

const Budget = ({
  budgets,
  onAdd,
  newBudget,
  description,
  setDescription,
  amount,
  setAmount,
  budgetDate,
  setBudgetDate,
  submitted,
  setSubmitted,
  onDelete,
  totalBudget,
  update,
  setUpdate,
  onUpdate,
  index, 
  setIndex
}) => {
  return (
    <BudgetWrap>
      <div className="case">
        <Heading>Budget</Heading>
        <p className="total">Total: {totalBudget}</p>
      </div>

      <BudgetFrame
        budgets={budgets}
        onDelete={onDelete}
        update={update}
        setUpdate={setUpdate}
        onUpdate = {onUpdate}
        description={description}
        amount={amount}
        budgetDate={budgetDate}
        setDescription={setDescription}
        setAmount={setAmount}
        setBudgetDate={setBudgetDate}
        index={index}
        setIndex = {setIndex}
      />

      {!newBudget && <Button title="New Budget" onClick={onAdd} />}

      {newBudget && (
        <FormWrap
          name="newBudget"
          description={description}
          setDescription={setDescription}
          amount={amount}
          setAmount={setAmount}
          budgetDate={budgetDate}
          setBudgetDate={setBudgetDate}
          onAdd={onAdd}
          submitted={submitted}
          setSubmitted={setSubmitted}
        />
      )}
    </BudgetWrap>
  );
};

export default Budget;
