//React
import * as React from 'react';

//Outside Components
import MathWindow from '../parts/mathWindow';
import Controls from '../parts/Controls';

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