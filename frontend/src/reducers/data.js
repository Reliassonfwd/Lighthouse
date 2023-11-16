const initialState = {
  data: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload,
      };
    case 'CREATE_DATA_SUCCESS':
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case 'DELETE_DATA_SUCCESS':
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.payload),
      };
    case 'UPDATE_DATA_SUCCESS':
      return {
        ...state,
        data: state.data.map(item => (item.id === action.payload.id ? action.payload : item)),
      };
    default:
      return state;
  }
};

export default dataReducer;