import React from 'react';
import './styles.scss'
import {
  operators as operatorsList,
  numbers as numbersList,
} from '../../utils/constants';

const Buttons = () => {

  const handleClick = (event: any) => {
    const { value, type } = event.target;
    if (value === '=') {
      console.log('=');
    } else if (value === 'C') {
      console.log('C');
    }
  }

  return (
    <div className="buttons">
      {operatorsList.map(operator => {
          const { id, value, className, type } = operator;
          return (
            <button
              key={id}
              className={className}
              value={value}
              type={type as any}
              onClick={handleClick}
            >
              {value}
            </button>
          )
        })}
    </div>
  );
}

export default Buttons;