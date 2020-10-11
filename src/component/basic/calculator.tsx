//React
import * as React from 'react';

//Outside Components
import MathWindow from '../parts/mathWindow';
import Controller from '../parts/Controller';

/////////////////////////////////////////////////////////////////

const Calculator: React.FC = () => {
    return (
        <div id="calculator">
            <MathWindow />
            <Controller />
        </div>
        );
};

export default Calculator;