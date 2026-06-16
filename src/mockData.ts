import { DesignVariant } from './types';

export const VARIANTS: DesignVariant[] = [
  {
    id: 'eco-minimalism',
    name: 'Эко-минимализм',
    concept: 'Визуальное расширение пространства через светлые текстуры и натуральные материалы.',
    primaryColor: '#D6CFC7',
    secondaryColor: '#E5E4E2',
    fixturesFinish: 'Глянцевый хром',
    materials: [
      {
        id: 'm1',
        name: 'Керамогранит Травертин',
        description: 'Крупноформатные плиты (60x120 см) с теплой каменной текстурой для стен и пола.',
        colorHex: '#D6CFC7'
      },
      {
        id: 'm2',
        name: 'Дубовые панели',
        description: 'Влагостойкие рейки с текстурой натурального дуба для акцентных зон в душевых.',
        colorHex: '#BC9E82'
      },
      {
        id: 'm3',
        name: 'Стекло Optiwhite',
        description: 'Ультрапрозрачные стеклянные перегородки для создания эффекта невесомости.',
        colorHex: '#F8F9FA'
      }
    ],
    lighting: [
      {
        type: 'Ambient',
        description: 'Встроенные потолочные LED-споты для равномерного мягкого света.',
        colorTemp: '3000K'
      },
      {
        type: 'Accent',
        description: 'Скрытые влагозащищенные LED-ленты в нишах и под бортом ванны.',
        colorTemp: '2700K'
      }
    ],
    technicalSpecs: [
      { label: 'Ширина комнаты', value: '2200 мм' },
      { label: 'Душевые', value: '2 x 1000x1000 мм' },
      { label: 'Ванна', value: '1700x780 мм' },
      { label: 'Выводы', value: 'Фиксированные' }
    ]
  },
  {
    id: 'modern-industrial',
    name: 'Современный индастриал',
    concept: 'Строгая геометрия и глубокие текстуры для создания изысканной, мужской атмосферы.',
    primaryColor: '#383E42',
    secondaryColor: '#4A4E52',
    fixturesFinish: 'Черный матовый',
    materials: [
      {
        id: 'm4',
        name: 'Антрацитовый сланец',
        description: 'Фактурный темный керамогранит для создания драматичного и основательного образа.',
        colorHex: '#383E42'
      },
      {
        id: 'm5',
        name: 'Черные профили',
        description: 'Тонкие матовые черные рамы для душевых ограждений.',
        colorHex: '#28282B'
      },
      {
        id: 'm6',
        name: 'Микроцемент',
        description: 'Бесшовное серое покрытие для не облицованных плиткой участков стен.',
        colorHex: '#808080'
      }
    ],
    lighting: [
      {
        type: 'Ambient',
        description: 'Черные магнитные трековые светильники с направленным светом.',
        colorTemp: '4000K'
      },
      {
        type: 'Accent',
        description: 'Вертикальные угловые LED-линии для подчеркивания высоты и рельефа текстур.',
        colorTemp: '3500K'
      }
    ],
    technicalSpecs: [
      { label: 'Ширина комнаты', value: '2200 мм' },
      { label: 'Душевые', value: '2 x 1000x1000 мм' },
      { label: 'Ванна', value: '1700x780 мм' },
      { label: 'Выводы', value: 'Фиксированные' }
    ]
  }
];
