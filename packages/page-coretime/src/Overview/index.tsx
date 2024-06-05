// Copyright 2017-2024 @polkadot/app-coretime authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CoreDescription } from '@polkadot/react-hooks/types';

import React from 'react';

import CoreDescriptors from './CoreDescriptors.js';
import Summary from './Summary.js';

interface Props {
  className?: string;
  coreInfos?: CoreDescription[];
}

function Overview ({ className, coreInfos }: Props): React.ReactElement<Props> {
  return (
    <div className={className}>
      <Summary
        coreDscriptors={coreInfos}
      ></Summary>
      {
        coreInfos?.map((v) => (
          <CoreDescriptors
            coreInfos={v}
            key={v.core}
          />
        ))
      }
    </div>
  );
}

export default React.memo(Overview);
