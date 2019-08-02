import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';


test('Should add expenses amount values', () => {
    const result = getExpensesTotal(expenses);
    expect(result).toBe(114195);
});

test('Should result 0 when no expense passed', () => {
    const result = getExpensesTotal();
    expect(result).toBe(0)
});

test('Should result 0 when no expense passed', () => {
    const result = getExpensesTotal([expenses[0]]);
    expect(result).toBe(195)
});