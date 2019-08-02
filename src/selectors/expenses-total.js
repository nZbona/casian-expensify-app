export default (expenses = []) => {
    return expenses
    .map((expense) => expense.amount)
    .reduce((acc, currValue) => (acc + currValue), 0);
};