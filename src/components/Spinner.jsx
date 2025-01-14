import React from 'react';

import { Spinner as ParagonSpinner } from '@edx/paragon';

const Spinner = () => (
  <div className="spinner-container">
    <ParagonSpinner animation="border" variant="primary" size="lg" />
  </div>
);

export default React.memo(Spinner);
