import { createAction } from "@reduxjs/toolkit";

const initialState = {
  customerAddress: "",
  addressNotNull: false,
  storeId: "",
  storeIdNotNull: false,
  storeAddress: "",
  storePhone: "",
  customerEmail: "",
  customerPhone: "",
  customerFirst: "",
  customerLast: "",
  itemId: [],
  itemName: [],
  drinksMenuOpen: false,
  pizzaMenuOpen: false,
  breadMenuOpen: false,
  dessertMenuOpen: false,
  pastaMenuOpen: false,
  saladMenuOpen: false,
  sandwichMenuOpen: false,
  wingsMenuOpen: false,
  isError: false,
  missingField: false
};

const ADDRESS_SAVED = createAction("ADDRESS_SAVED");
const CUSTOMER_CONTACT = createAction("CUSTOMER_CONTACT");
const STORE_INFO_SAVED = createAction("STORE_INFO_SAVED");
const SAVE_ITEM = createAction("SAVE_ITEM");
const CLEAR_ORDER = createAction("CLEAR_ORDER");
const OPEN_DRINKS_MENU = createAction("OPEN_DRINKS_MENU");
const OPEN_PIZZA_MENU = createAction("OPEN_PIZZA_MENU");
const OPEN_BREAD_MENU = createAction("OPEN_BREAD_MENU");
const OPEN_DESSERT_MENU = createAction("OPEN_DESSERT_MENU");
const OPEN_PASTA_MENU = createAction("OPEN_PASTA_MENU");
const OPEN_SANDWICH_MENU = createAction("OPEN_SANDWICH_MENU");
const OPEN_SALAD_MENU = createAction("OPEN_SALAD_MENU");
const OPEN_WINGS_MENU = createAction("OPEN_WINGS_MENU");
const DISPLAY_OROER_ERROR = createAction("DISPLAY_ORDER_ERROR");
const DISPLAY_MISSING_FIELD_ERROR = createAction("DISPLAY_MISSING_FIELD_ERROR");

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADDRESS_SAVED.type:
      return {
        ...state,
        customerAddress: action.customerInfo,
        addressNotNull: true
      };
    case CUSTOMER_CONTACT.type:
      return {
        ...state,
        customerEmail: action.customerEmail,
        customerPhone: action.customerPhone,
        customerFirst: action.customerFirst,
        customerLast: action.customerLast
      };
    case STORE_INFO_SAVED.type:
      return {
        ...state,
        storeId: action.storeId,
        storeIdNotNull: true,
        storeAddress: action.storeAddress,
        storePhone: action.storePhone
      };
    case SAVE_ITEM.type:
      return {
        ...state,
        itemId: state.itemId.concat(action.itemId),
        itemName: state.itemName.concat(action.itemName + ", ")
      };
    case CLEAR_ORDER.type:
      return {
        ...state,
        itemId: [],
        itemName: []
      };
    case OPEN_DRINKS_MENU.type:
      if (state.drinksMenuOpen === false) {
        return {
          ...state,
          drinksMenuOpen: true
        };
      } else {
        return {
          ...state,
          drinksMenuOpen: false
        };
      }
    case OPEN_PIZZA_MENU.type:
      if (state.pizzaMenuOpen === false) {
        return {
          ...state,
          pizzaMenuOpen: true
        };
      } else {
        return {
          ...state,
          pizzaMenuOpen: false
        };
      }
    case OPEN_BREAD_MENU.type:
      if (state.breadMenuOpen === false) {
        return {
          ...state,
          breadMenuOpen: true
        };
      } else {
        return {
          ...state,
          breadMenuOpen: false
        };
      }
    case OPEN_DESSERT_MENU.type:
      if (state.dessertMenuOpen === false) {
        return {
          ...state,
          dessertMenuOpen: true
        };
      } else {
        return {
          ...state,
          dessertMenuOpen: false
        };
      }
    case OPEN_PASTA_MENU.type:
      if (state.pastaMenuOpen === false) {
        return {
          ...state,
          pastaMenuOpen: true
        };
      } else {
        return {
          ...state,
          pastaMenuOpen: false
        };
      }
    case OPEN_SANDWICH_MENU.type:
      if (state.sandwichMenuOpen === false) {
        return {
          ...state,
          sandwichMenuOpen: true
        };
      } else {
        return {
          ...state,
          sandwichMenuOpen: false
        };
      }
    case OPEN_SALAD_MENU.type:
      if (state.saladMenuOpen === false) {
        return {
          ...state,
          saladMenuOpen: true
        };
      } else {
        return {
          ...state,
          saladMenuOpen: false
        };
      }
    case OPEN_WINGS_MENU.type:
      if (state.wingsMenuOpen === false) {
        return {
          ...state,
          wingsMenuOpen: true
        };
      } else {
        return {
          ...state,
          wingsMenuOpen: false
        };
      }
    case DISPLAY_OROER_ERROR.type:
      return {
        ...state,
        isError: true
      };
    case DISPLAY_MISSING_FIELD_ERROR.type:
      return {
        ...state,
        missingField: true
      };
    default:
      return state;
  }
}

export default reducer;
