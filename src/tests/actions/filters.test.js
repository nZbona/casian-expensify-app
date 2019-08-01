import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../../actions/filters';
import moment from 'moment';

test('shoult set up setTextFilter action default object', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SORT_TEXT_FILTER',
        text: ''
    });
});

test('shoult set up setTextFilter action object', () => {
    const action = setTextFilter('asdf');

    expect(action).toEqual({
        type: 'SORT_TEXT_FILTER',
        text: 'asdf'
    });
});

test('shoult set up sortByAmount action object', () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
});

test('shoult set up sortByDate action object', () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    });
});



test('shoult set up setStartDate action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('shoult set up setEndDate action object', () => {
    const action = setEndDate(moment(0));
    
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});


