import moment from 'moment';
import filtersReducer from '../../reducers/filters';
import { end } from 'worker-farm';

// Set state default values
test('should set up default values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sort by amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});

    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sort by date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    
    const action = {
        type: 'SORT_TEXT_FILTER',
        text: 'asdf'
    };
    const state = filtersReducer(undefined, action);

    expect(state.text).toBe('asdf');
});

test('should set startDate filter', () => {
    const startDate = moment().add(31, 'days').startOf('month');
    const action = {
        type: 'SET_START_DATE',
        startDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(startDate);
});

test('should set endDate filter', () => {
    const endDate = moment().add(31, 'days').endOf('month');
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(endDate);
});

