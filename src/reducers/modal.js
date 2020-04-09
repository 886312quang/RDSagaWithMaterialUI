import * as types from "./../constants/modals";

const initialState = {
  showModal: false,
  component: null,
};

const reducer = (state = initialState, action) => {
  switch (action.types) {
    case types.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case types.HIDE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    case types.CHANGE_MODAL_TITLE:
      const { title } = action.title;
      return {
        ...state,
        title,
      };
    case types.CHANGE_MODAL_CONTENT:
      const { component } = action.component;
      return {
        ...state,
        component,
      };

    default:
      return state;
  }
};
export default reducer;
