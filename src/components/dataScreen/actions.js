import * as actionType from './constant';
export const GetWorldInfo = payload => {
  return {
    type: actionType.GET_WORLD_DETAILS,
    payload: payload,
  };
};

export const RestAction = () => {
  return {
    type: actionType.REST_ALL_VALUE,
  };
};
