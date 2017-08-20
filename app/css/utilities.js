import { injectGlobal } from 'styled-components';

import variables from './variables';

const readMoreFontSize = `${variables.fs2}`;
const readMoreFontWeight = `${variables.fw3}`;

/* eslint no-unused-expressions: 0 */
injectGlobal`
  .u- {
    /* alignments */
    &right {
      display: flex;
      margin-left: auto;
    }

    /* margins */
    &mb- {
      &10 {
        margin-bottom: 10px;
      }

      &20 {
        margin-bottom: 20px;
      }

      &30 {
        margin-bottom: 30px;
      }
    }

    &mr- {
      &10 {
        margin-right: 10px;
      }

      &20 {
        margin-right: 20px;
      }

      &30 {
        margin-right: 30px;
      }
    }

    /* others */
    &read-more {
      font-size: ${readMoreFontSize};
      font-weight: ${readMoreFontWeight};
      margin-top: 10px;
    }
  }
`;
