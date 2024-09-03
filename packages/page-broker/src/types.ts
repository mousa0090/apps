// Copyright 2017-2024 @polkadot/app-broker authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CoreWorkloadInfo, CoreWorkplanInfo } from '@polkadot/react-hooks/types';

export type InfoRow = {
  taskId: string | null,
  maskBits: number,
  core: number
  mask?: string
  start?: string | null,
  end?: string | null
  owner?: string
  leaseLength?: number
  endBlock?: number
}

export type CoreInfo = {
  core: number,
  workload: CoreWorkloadInfo[],
  workplan: CoreWorkplanInfo[]
}

export type statsType = {
  idles: number,
  pools: number,
  tasks: number
}