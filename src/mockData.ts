import { Role, Metric, MetricRecord, ProductLine } from './types';
import rawMetrics from './data/metrics.json';

const metricsDb = rawMetrics as MetricRecord[];

export const METRICS: Metric[] = metricsDb.map(m => {
  const isLowerBetter = m.isLowerBetter ?? false;
  
  // Trend: ((Actual - Prev) / Prev) * 100
  const trend = m.previous !== 0 ? ((m.actual - m.previous) / m.previous) * 100 : 0;
  
  // Variance from Target: ((Actual - Target) / Target) * 100
  const varianceTarget = m.target !== 0 ? ((m.actual - m.target) / m.target) * 100 : 0;

  // Status determination
  let status: 'good' | 'bad' | 'neutral' = 'neutral';
  if (isLowerBetter) {
    status = m.actual <= m.target ? 'good' : 'bad';
  } else {
    status = m.actual >= m.target ? 'good' : 'bad';
  }

  return {
    id: m.id,
    name: m.name,
    value: m.actual,
    unit: m.unit,
    trend: parseFloat(trend.toFixed(2)),
    status: status,
    category: m.category,
    period: m.period,
    roles: m.roles,
    productLine: m.line,
    norm: `${isLowerBetter ? '≤' : '≥'} ${m.target}`,
    description: m.description,
    
    // Raw fields for table
    actual: m.actual,
    previous: m.previous,
    target: m.target,
    variancePrev: parseFloat(trend.toFixed(2)),
    varianceTarget: parseFloat(varianceTarget.toFixed(2)),
    type: m.type,
    product: m.product,
    childMetrics: m.childMetrics,
    sparkline: [m.previous, m.previous * 1.05, m.previous * 0.98, m.previous * 1.1, m.actual]
  };
});

export const PRODUCT_LINES: ProductLine[] = [
  'Финансовые рынки',
  'Финуслуги/ЦФА',
  'Первичный рынок',
  'Технологические сервисы',
  'Data-продукты'
];

export const MOCK_CHART_DATA = [
  { name: 'Янв', value: 400 },
  { name: 'Фев', value: 450 },
  { name: 'Мар', value: 420 },
  { name: 'Апр', value: 500 },
  { name: 'Май', value: 550 },
];
