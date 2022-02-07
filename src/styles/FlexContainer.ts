import styled from 'styled-components';
import media from './media';
import mixins from './mixins';

const FlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;

export default FlexContainer;