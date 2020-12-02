import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form as RFForm, Field } from 'react-final-form';
import { Form, Row, Col } from 'react-bootstrap';
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
  return (countries.length > 0 ? (
    <RFForm
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <Form onChange={handleSubmit}>
          <Row>
            <Col xs={'auto'} lg={8}>
              <Field name="country">
                {({ input }) => (
                  <Form.Control
                    name={input.name}
                    onChange={input.onChange}
                    as="select"
                  >
                    {countries.map((data) => (
                      <option key={data.CountryCode} value={data.Slug}>{data.Country}</option>
                    ))}
                  </Form.Control>
                )}
              </Field>
            </Col>
          </Row>
        </Form>
      )}
    </RFForm>
  ) : (
    null
  ));
};

export default FormApi;
