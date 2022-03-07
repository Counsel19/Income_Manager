// import { useState } from "react/cjs/react.development";

const FormWrap = ({
  onUpdate,
  income,
  setIncome,
  date,
  setDate,
  submitted,
  setSubmitted,
  name,
  description,
  setDescription,
  amount,
  setAmount,
  budgetDate,
  setBudgetDate,
  onAdd,
}) => {

  //Event handler to handle submitting the income form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!income && !date) {
      alert("Please Enter all fields");
      return;
    }
    
    setSubmitted((submitted) => !submitted);

    onUpdate();
  };

  //Event Handler to handle submitting the budget form
  const handleAddNewBudget = (e) => {
    e.preventDefault();

    if (!description && !amount && !budgetDate) {
        alert("Please Enter all fields");
        return;
    }

    setSubmitted((submitted) => !submitted);

    onAdd();
  };

  return (
    <div>
      {name !== "newBudget" ? (
        <form action="POST" onSubmit={handleSubmit}>
          <h3 className="form-caption">Update Income</h3>

          <div className="form-wrap">
            <label htmlFor="text">Income Amount in (&#8358;) </label>
            <input
              type="text"
              name="text"
              onChange={(e) => setIncome(e.target.value)}
            />
          </div>
          <div className="form-wrap">
            <label htmlFor="date">Date</label>
            <input
              type="text"
              name="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <input type="submit" value="Change" />
        </form>
      ) : (
        <form action="POST" onSubmit={handleAddNewBudget}>
          <h3 className="form-caption2">Add Budget</h3>

          <div className="form-wrap2">
            <label htmlFor="text1">Budget Description</label>
            <input
              type="text"
              name="text1"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-wrap2">
            <label htmlFor="text2">Budget Amount in (&#8358;)</label>
            <input
              type="text"
              name="text2"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="form-wrap2">
            <label htmlFor="date">Date</label>
            <input
              type="text"
              name="date"
              onChange={(e) => setBudgetDate(e.target.value)}
            />
          </div>

          <input type="submit" value="Add Budget" />
        </form>
      )}
    </div>
  );
};

export default FormWrap;
