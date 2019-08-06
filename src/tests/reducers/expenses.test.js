import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set up ', () => {
   const state = expensesReducer(undefined, {type: '@@INIT'});
   expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action ={
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('shoult not remove expense if id not found', () => {
    const action ={
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const createdAt = moment(0);
    const expense = {
        id: '3532',
        description: 'Electric',
        note: '',
        amount: 600,
        createdAt
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);


    expect(state).toEqual([...expenses, expense]);
});

test('should edit expense', () => {
    const id = expenses[2].id;
    const updates = {
        description: 'This is the new text'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }

    const state = expensesReducer(expenses, action);

    expect(state[2].description).toBe(updates.description);
    
});

test('should not edit expense if expense not found', () => {
    const id = '-4543';
    const updates = {
        description: 'This is the new text'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
    
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[1]]);
});
