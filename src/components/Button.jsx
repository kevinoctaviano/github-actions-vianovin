import React from 'react';

export default function Button(props) {
  const { inc, dec, idTestInc, idTestDec } = props;
  return (
    <div>
      <div className="boxCenter">
        <button data-testid={idTestInc} className="button-5" onClick={inc}>
          +
        </button>
        <button data-testid={idTestDec} className="button-5" onClick={dec}>
          -
        </button>
      </div>
    </div>
  );
}
