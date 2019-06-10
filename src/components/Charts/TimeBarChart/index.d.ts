import React from 'react';
export interface ITimeBarChartProps {
  data: Array<{
    x: number;
    y1: number;
    y2?: number;
  }>;
  titleMap: { y1: string; y2?: string };
  padding?: [number, number, number, number];
  height?: number;
  style?: React.CSSProperties;
}

export default class TimeBarChart extends React.Component<ITimeBarChartProps, any> {}
