import * as actionType from './constant';
const inititalState = {
  data: null,
  errorCode: null,
  dataLoading: false,
  dataSucess: false,
};

export const DataScreenReducer = (state = inititalState, action) => {
  switch (action.type) {
    case actionType.GET_WORLD_DETAILS_PROGRESS:
      return {
        ...state,
        dataLoading: true,
      };

    case actionType.GET_WORLD_DETAILS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        dataSucess: true,
      };

    case actionType.GET_WORLD_DETAILS_FAILURE:
      return {
        ...state,
        errorCode: action.payload,
      };
    case actionType.REST_ALL_VALUE:
      return {
        inititalState,
      };

    default:
      return state;
  }
};
