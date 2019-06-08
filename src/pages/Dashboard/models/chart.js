import { fakeChartData, getBrokers, getFutures, passBroker } from '@/services/api';

export default {
  namespace: 'chart',

  state: {
    visitData: [],
    visitData2: [],
    salesData: [],
    searchData: [],
    offlineData: [],
    offlineChartData: [],
    salesTypeData: [],
    salesTypeDataOnline: [],
    salesTypeDataOffline: [],
    radarData: [],
    loading: false,
    brokersData: [],
    futuresData: [],
    currentBroker: null,
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(fakeChartData);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchSalesData(_, { call, put }) {
      const response = yield call(fakeChartData);
      yield put({
        type: 'save',
        payload: {
          salesData: response.salesData,
        },
      });
    },
    *fetchBrokers(_, { call, put }) {
      const response = yield call(getBrokers);
      yield put({
        type: 'save',
        payload: {
          brokersData: response.body,
        },
      });
    },
    *fetchFutures({ payload }, { call, put }) {
      const response = yield call(getFutures, payload);
      yield put({
        type: 'save',
        payload: {
          futuresData: response.body,
        },
      });
    },
    *setBroker({ payload }, { call, put }) {
      const broker = yield call(passBroker, payload);
      yield put({
        type: 'save',
        payload: {
          currentBroker: broker,
        },
      });
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    clear() {
      return {
        visitData: [],
        visitData2: [],
        salesData: [],
        searchData: [],
        offlineData: [],
        offlineChartData: [],
        salesTypeData: [],
        salesTypeDataOnline: [],
        salesTypeDataOffline: [],
        radarData: [],
        brokersData: [],
      };
    },
  },
};
