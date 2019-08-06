import authReducer from '../../reducers/auth';

test('should set uuid for login', () => {
    const action = { type: 'LOGIN', uid: 'asdf1234' };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});


test('should clear uid for logout', () => {
    const action = { type: 'LOGOUT' };
    const state = authReducer({uid: 'asdf1234'}, action);
    expect(state).toEqual({});
});

