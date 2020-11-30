import React from 'react';
import { useDispatch } from 'react-redux';
import { Form as RFForm, Field } from 'react-final-form';
import {
  Form, Button, Row, Col,
} from 'react-bootstrap';
import { getPostsCountry } from '../slices/data';

const FormApi = () => {
  const dispatch = useDispatch();
  const onSubmit = (values, form) => {
    console.log(values.country);
    dispatch(getPostsCountry(values.country));
    setTimeout(form.restart);
  };
  return (
    <RFForm
      onSubmit={onSubmit}
    >
      {({ handleSubmit, pristine, submiting }) => (
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={8}>
              <Field name="country">
                {({ input }) => (
                  <Form.Control
                    name={input.name}
                    onChange={input.onChange}
                    value={input.value}
                    placeholder="Enter country"
                  />
                )}
              </Field>
            </Col>
            <Col xs={4}>
              <Button
                variant="success"
                type="submit"
                disabled={pristine || submiting}
              >
                Accept
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </RFForm>
  );
};

export default FormApi;
