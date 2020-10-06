//React
import * as React from 'react';

//Redux
import { connect } from 'react-redux';
import { AppState } from '../../store/store';

/////////////////////////////////////////////////////////////////

type stateByProps = {
    formulaState: string;
    dis_numState: string;
    totalState: number;
    operatorState: boolean;
};

type Props = stateByProps;

const MathWindow: React.FC<Props> = (props) => {
   
    return (
        <div id="mathWindow">
            <div className="inner">
                <p>{props.formulaState}</p>
                <p>{props.dis_numState}</p>
            </div>
        </div>
        );
};

const mapStateToProps = (state: AppState): stateByProps => {
    return {
        formulaState: state.Reducer.formula,
        dis_numState: state.Reducer.dis_num,
        totalState: state.Reducer.total,
        operatorState: state.Reducer.operatorState,
    }
};

export default connect(mapStateToProps, null)(MathWindow);