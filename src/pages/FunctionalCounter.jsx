import React from 'react';
import Button from '../components/Button';

const FunctionalCounter = (props) => {
  const { count, inc, dec } = props;
  return (
    <>
      <h2 data-testid="header">Counter App</h2>
      <div className="box">
        <h1 data-testid="counter">{count}</h1>
      </div>
      <Button
        idTestInc="increment-test"
        idTestDec="decrement-test"
        inc={inc}
        dec={dec}
      />
    </>
  );
};

export default FunctionalCounter;
