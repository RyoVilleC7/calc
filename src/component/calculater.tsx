//React
import * as React from 'react';

//Outside Components
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