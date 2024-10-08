// Copyright 2017-2024 @polkadot/app-coretime authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TabItem } from '@polkadot/react-components/types';

import React, { useEffect, useRef, useState } from 'react';

import { Tabs } from '@polkadot/react-components';
import { useApi, useCall, useCoretimeInformation } from '@polkadot/react-hooks';

import type { ParaId } from '@polkadot/types/interfaces';

import { useTranslation } from './translate.js';
import ParachainsTable from './ParachainsTable.js';
import Summary from './Overview/Summary.js';

interface Props {
  basePath: string;
  className?: string;
}

function createItemsRef(t: (key: string, options?: { replace: Record<string, unknown> }) => string): TabItem[] {
  return [
    {
      isRoot: true,
      name: 'overview',
      text: t('Overview')
    }
  ];
}

function CoretimeApp({ basePath, className }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const { api, isApiReady } = useApi();
  const itemsRef = useRef(createItemsRef(t));
  const [parachainIds, setParachainIds] = useState<number[]>([])
  const coretimeInfo = useCoretimeInformation(api, isApiReady)

  const paraIds = useCall<ParaId[]>(api.query.paras.parachains);
  useEffect(() => {
    if (!!paraIds) {
      setParachainIds(paraIds.map(a => a.toNumber()))
    }
  }, [paraIds])

  return (
    <main className={className}>
      <Tabs
        basePath={basePath}
        items={itemsRef.current}
      />
      {coretimeInfo?.salesInfo && (
        <Summary
          status={coretimeInfo?.status}
          region={coretimeInfo?.region}
          saleInfo={coretimeInfo?.salesInfo}
          config={coretimeInfo?.config}
          parachainCount={paraIds?.length || 0}
        />
      )}

      {!!parachainIds &&
        <ParachainsTable
          ids={parachainIds}
          coretimeInfo={coretimeInfo}
        />
      }

    </main>
  );
}

export default React.memo(CoretimeApp);
