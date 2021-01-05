import * as React from 'react';

const UserStateContext = React.createContext();

const UserDispatchContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    // LOG OUT
    case 'start logout': {
      console.log('reducer: start logout');
      return {
        ...state,
      };
    }
    case 'finish logout': {
      console.log('reducer: finish logout');
      return {
        ...state,
        user: null,
      };
    }
    case 'fail logout': {
      console.log('reducer: fail logout', action.error);
      return {
        ...state,
        user: null,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  const [state, dispatch] = React.useReducer(userReducer, {
    user: null,
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  const context = React.useContext(UserStateContext);

  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }

  return context;
}

function useUserDispatch() {
  const context = React.useContext(UserDispatchContext);

  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider');
  }

  return context;
}

async function signOut(dispatch, authStorage, apolloClient) {
  dispatch({ type: 'start logout' });

  try {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();

    dispatch({ type: 'finish logout' });
  } catch (error) {
    dispatch({ type: 'fail logout', error });
  }
}

export { UserProvider, useUserState, useUserDispatch, signOut };
