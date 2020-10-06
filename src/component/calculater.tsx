//React
import * as React from 'react';

//Component
import MathWindow from './basic/mathWindow';
import Controls from './basic/Controls';

/////////////////////////////////////////////////////////////////

const Calculater: React.FC = () => {
    return (
        <div id="calculater">
            <MathWindow />
            <Controls />
        </div>
        );
};

export default Calculater;