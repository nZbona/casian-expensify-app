import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';


test('should render ExpensesSummary component correctly with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={21342} />);
    expect(wrapper).toMatchSnapshot();
});


test('should render ExpensesSummary component correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={21} expensesTotal={2134363642} />);
    expect(wrapper).toMatchSnapshot();
});