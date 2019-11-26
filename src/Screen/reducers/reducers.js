const initialState = 'EXAMPLE';
export const EXAMPLE_ACTION = 'EXAMPLE_ACTION';

export default function (state = initialState, action) {
    switch (action.type) {
        case EXAMPLE_ACTION: {
            return action.data
        }
        default: return state;
    }
};