/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Material {
  id: string;
  name: string;
  description: string;
  colorHex: string;
  imageUrl?: string;
}

export interface LightingFeature {
  type: 'Ambient' | 'Accent' | 'Functional';
  description: string;
  colorTemp?: string;
}

export interface TechnicalSpec {
  label: string;
  value: string;
  icon?: string;
}

export interface DesignVariant {
  id: string;
  name: string;
  concept: string;
  primaryColor: string;
  secondaryColor: string;
  materials: Material[];
  lighting: LightingFeature[];
  technicalSpecs: TechnicalSpec[];
  fixturesFinish: string;
}
