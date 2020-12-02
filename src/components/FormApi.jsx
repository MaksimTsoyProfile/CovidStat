import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form as RFForm, Field } from 'react-final-form';
import {
  Form, Button, Row, Col, option,
} from 'react-bootstrap';
import { getPostsCountry, getCountries } from '../slices/data';
import { startLoading } from '../loading';

const FormApi = () => {
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    startLoading();
    dispatch(getPostsCountry(values.country));
  };
  useLayoutEffect(() => {
    dispatch(getCountries());
  }, []);
  const countries = useSelector((state) => state.data.countries);
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
                    as="select"
                  >
                    {countries.map((data) => (
                      <option key={data.CountryCode} value={data.Slug}>{data.Country}</option>
                    ))}
                  </Form.Control>
                )}
              </Field>
            </Col>
            <Col xs={4}>
              <Button
                id="submit-button"
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
