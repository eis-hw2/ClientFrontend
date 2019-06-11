import React from 'react';
import { Chart, Tooltip, Geom, Legend, Axis, View } from 'bizcharts';
import DataSet from '@antv/data-set';
import Slider from 'bizcharts-plugin-slider';
import autoHeight from '../autoHeight';
import styles from './index.less';

@autoHeight()
class TimelineChart extends React.Component {
  render() {
    const {
      title,
      height = 400,
      padding = [60, 20, 40, 40],
      titleMap = {
        y1: 'y1',
        y2: 'y2',
      },
      borderWidth = 2,
      data: sourceData,
    } = this.props;

    const data = Array.isArray(sourceData) ? sourceData : [{ x: 0, y1: 0, y2: 0 }];

    data.sort((a, b) => a.x - b.x);

    let max;
    if (data[0] && data[0].y1 && data[0].y2) {
      max = Math.max(
        [...data].sort((a, b) => b.y1 - a.y1)[0].y1
        // [...data].sort((a, b) => b.y2 - a.y2)[0].y2
      )*1.1;
    }

    let min;
    if (data[0] && data[0].y1 && data[0].y2) {
      min = Math.min(
        [...data].sort((a, b) => b.y1 - a.y1)[0].y1
        // [...data].sort((a, b) => b.y2 - a.y2)[0].y2
      )*0.9;
    }

    const ds = new DataSet({
      state: {
        start:  data[data.length - 1].x - 300000,
        end: data[data.length - 1].x,
      },
    });

    const dv = ds.createView();
    dv.source(data)
      .transform({
        type: 'filter',
        callback: obj => {
          const date = obj.x;
          return date <= ds.state.end && date >= ds.state.start;
        },
      })
      .transform({
        type: 'map',
        callback(row) {
          const newRow = { ...row };
          newRow[titleMap.y1] = row.y1;
          newRow[titleMap.y2] = row.y2;
          return newRow;
        },
      })
      .transform({
        type: 'fold',
        fields: [titleMap.y1, titleMap.y2], // 展开字段集
        key: 'key', // key字段
        value: 'value', // value字段
      });

    const timeScale = {
      type: 'time',
      tickInterval: 60 * 60 * 1000,
      mask: 'HH:mm',
      range: [0, 1],
    };

    const cols = {
      x: timeScale,
      value: {
        max,
        min,
      },
    };

    console.log("cols:", cols)

    const SliderGen = () => (
      <Slider
        padding={[0, padding[1] + 60, 0, padding[3]]}
        width="auto"
        height={50}
        xAxis="x"
        yAxis="y1"
        scales={{ x: timeScale }}
        data={data}
        start={ds.state.start}
        end={ds.state.end}
        backgroundChart={{ type: 'line' }}
        onChange={({ startValue, endValue }) => {
          ds.setState('start', startValue);
          ds.setState('end', endValue);
        }}
      />
    );

    return (
      <div className={styles.timelineChart} style={{ height: height + 80 }}>
        <div>
          {title && <h4>{title}</h4>}
          <Chart height={height} padding={padding} data={dv} scale={cols} forceFit>
            <View
              end={{
                x: 1,
                y: 0.5,
              }}
              data={dv}
            >
              <Axis name="x" />
              <Axis name="y1" />
              <Tooltip
              showTitle={false}
              itemTpl='<li data-index={index}><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}{value}</li>'
            />
              <Legend name="key" position="top" />
              <Geom type="line" position="x*value" size={borderWidth} color={['key', '#006400']} />
            </View>
            <View
              start={{
                x: 0,
                y: 0.65,
              }}
              data={dv}
            >
              <Axis name="volume" />
              <Axis name="x" />
              <Legend name="key" position="top" />
              <Geom
                type="interval"
                position="x*volume"
                size={borderWidth}
                color={['key', 'rgba(24, 144, 255, 0.85)']}
                tooltip={[
                  'x*volume',
                  (x, volume) => {
                    return {
                      name: time,
                      value:
                        '<br/><span style="padding-left: 16px">Volume:' + volume + '</span><br/>',
                    };
                  },
                ]}
              />
            </View>
          </Chart>
          <div style={{ marginRight: -20 }}>
            <SliderGen />
          </div>
        </div>
      </div>
    );
  }
}

export default TimelineChart;
