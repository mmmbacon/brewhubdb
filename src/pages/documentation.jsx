import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import styled from 'styled-components';

// Bootstrap Components
import { Container, Col, Row } from 'react-bootstrap';

// Custom Components
import MainLayout from '../components/MainLayout';

// Styled Components
const StyledHeading = styled.h1`
  font-weight: 600;
`;

const StyledCode = styled.code`
  background: #fe5f55;
  color: white;
  padding: 10px 30px;
  padding-top: 12px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.9em;
  display: flex;
`;

const StyledDescription = styled.p`
  font-weight: 700;
  margin-bottom: 0px;
`;

const StyledCodeBlock = styled.div`
  background: #f6f6f6;
  padding: 10px 30px;
  color: #333;
  border-radius: 6px;
  white-space: pre-wrap;
  font-size: 0.9em;
`;

const StyledH2 = styled.h2`
  padding-bottom: 0px;
  margin-bottom: 5px;
  margin-left: -2px;
`;

// markup
const DocumentationPage = () => (
  <div style={{ height: '100%' }}>
    <MainLayout>
      <Container style={{ marginTop: '10px' }}>
        <Row style={{ marginTop: 50, marginBottom: 50 }}>
          <Col>
            <section>
              <StyledHeading>Documentation</StyledHeading>
            </section>
          </Col>
        </Row>

        <Row style={{ marginTop: 50, marginBottom: 50 }}>
          <Col>
            <section>
              <div style={{ borderBottom: '2px solid #fe5f55', marginBottom: 20 }}>
                <StyledH2>Breweries</StyledH2>
              </div>
              <p>
                <StyledDescription>
                  All breweries
                </StyledDescription>
              </p>
              <p><StyledCode>https://api.brewhubdb.org/breweries</StyledCode></p>
              <p>
                Example Data:
              </p>
              <p>
                <code>
                  <StyledCodeBlock>
                    {'"id": 88,\n"name": "4th Meridian Brewing",\n"type": null,\n"active": true,\n"street_address": "2626 50 Ave unit 6",\n"province": "Alberta",\n"city": "Lloydminster",\n"postal_code": "T9V 2S3",\n"country": "Canada",\n"longitude": "53.2617",\n"latitude": "-110.0074",\n"phone": "+17805229998",\n"website": "http://www.4thmeridianbrewing.com/",\n"description": "Three friends who dreamed of owning their own brewery...",\n"logo_url": "https://i.imgur.com/QOQUIJp.png",\n"established": 2017,\n"social1": "https://twitter.com/4MBrewing",\n"social2": null,\n"social3": "https://www.facebook.com/4thmeridianbrewing/",\n"createdAt": "2021-08-11T04:19:28.539Z",\n"updatedAt": "2021-08-11T04:19:28.539Z"'}
                  </StyledCodeBlock>

                </code>
              </p>
            </section>
          </Col>
        </Row>

        <Row style={{ marginTop: 50, marginBottom: 50 }}>
          <Col>
            <section>
              <p>
                <StyledDescription>
                  by_city
                </StyledDescription>
              </p>
              <p><StyledCode>https://api.brewhubdb.org/breweries?by_city=[city]</StyledCode></p>
              <p>
                Returns all breweries in a provided city.
              </p>
              <p>
                Example:
              </p>
              <p>
                <code>
                  <StyledCodeBlock>
                    https://api.brewhubdb.org/breweries?by_city=Calgary
                  </StyledCodeBlock>
                </code>
              </p>
            </section>
          </Col>
        </Row>

        <Row style={{ marginTop: 50, marginBottom: 50 }}>
          <Col>
            <section>
              <p>
                <StyledDescription>
                  by_dist (distance)
                </StyledDescription>
              </p>
              <p><StyledCode>https://api.brewhubdb.org/breweries?by_dist=[latitude,longitude]</StyledCode></p>
              <p>
                Returns the distance from the given longitude to breweries in the database.
              </p>
              <p>
                Example:
              </p>
              <p>
                <code>
                  <StyledCodeBlock>
                    https://api.brewhubdb.org/breweries?by_dist=51.047310,-114.057968
                  </StyledCodeBlock>
                </code>
              </p>
            </section>
          </Col>
        </Row>

        <Row style={{ marginTop: 50, marginBottom: 50 }}>
          <Col>
            <section>
              <p>
                <StyledDescription>
                  by_name
                </StyledDescription>
              </p>
              <p><StyledCode>https://api.brewhubdb.org/breweries?by_name=[name]</StyledCode></p>
              <p>
                Returns breweries that include given characters.
              </p>
              <p>
                Example:
              </p>
              <p>
                <code>
                  <StyledCodeBlock>
                    https://api.brewhubdb.org/breweries?by_name=88 Brewing
                  </StyledCodeBlock>
                </code>
              </p>
            </section>
          </Col>
        </Row>

        <Row style={{ marginTop: 50, marginBottom: 50 }}>
          <Col>
            <section>
              <p>
                <StyledDescription>
                  by_province
                </StyledDescription>
              </p>
              <p><StyledCode>https://api.brewhubdb.org/breweries?by_province=[province]</StyledCode></p>
              <p>
                Returns breweries that include the given province.
              </p>
              <p>
                Example:
              </p>
              <p>
                <code>
                  <StyledCodeBlock>
                    https://api.brewhubdb.org/breweries?by_province=Alberta
                  </StyledCodeBlock>
                </code>
              </p>
            </section>
          </Col>
        </Row>

        <Row style={{ marginTop: 50, marginBottom: 50 }}>
          <Col>
            <section>
              <p>
                <StyledDescription>
                  by_postal
                </StyledDescription>
              </p>
              <p><StyledCode>https://api.brewhubdb.org/breweries?by_postal=[postal]</StyledCode></p>
              <p>
                Returns breweries that include given postal code (full or partial).
              </p>
              <p>
                Example:
              </p>
              <p>
                <code>
                  <StyledCodeBlock>
                    https://api.brewhubdb.org/breweries?by_postal=T1Y
                  </StyledCodeBlock>
                </code>
              </p>
            </section>
          </Col>
        </Row>

        <Row style={{ marginTop: 50, marginBottom: 50 }}>
          <Col>
            <section>
              <p>
                <StyledDescription>
                  by_type
                </StyledDescription>
              </p>
              <p><StyledCode>https://api.brewhubdb.org/breweries?by_type=[type]</StyledCode></p>
              <p>
                Returns breweries that are of the given type.
              </p>
              <p>
                Example:
              </p>
              <p>
                <code>
                  <StyledCodeBlock>
                    https://api.brewhubdb.org/breweries?by_type=Micro
                  </StyledCodeBlock>
                </code>
              </p>
            </section>
          </Col>
        </Row>

        <Row style={{ marginTop: 50, marginBottom: 50 }}>
          <Col>
            <section>
              <div style={{ borderBottom: '2px solid #fe5f55', marginBottom: 20 }}>
                <StyledH2>Options</StyledH2>
              </div>
              <p>
                <StyledDescription>
                  page
                </StyledDescription>
              </p>
              <p><StyledCode>&page=[page]</StyledCode></p>
              <p>
                Returns a query with offset or page number.
              </p>
              <p>
                Example:
              </p>
              <p>
                <code>
                  <StyledCodeBlock>
                    https://api.brewhubdb.org/breweries?by_city=Calgary&page=5
                  </StyledCodeBlock>
                </code>
              </p>
            </section>
          </Col>
        </Row>

        <Row style={{ marginTop: 50, marginBottom: 50 }}>
          <Col>
            <section>
              <p>
                <StyledDescription>
                  per_page
                </StyledDescription>
              </p>
              <p><StyledCode>&per_page=[per_page]</StyledCode></p>
              <p>
                Returns a query with a given number of results per page.
              </p>
              <p>
                Example:
              </p>
              <p>
                <code>
                  <StyledCodeBlock>
                    https://api.brewhubdb.org/breweries?by_city=Calgary&per_page=20
                  </StyledCodeBlock>
                </code>
              </p>
            </section>
          </Col>
        </Row>

        <Row style={{ marginTop: 50, marginBottom: 50 }}>
          <Col>
            <section>
              <p>
                <StyledDescription>
                  order
                </StyledDescription>
              </p>
              <p><StyledCode>&order=[order]</StyledCode></p>
              <p>
                Returns a query with a given sort order. ASC or DESC.
              </p>
              <p>
                Example:
              </p>
              <p>
                <code>
                  <StyledCodeBlock>
                    https://api.brewhubdb.org/breweries?by_city=Calgary&per_page=20&order=DESC
                  </StyledCodeBlock>
                </code>
              </p>
            </section>
          </Col>
        </Row>

      </Container>
    </MainLayout>
  </div>
);

export default DocumentationPage;
