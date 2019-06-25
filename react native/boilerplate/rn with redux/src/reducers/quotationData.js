import { GET_DATA } from "../actions/getData";

const initialState = {
  quotationData: []
};

export default function(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case GET_DATA:
      return {
        ...state,
        userData: [
          {
            id: 1,
            question: "1+1",
            imgBefore: "asdasd",
            imgAfter: "qweqwe"
          },
          {
            id: 2,
            question: "2+2",
            imgBefore: "asdasd",
            imgAfter: "qweqwe"
          },
          {
            id: 3,
            question: "3+3",
            imgBefore: "asdasd",
            imgAfter: "qweqwe"
          }
        ]
      };
    default:
      return state;
  }
}
