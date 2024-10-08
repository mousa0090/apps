// Copyright 2017-2024 @polkadot/app-coretime authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OnDemandQueueStatus } from '@polkadot/react-hooks/types';

import React from 'react';

import { FormatBalance } from '@polkadot/react-query';

interface Props {
  className?: string;
  value?: OnDemandQueueStatus;
  query: string;
}

function QueueStatus ({ className, query, value }: Props): React.ReactElement<Props> {
  return (
    <>
      {value && query === 'traffic'
        ? <div className={className}>
          <FormatBalance
            className={value?.traffic.toString() ? '' : '--tmp'}
            value={value?.traffic.toString() || 1}
            withSi
          />
        </div>
        : value &&
        <div className={className}>
          {value?.nextIndex.toString()}
        </div>}
    </>
  );
}

export default React.memo(QueueStatus);
