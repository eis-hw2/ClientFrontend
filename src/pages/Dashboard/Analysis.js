import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import { Select, Row, Col, Icon, Menu, Dropdown, message } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import { getTimeDistance } from '@/utils/utils';
import styles from './Analysis.less';
import PageLoading from '@/components/PageLoading';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const AdvancedForm = React.lazy(() => import('../Forms/AdvancedForm'));
const TableList = React.lazy(() => import('../List/TableList'));
const BasicGraph = React.lazy(() => import('./BasicGraph'));
const IntroduceRow = React.lazy(() => import('./IntroduceRow'));
const SalesCard = React.lazy(() => import('./SalesCard'));
const TopSearch = React.lazy(() => import('./TopSearch'));
const ProportionSales = React.lazy(() => import('./ProportionSales'));
const OfflineData = React.lazy(() => import('./OfflineData'));
const OffbarData = React.lazy(() => import('./OffbarData'));
const Option = Select.Option;

@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))
class Analysis extends Component {
  state = {
    salesType: 'all',
    currentTabKey: '',
    rangePickerValue: getTimeDistance('year'),
    currentBroker: '',
    currentFuture: '',
    historyData: [],
    quotation: {},
    priceChartData: [{ x: 0, y1: 0, volume: 0 }],
    marketDepth: { buyers: [], sellers: [] },
  };

