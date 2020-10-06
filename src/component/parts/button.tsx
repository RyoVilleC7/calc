//React
import * as React from 'react';

/////////////////////////////////////////////////////////////////

type Props = {
  data?: string;
  internalData?: string;
  func?: any;
}

const Button: React.FC<Props> = (props) => {
    return <button internal-data={props.internalData} onClick={props.func}>{props.data}</button>
};

export default Button;