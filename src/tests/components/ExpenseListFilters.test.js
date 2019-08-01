import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
        filters={filters}
        setTextFilter = {setTextFilter}
        sortByDate = {sortByDate}
        sortByAmount = {sortByAmount}
        setStartDate = {setStartDate}
        setEndDate = {setEndDate}
        />
        );


});

test('Shoult render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Shoult render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('Shoult handle text change', () => {
    const value = 'newTexttt';
    wrapper.find('input').simulate('change', {
        target: { value }
    });

    expect(setTextFilter).toHaveBeenLastCalledWith(value);
    // expect(wrapper).toMatchSnapshot();
});

test('Should sort by date', () => {
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDate).toHaveBeenLastCalledWith();
});

test('Should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenLastCalledWith();
});

test('Should handle date changed', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(6, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('Should handle date focus change', () => {
    const calendarFocused = moment(0).add(6, "years");
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});






