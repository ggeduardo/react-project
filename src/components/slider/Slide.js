
/*Iconos diseñados por <a href="" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.es/" title="Flaticon"> www.flaticon.es</a>*/
/** @jsx jsx */

import { css, jsx } from '@emotion/core'

const Slide = ({ content }) => (
  <div
    css={css`
      height: 100;
      width: 100%;
      background-image: url('${content}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
  />
)
export default Slide
