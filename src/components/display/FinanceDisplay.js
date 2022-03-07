import { useEffect, useState } from "react";
import styled from "styled-components";
import DisplayContent from "./DisplayContent";

const DisplayContainer = styled.section`
  width: 100%;
  height: 100px;
  margin: 20px 0;
  position: relative;
  display: flex;
  justify-content: space-around;
  column-gap: 10px;
`;

const FinanceDisplay = ({
  income,
  date,
  submitted,
  setSubmitted,
  balance,
  deleted,
  setDeleted
}) => {

  const [incomeAmount, setIncomeAmount] = useState(0)
  const [balanceAmount, setBalanceAmount] = useState(0)
  const [displayedDate, setDisplayedDate] = useState("")

  

  useEffect(() => {
    
    setBalanceAmount(balance)

    if(submitted){
      setIncomeAmount(income);
      setDisplayedDate(date)

      setSubmitted(submitted => !submitted);
    }

    if(deleted){
      setDeleted(deleted => !deleted)
    }
  }, [date, income, submitted, setSubmitted ,balance, deleted, setDeleted])


  return (
    <DisplayContainer>
      <DisplayContent name="Income (&#8358;)" amount={incomeAmount} />
     
      <span className="date-stamp">Last updates: {displayedDate}</span>

      <DisplayContent name="Balance (&#8358;)" amount={balanceAmount} />
    </DisplayContainer>
  );
};

export default FinanceDisplay;
