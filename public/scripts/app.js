'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _AppRouter = require('./routers/AppRouter');

var _AppRouter2 = _interopRequireDefault(_AppRouter);

var _reactRedux = require('react-redux');

var _expenses = require('./actions/expenses');

var _filters = require('./actions/filters');

var _expenses2 = require('./selectors/expenses');

var _expenses3 = _interopRequireDefault(_expenses2);

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

require('normalize.css/normalize.css');

require('./styles/styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore2.default)();

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

store.dispatch((0, _expenses.addExpense)({ description: 'Water Bill', amount: 50, createdAt: 100 }));
store.dispatch((0, _expenses.addExpense)({ description: 'Gas Bill', amount: 150, createdAt: 1000 }));
store.dispatch((0, _expenses.addExpense)({ description: 'Rent', amount: 103220, createdAt: 500 }));

var jsx = _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_AppRouter2.default, null)
);

_reactDom2.default.render(jsx, document.getElementById('app'));

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
