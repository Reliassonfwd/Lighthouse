export const fetchDataSuccess = (data) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: data,
});

export const createDataSuccess = (newData) => ({
  type: 'CREATE_DATA_SUCCESS',
  payload: newData,
});

export const deleteDataSuccess = (id) => ({
  type: 'DELETE_DATA_SUCCESS',
  payload: id,
});

export const updateDataSuccess = (updatedData) => ({
  type: 'UPDATE_DATA_SUCCESS',
  payload: updatedData,
});