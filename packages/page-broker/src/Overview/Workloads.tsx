// Copyright 2017-2024 @polkadot/app-broker authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiPromise } from '@polkadot/api';
import type { CoreWorkloadInfo } from '@polkadot/react-hooks/types';

import React from 'react';

import Workload from './Workload.js';

interface Props {
  api: ApiPromise;
  workloadInfos?: CoreWorkloadInfo[];
  timeslice: number;
}

function Workloads ({ api, timeslice, workloadInfos }: Props): React.ReactElement<Props> {
  return (
    <>
      {workloadInfos?.map((v) => (
        <Workload
          api={api}
          key={v.core}
          timeslice={timeslice}
          value={v}
        />
      ))}
    </>
  );
}

export default React.memo(Workloads);
