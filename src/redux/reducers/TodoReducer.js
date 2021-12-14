const ADD_NEW_ITEM = 'mbl/todo/ADD_NEW_ITEM';
const CLEAR = 'mbl/todo/CLEAR';
const UPDATE_ITEM = 'mbl/todo/UPDATE_ITEM';
const UPDATE_FAVORITE = 'mbl/todo/UPDATE_FAVORITE';
const DELETE_ITEM = 'mbl/todo/DELETE_ITEM';

const initialState = {
  list: [],
};

export default function reducer(state = initialState, action = {}) {
  const clonedList = JSON.parse(JSON.stringify(state.list));

  switch (action.type) {
    case ADD_NEW_ITEM:
      clonedList.push(action.item);
      return {
        ...state,
        list: clonedList,
      };

    case CLEAR:
      return initialState;

    case UPDATE_ITEM:
      clonedList[action.index].enable = !clonedList[action.index].enable;
      return {
        ...state,
        list: clonedList,
      };

    case UPDATE_FAVORITE:
      clonedList[action.index].favorite = !clonedList[action.index].favorite;
      return {
        ...state,
        list: clonedList,
      };

    case DELETE_ITEM:
      clonedList.splice(action.index, 1);
      return {
        ...state,
        list: clonedList,
      };
    default:
      return state;
  }
}

export function addItem(item) {
  return {type: ADD_NEW_ITEM, item: item};
}

export function clear() {
  return {type: CLEAR};
}

export function updateItem(index) {
  return {type: UPDATE_ITEM, index: index};
}

export function updateFavorite(index) {
  return {type: UPDATE_FAVORITE, index: index};
}

export function deleteItem(index) {
  return {type: DELETE_ITEM, index: index};
}
