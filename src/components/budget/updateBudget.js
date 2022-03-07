const UpdateBudget = ({
  setDescription,
  setAmount,
  setBudgetDate,
  id,
  onUpdate,
  description,
  amount,
  budgetDate,
  update,
  setUpdate,
  setIndex
}) => {

  const handleOnUpdateData = () => {
    let editted = {
      id: id,
      description: description,
      amount: amount,
      budgetDate: budgetDate,
    };

    onUpdate(id, editted);

    setIndex("")

    setUpdate(update => !update)
  };
  return (
    <form action="POST" onSubmit={handleOnUpdateData}>
      <h3 className="form-caption2">Edit Budget</h3>

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

      <input type="submit" value="Save" className="save"/>
    </form>
  );
};

export default UpdateBudget;
