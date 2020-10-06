interface initialState {
    formula: string;
    dis_num: string;
    int_formula: string;
    int_dis_num: string;
    total: number;
    float: boolean;
    operatorState: boolean;
    lifeCycle: boolean;
}


//initialState
const initialState: initialState = {
    formula: '0',
    dis_num: '0',
    int_formula: '',
    int_dis_num: '0',
    total: 0,
    float: false,
    operatorState: false,
    lifeCycle: false
}


//Reducer
export const Reducer = (state = initialState, action)=>{
    switch(action.type){
        case 'FORMULA_CHANGE':
            return {
                ...state,
                formula: action.formula
            }
        case 'SECOND_FORMULA_CHANGE':
            return {
                ...state,
                second_formula: action.second_formula
            }
        case 'DISPLAY_NUM_CHANGE':
            return {
                ...state,
                dis_num: action.dis_num
            }
        
        case 'INT_FORMULA_CHANGE':
            return {
                ...state,
                int_formula: action.int_formula
            }
        case 'INT_DISPLAY_NUM_CHANGE':
            return {
                ...state,
                int_dis_num: action.int_dis_num
            }
        case 'TOTAL_CHANGE':
            return {
                ...state,
                total: action.total
            }
        case 'TRUE_FLOAT':
            return {
                ...state,
                floatState: true
            };
        
        case 'FALSE_FLOAT':
            return {
                ...state,
                floatState: false
            }
        case 'TRUE_OPERATOR':
            return {
                ...state,
                operatorState: true
            };
    
        case 'FALSE_OPERATOR':
            return {
                ...state,
                operatorState: false
            }
        case 'TRUE_FINISH':
            return {
                ...state,
                finish: true
            };

        case 'TRUE_MATHLIFECYCLE':
            return {
                ...state,
                lifeCycle: true
            }

        case 'FALSE_MATHLIFECYCLE':
            return {
                ...state,
                lifeCycle: false
            }

        default:
            return state;
    }
}