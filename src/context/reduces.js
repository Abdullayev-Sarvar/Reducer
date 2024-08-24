
export const InitialState = {
    email: "",
    password: "",
    age: 0,
    users: JSON.parse(localStorage.getItem('users')) || []
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "email_change":
            return { 
                ...state, 
                email: action.email 
            };
        case "password_change":
            return { 
                ...state, 
                password: action.password 
            };
        case "age_change":
            return { 
                ...state, 
                age: action.age 
            };
        case "add_user":
            const updatedUsers = [...state.users, action.user];
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            return {
                ...state,
                users: updatedUsers
            };
        case "delete_user":
            const filteredUsers = state.users.filter((_, index) => index !== action.index);
            localStorage.setItem('users', JSON.stringify(filteredUsers));
            return {
                ...state,
                users: filteredUsers
            };
        default:
            return state;
    }
};