  componentDidMount() {
    const { dispatch } = this.props;
    this.reqRef = requestAnimationFrame(() => {
      dispatch({
        type: 'chart/fetch',
      });
    });
    requestAnimationFrame(() => {
      dispatch({
        type: 'chart/fetchBrokers',
      });
    });
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.reqRef);
  }

  handleChangeSalesType = e => {
    this.setState({
      salesType: e.target.value,
    });
  };

  handleTabChange = key => {
    this.setState({
      currentTabKey: key,
    });
  };

  handleRangePickerChange = rangePickerValue => {
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue,
    });

    dispatch({
      type: 'chart/fetchSalesData',
    });
  };

  selectDate = type => {
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue: getTimeDistance(type),
    });

    dispatch({
      type: 'chart/fetchSalesData',
    });
  };

  isActive = type => {
    const { rangePickerValue } = this.state;
    const value = getTimeDistance(type);
    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return '';
    }
    if (
      rangePickerValue[0].isSame(value[0], 'day') &&
      rangePickerValue[1].isSame(value[1], 'day')
    ) {
      return styles.currentDate;
    }
    return '';
  };

  onChangeBroker = value => {
    const { dispatch } = this.props;
    console.log(`selected ${value} Broker`);
    this.setState({
      currentBroker: value,
    });
    dispatch({
      type: 'chart/fetchFutures',
      payload: value,
    });
    dispatch({
      type: 'chart/setBroker',
      payload: value,
    });
    localStorage.setItem('broker', value);
  };

  onBlurBroker = () => {
    console.log('blur');
  };

  onFocusBroker = () => {
    const { dispatch } = this.props;
    console.log('focus');
  };

  onSearchBroker = val => {
    console.log('search:', val);
  };

  onChangeFuture = value => {
    console.log(`selected ${value}`);
    this.setState({
      currentFuture: value,
    });
    this.subscribeMsg(value);
  };

  onBlurFuture = () => {
    console.log('blur');
  };

  onFocusFuture = () => {
    console.log('focus');
  };

  onSearchFuture = val => {
    console.log('search:', val);
  };

  subscribeMsg = mId => {
    let dt = new Date();
    let socket = new WebSocket('ws://202.120.40.8:30257/websocket/' + dt.getTime());
    let val = {
      type: 'login',
      body: {
        username: localStorage.getItem('username'),
        token: localStorage.getItem('token'),
        marketDepthId: mId,
        brokerId: this.state.currentBroker,
      },
    };
    console.log('Send message:', val);
    socket.onopen = function() {
      console.log('Socket 已打开');
      socket.send(JSON.stringify(val));
    };
    socket.onmessage = msg => {
      let msgData = JSON.parse(msg.data);
      console.log('RECEIVE:', msgData);
      if (msgData.body === 'connect success') {
        return;
      }
      if (msgData.body === 'Login Success') {
        message.success('Connect Successfully, please wait...');
        return;
      }
      if (msgData.status !== undefined) {
        if (msgData.body.history.length === 0) {
          return;
        }
        this.setState({
          historyData: msgData.body.history,
          marketDepth: msgData.body.marketDepth,
          marketQuotation: msgData.body.marketQuotation,
        });
        this.initPriceChartData();
      } else {
        let newPriceChartData = this.state.priceChartData;
        newPriceChartData.push({
          x: msgData.timestamp,
          y1: msgData.curPrice,
          volume: msgData.curVolume,
        });
        this.setState({
          marketDepth: msgData.marketDepth,
          marketQuotation: msgData.marketQuotation,
          priceChartData: newPriceChartData,
        });
      }
    };
  };

  initPriceChartData = () => {
    let priceChartData = [];
    let hisData = this.state.historyData;
    if (hisData === undefined) {
      return;
    } else {
      if (hisData.length !== 0) {
        for (let index in hisData) {
          let data = hisData[index];
          let dt = new Date(data.datetime);
          let ts = dt.getTime();
          priceChartData.push({
            x: ts,
            y1: data.price,
            volume: data.volume,
          });
        }
      } else {
        return;
      }
    }
    this.setState({
      priceChartData: priceChartData,
    });
  };

  render() {
    const { rangePickerValue, salesType, currentTabKey } = this.state;
    const { chart, loading } = this.props;
    const {
      visitData,
      visitData2,
      salesData,
      searchData,
      offlineData,
      offlineChartData,
      salesTypeData,
      salesTypeDataOnline,
      salesTypeDataOffline,
      brokersData,
      futuresData,
      currentBroker,
    } = chart;
    let salesPieData;
    if (salesType === 'all') {
      salesPieData = salesTypeData;
    } else {
      salesPieData = salesType === 'online' ? salesTypeDataOnline : salesTypeDataOffline;
    }
    const activeKey = currentTabKey || (offlineData[0] && offlineData[0].name);
    let quotation =
      this.state.marketQuotation === undefined
        ? {
            changePercent: 0,
            changePrice: 0,
            closePrice: 0,
            currentPrice: 0,
            date: '2019-06-07',
            highPrice: 0,
            id: '2019-06-07',
            lastClosePrice: 0,
            lowPrice: 0,
            marketDepthId: 'f02d26de-b880-4a8c-8ffb-9bcffe759a8f',
            openPrice: 0,
            totalShare: 0,
            totalVolume: 0,
            turnoverRate: 0,
          }
        : this.state.marketQuotation;

    quotation.turnoverRate =
      Math.round((quotation.totalVolume / quotation.totalShare) * 10000) / 100;

    // console.log('futuresData:', futuresData);
    // console.log('marketQuotation:', this.state.marketQuotation);
    // console.log('marketDepth:', this.state.marketDepth);
    // console.log('offlineData:', offlineData);
    // console.log('salesData:', salesData);

    return (
      <GridContent>
        <Suspense fallback={<PageLoading />}>
          <Row style={{ marginBottom: '20px' }}>
            <Col xl={6} lg={10} md={12} sm={24} xs={24}>
              <h2>Broker: </h2>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a broker"
                optionFilterProp="children"
                onChange={this.onChangeBroker}
                onFocus={this.onFocusBroker}
                onBlur={this.onBlurBroker}
                onSearch={this.onSearchBroker}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {brokersData.map(item => {
                  return <Option value={item.id}>{item.url}</Option>;
                })}
              </Select>
            </Col>
            {/* <Col xl={6} lg={10} md={12} sm={24} xs={24}>
              <h2>Future: </h2>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a Date"
                optionFilterProp="children"
                onChange={this.onChangeFutureDate}
                onSearch={this.onSearchFutureDate}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {["1909","1910","1911"].map(item => {
                  return <Option value={item}>{item}</Option>;
                })}
              </Select>
            </Col> */}
            <Col xl={6} lg={10} md={12} sm={24} xs={24}>
              <h2>Future: </h2>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a future"
                optionFilterProp="children"
                onChange={this.onChangeFuture}
                onFocus={this.onFocusFuture}
                onBlur={this.onBlurFuture}
                onSearch={this.onSearchFuture}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {futuresData.map(item => {
                  return <Option value={item.marketDepthId}>{item.description}</Option>;
                })}
              </Select>
            </Col>
          </Row>
        </Suspense>

        <Suspense fallback={<PageLoading />}>
          <IntroduceRow loading={loading} quotation={quotation} />
        </Suspense>

        <Suspense fallback={null}>
          <SalesCard
            marketDepth={this.state.marketDepth}
            salesData={salesData}
            isActive={this.isActive}
            handleRangePickerChange={this.handleRangePickerChange}
            loading={loading}
            selectDate={this.selectDate}
          />
        </Suspense>

        <Suspense fallback={null}>
          <OfflineData
            activeKey={activeKey}
            loading={loading}
            offlineData={[{ name: 'Stores 0', cvr: 0.1 }]}
            offlineChartData={this.state.priceChartData}
            handleTabChange={this.handleTabChange}
          />
        </Suspense>

        <Suspense fallback={<PageLoading />}>
          <AdvancedForm />
        </Suspense>
      </GridContent>
    );
  }
}

export default Analysis;
