import { addExpense, editExpense, removeExpense  } from '../../actions/expenses';

test('should set up remove Expense action object', () => {
    const action = removeExpense({ id: '123abc' });

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('sgould set up edit expense action object', () => {
    const action = editExpense('123abc', {note: 'new note value'});

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'new note value' }
    })
});

test('should set up addExpense action objecttt', () => {
    const expenseData = {
        description: 'Rent',
        amount: 1000,
        createdAt: 1000,
        note: 'This is last months rent'
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });


});


test('should set up addExpense action default object', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            createdAt: 0,
            note: '',
            id: expect.any(String)
        }
    })
})

