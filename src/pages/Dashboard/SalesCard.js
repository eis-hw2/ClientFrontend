import React, { memo } from 'react';
import { Row, Col, Card, Tabs, DatePicker } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import numeral from 'numeral';
import styles from './Analysis.less';
import { Bar } from '@/components/Charts';

const { RangePicker } = DatePicker;
const { TabPane } = Tabs;

const rankingListData = [];
for (let i = 0; i < 5; i += 1) {
  rankingListData.push({
    title: formatMessage({ id: 'app.analysis.test' }, { no: i }),
    total: 323234,
  });
}

const rankingListData1 = [];
for (let i = 0; i < 5; i += 1) {
  rankingListData1.push({
    title: formatMessage({ id: 'app.analysis.test' }, { no: i }),
    total: 323234,
  });
}
//const OfflineData = React.lazy(() => import('./OfflineData'));
//const activeKey = '' || (offlineData[0] && offlineData[0].name);

const SalesCard = memo(
  ({ marketDepth, salesData, isActive, handleRangePickerChange, loading, selectDate }) => (
    <Card loading={loading} bordered={false} bodyStyle={{ padding: 0 }}>
      <div className={styles.salesCard}>
        <Tabs size="large" tabBarStyle={{ marginBottom: 24 }}>
          <TabPane
            tab={<FormattedMessage id="app.analysis.ob" defaultMessage="Sales" />}
            key="sales"
          >
            <Row>
              {marketDepth.sellers.map((item, i) => (
                <Col xl={4}>
                  <div className={styles.salesRank}>
                    <h4 className={styles.rankingTitle}>{'SELL' + (i + 1)}</h4>
                    <ul className={styles.rankingList}>
                      <li key={item.title}>
                        <span style={{ color: 'green' }}>{'Price ¥' + item.price + ' | '}</span>
                        <br />
                        <br />
                        <span style={{ color: 'blue' }}>{'Volume ' + item.count}</span>
                      </li>
                    </ul>
                  </div>
                </Col>
              ))}
            </Row>
            <Row>
              {marketDepth.buyers.map((item, i) => (
                <Col xl={4}>
                  <div className={styles.salesRank}>
                    <h4 className={styles.rankingTitle}>{'BUY' + (i + 1)}</h4>
                    <ul className={styles.rankingList}>
                      <li key={item.title}>
                        <span style={{ color: 'red' }}>{'Price: ¥' + item.price + '|'}</span>
                        <span style={{ color: 'blue' }}>{'Volume: ' + item.count}</span>
                      </li>
                    </ul>
                  </div>
                </Col>
              ))}
            </Row>
          </TabPane>
        </Tabs>
      </div>
    </Card>
  )
);

export default SalesCard;
