import { useState, useEffect } from "react";
import styled from "styled-components";
import FinanceDisplay from "./components/display/FinanceDisplay";
import Budget from "./components/budget/Budget";
import Button from "./components/Button";
import FormWrap from "./components/new-income/FormWrap";

const AppHeading = styled.h1`
  color: #5e001f;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const AppContainer = styled.main`
  width: 40vw;
  margin: 20px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [budgets, setBudget] = useState([
    {
      id: 1,
      description: "To get a HP laptop",
      amount: "50000",
      day: "12th Feb 2022",
    },
    {
      id: 2,
      description: "To pay the house bills",
      amount: "60000",
      day: "12th Feb 2022",
    },
    {
      id: 3,
      description: "To Assist a collegue",
      amount: "1000",
      day: "12th Feb 2022",
    },
    {
      id: 4,
      description: "For feeding",
      amount: "20000",
      day: "12th Feb 2022",
    },
  ]);

  //STATE FOR MANAGING FORM FIELDS
  //For the income form
  const [income, setIncome] = useState(0);
  const [date, setDate] = useState("");

  //for the Budget form
  const [description, setDescription] = useState("");
  const [budgetAmount, setBudgetAmount] = useState("");
  const [budgetDate, setBudgetDate] = useState("");

  //Income Form
  const [incomeForm, setIncomeForm] = useState(false);
  const [newBudget, setNewBudget] = useState(false);

  //Avialable Balance
  const [balance, setBalance] = useState(0);

  //Total Budget
  const [totalBudget, setTotalBudget] = useState(0);

  //key to Edit
  const [index, setIndex] = useState("");

  //Flags
  const [submittedIncome, setSubmittedIncome] = useState(false);
  const [submittedBudget, setSubmittedBudget] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [update, setUpdate] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (budgets.length < 1) {
      setIsEmpty(true);
    }else{
      setIsEmpty(false)
    }
  }, [budgets, isEmpty])

  //Effects for Adding new Budgets
  useEffect(() => {
    let id = Math.floor(Math.random());

    let addedBudget = {
      id: id,
      description: description,
      amount: budgetAmount,
      day: budgetDate,
    };
    if (submittedBudget) {
      setBudget([...budgets, addedBudget]);
      setSubmittedBudget((submittedBudget) => !submittedBudget);
    }
  }, [budgetAmount, budgetDate, budgets, description, submittedBudget]);



  //Updating the Balance
  useEffect(() => {
    if(budgets.length > 0){
      let total = budgets.reduce((prev, current) => {
        return { amount: parseInt(prev.amount) + parseInt(current.amount) };
      });
  
      setTotalBudget(total.amount);
  
    }else{
      setTotalBudget(0)
    }

    setBalance(parseInt(income) - totalBudget);

  }, [budgets, submittedIncome, balance, totalBudget, deleted, isEmpty]);


  //Event handlers
  //Show Income form or not
  const handleNewIncome = () => {
    setIncomeForm((incomeForm) => !incomeForm);
  };

  //Show Budget form or not
  const handleNewBudget = () => {
    if(isEmpty){
      setIsEmpty(isEmpty => !isEmpty)
    }
    setNewBudget((newBudget) => !newBudget);
  };

  //Delete Budget
  const handleDeleteBudget = (id) => {
    setBudget(budgets.filter((budget) => budget.id !== id));

    setDeleted((deleted) => !deleted);
  };

  //Update Data
  const handleUpdateBudget = (id, editted) => {
    let edittedBudget = budgets.map((budget) => {
      if (id === budget.id) {
        return {
          ...budget,
          description: editted.description,
          amount: editted.amount,
          day: editted.budgetDate,
        };
      }
      return budget;
    });

    setBudget(edittedBudget);
  };

  return (
    <div className="App">
      <AppContainer>
       
            <AppHeading>Income Manager</AppHeading>

            <FinanceDisplay
              income={income}
              date={date}
              submitted={submittedIncome}
              setSubmitted={setSubmittedIncome}
              balance={balance}
              deleted={deleted}
              setDeleted={setDeleted}
            />
        
            {!incomeForm ? (
              <Button title="New Income" onClick={handleNewIncome} />
            ) : (
              ""
            )}
            {incomeForm ? (
              <FormWrap
                className="new-income"
                income={income}
                setIncome={setIncome}
                date={date}
                setDate={setDate}
                onUpdate={handleNewIncome}
                submitted={submittedIncome}
                setSubmitted={setSubmittedIncome}
                name="incomeForm"
              />
            ) : (
              ""
            )}

        {!isEmpty ? (
          <>
            <Budget
              budgets={budgets}
              onAdd={handleNewBudget}
              newBudget={newBudget}
              description={description}
              setDescription={setDescription}
              amount={budgetAmount}
              setAmount={setBudgetAmount}
              budgetDate={budgetDate}
              setBudgetDate={setBudgetDate}
              submitted={submittedBudget}
              setSubmitted={setSubmittedBudget}
              onDelete={handleDeleteBudget}
              totalBudget={totalBudget}
              update={update}
              setUpdate={setUpdate}
              onUpdate={handleUpdateBudget}
              index={index}
              setIndex={setIndex}
            />
          </>
        ) : (
          <>
            <p className="alert">No Budget To display</p>
            <Button title="New Budget" onClick={handleNewBudget} />
            {newBudget && (
              <FormWrap
                name="newBudget"
                description={description}
                setDescription={setDescription}
                amount={budgetAmount}
                setAmount={setBudgetAmount}
                budgetDate={budgetDate}
                setBudgetDate={setBudgetDate}
                onAdd={handleNewBudget}
                submitted={submittedBudget}
                setSubmitted={setSubmittedBudget}
              />
          )}
          </>
        )}
      </AppContainer>
    </div>
  );
}

export default App;
