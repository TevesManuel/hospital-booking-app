import { createContext, useReducer, useContext, ReactNode } from 'react';

type User = {
    email: string,
    names: string;
    lastNames: string,
    birthDate: string
    type: string
    token: string;
} | null;

type Action = 
    | { type: 'SET'   , payload: User }
    | { type: 'LOGIN' , payload: User } 
    | { type: 'LOGOUT'                };

const userReducer = (state: User, action: Action): User => {
    switch (action.type) {
        case 'SET':
            window.localStorage.setItem('user', JSON.stringify(action.payload));
            return action.payload;
        case 'LOGIN':
            window.localStorage.setItem('user', JSON.stringify(action.payload));
            return action.payload;
        case 'LOGOUT':
            window.localStorage.removeItem('user');
            return null;
        default:
            return state;
    }
};

const UserContext = createContext<[User, React.Dispatch<Action>] | undefined>(undefined);

type UserContextProviderProps = {
    children: ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, userDispatch] = useReducer(userReducer, null);

    return (
        <UserContext.Provider value={[user, userDispatch]}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserValue = (): User => {
    const userAndDispatch = useContext(UserContext);
    if (!userAndDispatch) {
        throw new Error('useUserValue must be used within a UserContextProvider');
    }
    return userAndDispatch[0];
};

export const useUserDispatch = (): React.Dispatch<Action> => {
    const userAndDispatch = useContext(UserContext);
    if (!userAndDispatch) {
        throw new Error('useUserDispatch must be used within a UserContextProvider');
    }
    return userAndDispatch[1];
};

export default UserContext;
