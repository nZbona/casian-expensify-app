import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses  from './selectors/expenses'
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store= configureStore();



// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

store.dispatch(addExpense({description: 'Water Bill', amount: 50, createdAt: 100}))
store.dispatch(addExpense({description: 'Gas Bill', amount: 150, createdAt: 1000}))
store.dispatch(addExpense({description: 'Rent', amount: 103220, createdAt: 500}))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));




// class OldSyntax{
//     constructor(){
//         this.name='sads';
//     }
// }

// const oldSyntax = new OldSyntax();
// console.log(oldSyntax);

// class NewSyntax{
//     name='Jen';
// }

// const newSintax = new NewSyntax();
// console.log(newSintax);