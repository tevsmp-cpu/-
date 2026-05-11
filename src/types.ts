/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum Role {
  CEO = 'CEO',
  CIO = 'CIO',
  CTO = 'CTO',
  NONE = 'Без выбора'
}

export type ProductLine = 
  | 'Финансовые рынки' 
  | 'Финуслуги/ЦФА' 
  | 'Первичный рынок' 
  | 'Технологические сервисы' 
  | 'Data-продукты';

export type MetricCategory = 
  | 'Продуктовые метрики'
  | 'Метрики команд'
  | 'Метрики надежности'
  | 'Метрики ИТ общие'
  | 'Метрики эффективности'
  | 'Метрики для CEO'
  | 'Метрики для CIO'
  | 'Метрики для CTO';

export interface MetricRecord {
  id: string;
  line: string;
  product: string;
  category: MetricCategory;
  type: 'ИТ' | 'Бизнес';
  name: string;
  unit: string;
  actual: number;
  previous: number;
  target: number;
  period: string;
  roles: Role[];
  description?: string;
  isLowerBetter?: boolean;
  childMetrics?: string[];
}

export interface Metric {
  id: string;
  name: string;
  value: string | number;
  unit: string;
  trend: number; 
  status: 'good' | 'bad' | 'neutral';
  category: string;
  period: string;
  roles: Role[];
  productLine?: string;
  norm?: string;
  description?: string;
  
  // New raw fields for table
  actual: number;
  previous: number;
  target: number;
  variancePrev: number;
  varianceTarget: number;
  type: string;
  product: string;
  childMetrics?: string[];
  sparkline?: number[];
}

export interface ChartData {
  name: string;
  value: number;
}
