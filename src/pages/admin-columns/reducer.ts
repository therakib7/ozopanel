interface Option {
    label: string;
    value: string;
}

interface Screen {
    group: string;
    screen_id: string;
    label: string;
    options: Option[];
}

export interface Column {
    id: string;
    type: string;
    label: string;
    width: string;
    width_unit: string;
}

interface State {
    loading: boolean;
    screens: Screen[];
    columns: Column[];
}

type Action =
    | { type: 'SET_LOADING'; payload: boolean }
    | { type: 'SET_SCREENS'; payload: Screen[] }
    | { type: 'SET_COLUMNS'; payload: Column[] };

export const initState: State = {
    loading: true,
    screens: [],
    columns: [],
};

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        case 'SET_SCREENS':
            return { ...state, screens: action.payload };
        case 'SET_COLUMNS':
            return { ...state, columns: action.payload };
        default:
            return state;
    }
};