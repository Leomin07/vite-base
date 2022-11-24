/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { Row } from 'antd';
import { usePageEffect } from '../core/page.js';

export default function Home(): JSX.Element {
  usePageEffect({ title: 'HomePage' });

  return (
    <Row>
      <h2>home page</h2>
    </Row>
  );
}
