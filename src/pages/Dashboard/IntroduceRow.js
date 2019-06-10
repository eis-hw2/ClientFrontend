import React, { memo } from 'react';
import { Row, Col, Icon, Tooltip, Card } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import styles from './Analysis.less';
import { ChartCard, MiniArea, MiniBar, MiniProgress, Field } from '@/components/Charts';
import Trend from '@/components/Trend';
import numeral from 'numeral';
import Yuan from '@/utils/Yuan';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};

const IntroduceRow = memo(({ loading, quotation }) => (
  <Row gutter={24}>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title={<FormattedMessage id="app.analysis.total-sales" defaultMessage="Current Price" />}
        action={
          <Tooltip
            title={<FormattedMessage id="app.analysis.introduce" defaultMessage="Current Price" />}
          >
            <Icon type="info-circle-o" />
          </Tooltip>
        }
        loading={loading}
        total={() => <Yuan>{quotation.currentPrice}</Yuan>}
        footer={
          <Field
            label={<FormattedMessage id="app.analysis.day-sales" defaultMessage="Daily Sales" />}
            value={`￥${numeral(quotation.currentPrice).format('0,0')}`}
          />
        }
        contentHeight={46}
      >
        <Trend flag="up" style={{ marginRight: 16 }}>
          <FormattedMessage id="app.analysis.changePrice" defaultMessage="Weekly Changes" />
          <span className={styles.trendText}>{quotation.changePrice}</span>
        </Trend>
        <Trend flag="up" style={{ marginRight: 16 }}>
          <FormattedMessage id="app.analysis.changePercent" defaultMessage="Weekly Changes" />
          <span className={styles.trendText}>{quotation.changePercent + '%'}</span>
        </Trend>
      </ChartCard>
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title={<FormattedMessage id="app.analysis.op" defaultMessage="Open Price" />}
        action={
          <Tooltip title={<FormattedMessage id="app.analysis.op" defaultMessage="Open Price" />}>
            <Icon type="info-circle-o" />
          </Tooltip>
        }
        loading={loading}
        total={() => <Yuan>{quotation.openPrice}</Yuan>}
        footer={
          <Field
            label={<FormattedMessage id="app.analysis.mp" defaultMessage="Mean Price" />}
            value={`￥${numeral((quotation.currentPrice + quotation.openPrice) / 2).format('0,0')}`}
          />
        }
        contentHeight={46}
      >
        <Trend flag="up" style={{ color: 'red', marginRight: 16 }}>
          <FormattedMessage id="app.analysis.hl" defaultMessage="High Limit" />
          <span className={styles.trendText} style={{ color: 'red' }}>
            {'￥' + (quotation.openPrice * 10 * 11) / 100}
          </span>
        </Trend>
        <Trend flag="down" style={{ color: 'green', marginRight: 16 }}>
          <FormattedMessage id="app.analysis.ll " defaultMessage="Low Limit" />
          <span className={styles.trendText} style={{ color: 'green' }}>
            {'￥' + (quotation.openPrice * 10 * 9) / 100}
          </span>
        </Trend>
      </ChartCard>
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title={<FormattedMessage id="app.analysis.pf" defaultMessage="Price Fluctuation" />}
        action={
          <Tooltip
            title={<FormattedMessage id="app.analysis.of" defaultMessage="Price Fluctuation" />}
          >
            <Icon type="info-circle-o" />
          </Tooltip>
        }
        loading={loading}
        total={() => <Yuan>{'￥' + (quotation.highPrice - quotation.lowPrice)}</Yuan>}
        footer={
          <Field
            label={<FormattedMessage id="app.analysis.pfp" defaultMessage="Daily Sales" />}
            value={`%${numeral(
              (100 * (quotation.highPrice - quotation.lowPrice)) / quotation.openPrice
            ).format('0,0')}`}
          />
        }
        contentHeight={46}
      >
        <Trend style={{ color: 'red', marginRight: 16 }}>
          <FormattedMessage id="app.analysis.hp" defaultMessage="Weekly Changes" />
          <span className={styles.trendText} style={{ color: 'red' }}>
            {'￥' + quotation.highPrice}
          </span>
        </Trend>
        <Trend style={{ color: 'green', marginRight: 16 }}>
          <FormattedMessage id="app.analysis.lp" defaultMessage="Weekly Changes" />
          <span className={styles.trendText} style={{ color: 'green' }}>
            {'￥' + quotation.lowPrice}
          </span>
        </Trend>
      </ChartCard>
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title={<FormattedMessage id="app.analysis.tr" defaultMessage="Current Price" />}
        action={
          <Tooltip title={<FormattedMessage id="app.analysis.tr" defaultMessage="Current Price" />}>
            <Icon type="info-circle-o" />
          </Tooltip>
        }
        loading={loading}
        total={quotation.turnoverRate + '%'}
        footer={
          <Field
            label={<FormattedMessage id="app.analysis.ts" defaultMessage="Daily Sales" />}
            value={`${numeral(quotation.totalShare).format('0,0')}`}
          />
        }
        contentHeight={46}
      >
        <Trend style={{ marginRight: 16 }}>
          <FormattedMessage id="app.analysis.tv" defaultMessage="Weekly Changes" />
          <span className={styles.trendText}>{quotation.totalVolume}</span>
        </Trend>
        <Trend style={{ marginRight: 16 }}>
          <FormattedMessage id="app.analysis.tc" defaultMessage="Weekly Changes" />
          <span className={styles.trendText}>{quotation.totalVolume}</span>
        </Trend>
      </ChartCard>
    </Col>
  </Row>
));

export default IntroduceRow;
