import { any } from 'prop-types';
//React
import * as React from 'react';

//Redux
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import store, { AppState } from '../../store/store';

//Component
import Button from '../parts/button';

/////////////////////////////////////////////////////////////////

type stateByProps = {
    formulaState: string;
    dis_numState: string;
    floatState: boolean;
    operatorState: boolean;
    lifeCycleState: boolean;
};

type dispatchByProps = {
    formula: (arg: string) => void;
    dis_num: (arg: string) => void;
    float: (arg: boolean) => void;
    operator: (arg: boolean) => void;
    lifeCycle: (arg: boolean) => void;
};

type Props = stateByProps & dispatchByProps;

let mathArray = []; //数式を格納
let result: string = ''; //結合した配列を格納
let preserve: string = ''; //前回の値を保存
let floatPreserve: string = '';
let x: string = ''; //数式を保持
let float: boolean = false; //小数点の有無
let start = false;
  
const Controls: React.FC<Props> = (props) => {
  
    //numbers--------------------------------------------------------
    const addNum = function(n: string): void{

        //計算開始の判定
        if(props.lifeCycleState){
      
          //符号保有しているか判定
            if(props.operatorState){

                if(n === '.'){
                    
                    mathArray.push(preserve); //値を保存
                    preserve = ''; //前回の値を初期化
                    x = '';
                    
                    for (let i = 0; i < mathArray.length; i++) {
                        x += mathArray[i];
                    }

                    preserve = Number(preserve).toLocaleString() + n;
                    props.dis_num(preserve);
                    props.formula(x + preserve);

                }else {

                    mathArray.push(preserve); //値を保存
                    preserve = ''; //前回の値を初期化
                    x = '';
                    
                    for (let i = 0; i < mathArray.length; i++) {
                        x += mathArray[i];
                    }
    
                    preserve += n;
                    props.dis_num(Number(preserve).toLocaleString());
                    props.formula(x + Number(preserve).toLocaleString());
                    props.operator(false);
                }

            } else {

                if(n === '.'){

                    if(preserve.indexOf('.') !== 1){

                        preserve = Number(preserve.replace(/,/g, "")).toLocaleString() + '.';
                        props.dis_num(preserve);
                        props.formula(x + preserve);
                    }
                    
                }else {

                    preserve += n;
    
                    props.dis_num(Number(preserve.replace(/,/g, "")).toLocaleString());
                    props.formula(x + Number(preserve.replace(/,/g, "")).toLocaleString());

                }
            }

        } else {

            if(props.operatorState){

                start = true;
                props.lifeCycle(true); //計算開始
    
                preserve += n;
                props.dis_num(Number(preserve).toLocaleString());
                props.formula(preserve);
                props.operator(false);

            }else {

                if(n === '.'){

                    start = true;
                    props.lifeCycle(true); //計算開始
            
                    preserve = Number(preserve).toLocaleString() + n;
                    props.dis_num(preserve);
                    props.formula(preserve);

                }else {

                    start = true;
                    props.lifeCycle(true); //計算開始
                    preserve = ''; //前回の値を初期化
                    mathArray = [];
                    x = '';
                    result = '';
            
                    preserve += n;
                    props.dis_num(Number(preserve).toLocaleString());
                    props.formula(preserve);
                }
            }
        };
      };
  
    //operator--------------------------------------------------------
    const operator = function(o: string): void{

        if(props.lifeCycleState){

            if(!props.operatorState){

                //演算子入力時の処理
                mathArray.push(Number(preserve.replace(/,/g, "")).toLocaleString()); //値を保存
                preserve = o;
                x = '';
                
                for (let i = 0; i < mathArray.length; i++) {
                    x += mathArray[i];
                }

                props.formula(x + o);
                props.operator(true);

            }else {

                //演算子の次に演算子が入力された際の処理
                x = '';
                
                for (let i = 0; i < mathArray.length; i++) {
                    x += mathArray[i];
                }

                preserve = o;

                props.formula(x + o);
                props.operator(true);
            }

        }else {

            if(!start){
                if(o === '-'){
                    start = true;
                    preserve = o;
                    props.formula(preserve);
                    props.operator(true);
                    props.lifeCycle(true);
                }
                
            }else {

                mathArray = [];
                preserve = o;

                mathArray.push(Number(eval(result)).toLocaleString());
                props.dis_num(Number(eval(result)).toLocaleString());
                props.formula(Number(eval(result)).toLocaleString() + preserve);
                props.operator(true);
                props.lifeCycle(true);
            }
        }
    };
  
  
    //equal--------------------------------------------------------
    const equal = function(): void{

            if(props.lifeCycleState){

                if(props.operatorState){

                }else {

                    console.log(preserve)
                    mathArray.push(Number(preserve.replace(/,/g, "")).toLocaleString());
                    preserve = '';

                    //dis_numに代入
                    result = '';
                    mathArray = mathArray.map((value) => {
                        if (!(value === "+")){
                            if(!(value === "-")){
                                if (!(value === "*")){
                                    if (!(value === "/")){
                                        return value.replace(/,/g, "");
                                    } else {
                                        return value;
                                    }
                                } else {
                                    return value;
                                }
                            } else {
                                return value;
                            }
                        } else {
                                return value;
                          }
                      });
                
                    for (let i = 0; i < mathArray.length; i++) {
                        result += mathArray[i];
                    }
                    props.dis_num(Number(eval(result)).toLocaleString());

                    //fomulaに代入
                    result = '';
                    mathArray = mathArray.map((value) => {
                        if (!(value === "+")) {
                            if(!(value === "-")){
                                if (!(value === "*")) {
                                    if (!(value === "/")) {
                                        return Number(value).toLocaleString();
                                    } else {
                                        return value;
                                    }
                                } else {
                                    return value;
                                }
                            } else {
                                return value;
                            }
                        } else {
                                return value;
                          }
                      });
                
                    for (let i = 0; i < mathArray.length; i++) {
                        result += mathArray[i];
                    }

                    props.formula(result + '=');
                    props.lifeCycle(false);
                }
            }
    };
    
  
    //clear--------------------------------------------------------
    const clear = function(): void{
        props.formula('0'),
        props.dis_num('0'),
        props.operator(false),
        props.lifeCycle(false)
        mathArray = [];
        result = '';
        preserve = '';
        float = false;
        x = '';
        start = false;
    };

    //button-------------------------------------------------------

    const btnData = ['7','8','9','4','5','6','1','2','3','0','.'];
    const operateViewData = ['÷','×','-','+'];
    const operateInternalData = ['/','*','-','+'];

    return (
        <div id="Controls">

            <div className="l_content">

                <div className="l_content_top">
                    <Button data={'C'} func={() => clear()} />
                    <Button data={'0'} />
                    <Button data={'0'} />
                </div>

                <div className="l_content_bottom">
                    {btnData.map( (value, key) => {
                        return <Button data={value} internalData={value} func={() => addNum(value)} key={key} />
                    })}
                </div>

            </div>

            <div className="r_content">
                {operateViewData.map( (value, index, key) => {
                    return <Button data={operateViewData[index]} internalData={operateInternalData[index]} func={() => operator(operateInternalData[index])} />
                })}
                <Button data={'='} internalData={'='} func={() => equal()} />
            </div>

        </div>
        );
  };

  const mapStateToProps = (state: AppState): stateByProps => {
    return {
        formulaState: state.Reducer.formula,
        dis_numState: state.Reducer.dis_num,
        floatState: state.Reducer.float,
        operatorState: state.Reducer.operatorState,
        lifeCycleState: state.Reducer.lifeCycle
    }
};

const mapDispatchToProps = (dispatch: Dispatch): dispatchByProps => {
    return {
        formula: (arg) => { dispatch( {type: 'FORMULA_CHANGE', formula: arg} ) },
        dis_num: (arg) => { dispatch( {type: 'DISPLAY_NUM_CHANGE', dis_num: arg} ) },
        float: (arg) => { arg ? dispatch( {type: 'TRUE_FLOAT'}) : dispatch( {type: 'FALSE_FLOAT'}) },
        operator: (arg) => { arg ? dispatch( {type: 'TRUE_OPERATOR'}) : dispatch( {type: 'FALSE_OPERATOR'}) },
        lifeCycle: (arg) => { arg ? dispatch( {type: 'TRUE_MATHLIFECYCLE'}) : dispatch( {type: 'FALSE_MATHLIFECYCLE'}) },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);