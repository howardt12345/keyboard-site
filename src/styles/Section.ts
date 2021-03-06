import styled from 'styled-components';
import media from './media';

const Section = styled.section`
  margin: 0 auto;
  padding: 100px 0 150px;
  max-width: 1000px;
  width: 80vw;
  ${media.tablet`padding: 100px 0;`};
`;

export default Section;
