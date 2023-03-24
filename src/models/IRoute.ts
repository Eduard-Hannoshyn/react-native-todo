import React, {ComponentType} from 'react';
import {SvgProps} from 'react-native-svg';

export interface IRoute {
  name: string;
  title: string;
  icon: React.FC<SvgProps>;
  component: ComponentType;
}
