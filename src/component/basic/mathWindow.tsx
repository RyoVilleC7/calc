//React
import * as React from 'react';

//Redux
import { connect } from 'react-redux';
import { AppState } from '../../store/store';

/////////////////////////////////////////////////////////////////

type stateByProps = {
    startState: boolean;
    formulaState: string;
    dis_numState: string;
    operatorState: boolean;
};

type Props = stateByProps;

const MathWindow: React.FC<Props> = (props) => {
   
    return (
        <div id="mathWindow">
            <div className="inner">
                <p style={props.startState ? { opacity: '1' } : { opacity: '0' }}>{props.formulaState.replace(/\*/g, "×").replace(/\//g, "÷")}</p>
                <p>{props.dis_numState}</p>
            </div>
        </div>
    );
};

const mapStateToProps = (state: AppState): stateByProps => {
    return {
        startState: state.Reducer.start,
        formulaState: state.Reducer.formula,
        dis_numState: state.Reducer.dis_num,
        operatorState: state.Reducer.operatorState,
    }
};

export default connect(mapStateToProps, null)(MathWindow);