import BudgetDetails from "./budgetDetails";
import UpdateBudget from "./updateBudget";

const BudgetMain = ({
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
      <>
        {budgets.map((budget) => (
          <div key={budget.id}>
            {budget.id === index ? 
              <UpdateBudget
                update={update}
                setUpdate={setUpdate}
                id={budget.id}
                onUpdate={onUpdate}
                description={description}
                amount={amount}
                budgetDate={budgetDate}
                setDescription={setDescription}
                setAmount={setAmount}
                setBudgetDate={setBudgetDate}
                setIndex = {setIndex}
              />
              :
              <BudgetDetails
                key={budget.id}
                id={budget.id}
                budget={budget}
                onDelete={onDelete}
                update = {update}
                setUpdate = {setUpdate}
                index={index}
                setIndex = {setIndex}
              />

            }
          </div>
        ))}
      </>
  );
};

export default BudgetMain;
