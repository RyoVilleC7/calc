interface initialState {
    start: boolean;
    lifeCycle: boolean;
    operatorState: boolean;
    float: boolean;
    dis_num: string;
    formula: string;
}

type Action = {
    type: string;
    formula?: string;
    dis_num?: string;
}

//initialState
const initialState: initialState = {
    start: false,   //計算開始
    lifeCycle: false,   //計算式のサイクル
    operatorState: false,   //符号保有チェック
    float: false,   //小数点保有チェック
    formula: '0',   //ディスプレイに表示する数式
    dis_num: '0'    //ディスプレイに表示する数値
}

//Reducer
export const Reducer = (state = initialState, action: Action)=>{
    switch(action.type){
        case 'FORMULA_CHANGE':
            return {
                ...state,
                formula: action.formula
            }
            
        case 'DISPLAY_NUM_CHANGE':
            return {
                ...state,
                dis_num: action.dis_num
            }

        case 'TRUE_FLOAT':
            return {
                ...state,
                float: true
            };
        
        case 'FALSE_FLOAT':
            return {
                ...state,
                float: false
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

        case 'TRUE_LIFECYCLE':
            return {
                ...state,
                lifeCycle: true
            }

        case 'FALSE_LIFECYCLE':
            return {
                ...state,
                lifeCycle: false
            }

        case 'TRUE_START':
            return {
                 ...state,
                start: true
            }
    
        case 'FALSE_START':
            return {
                ...state,
                start: false
            }

        default:
            return state;
    }
}