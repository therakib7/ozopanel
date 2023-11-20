import { Item, State, Screen } from '@interfaces/adminColumnEditor'

export type Action =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_SCREENS'; payload: Screen[] }
  | { type: 'SET_COLUMNS'; payload: Item[] }
  | { type: 'SET_COLUMN_SELECT'; payload: null | number }
  | { type: 'SET_COLUMN_NEW'; payload: Item }

export const initState: State = {
  loading: true,
  screens: [],
  items: [],
  selectedItem: null,
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    case 'SET_SCREENS':
      return { ...state, screens: action.payload }
    case 'SET_COLUMNS':
      return { ...state, items: action.payload }
    case 'SET_COLUMN_SELECT':
      return { ...state, selectedItem: action.payload }
    case 'SET_COLUMN_NEW':
      return {
        ...state,
        items: [...state.items, action.payload],
        selectedItem: state.items.length,
      }
    default:
      return state
  }
}