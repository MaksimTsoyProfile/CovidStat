import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';

const AlertComponent = () => {
  const hasErrors = useSelector((state) => state.data.hasErrors);
  return (hasErrors ? (
    <Alert variant="danger">
      Соединение было прервано, Попробуйте повторить еще раз!
  </Alert>
  ) : (
    null
  ));
};

export default AlertComponent;
