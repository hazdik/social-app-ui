import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  .c-loader {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .c-dropdown {
    height: 100%;
    display: flex;

    .ant-dropdown-link {
      display: flex;
      align-items: center;
    }
  }
`;
