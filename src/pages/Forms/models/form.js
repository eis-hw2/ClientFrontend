import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { trueSubmitForm, fakeSubmitForm } from '@/services/api';

export default {
  namespace: 'form',

  state: {
    step: {
      payAccount: 'ant-design@alipay.com',
      receiverAccount: 'test@example.com',
      receiverName: 'Alex',
      amount: '500',
    },
  },

  effects: {
    *submitRegularForm({ payload }, { call }) {
      yield call(fakeSubmitForm, payload);
      message.success('提交成功');
    },
    *submitStepForm({ payload }, { call, put }) {
      yield call(fakeSubmitForm, payload);
      yield put({
        type: 'saveStepFormData',
        payload,
      });
      yield put(routerRedux.push('/form/step-form/result'));
    },
    // *submitAdvancedForm({ payload }, { call }) {
    //   const response = yield call(trueSubmitForm, payload);
    //   console.log(response);
    //   if(response.status == 'success'){
    //     message.success('提交成功');
    //   }
    //   else{
    //     console.log(response);
    //   }
    // },
    *submitAdvancedForm({ payload }, { call }) {
      yield call(fakeSubmitForm, payload);
      message.success('提交成功');
    },
  },

  reducers: {
    saveStepFormData(state, { payload }) {
      return {
        ...state,
        step: {
          ...state.step,
          ...payload,
        },
      };
    },
  },
};
