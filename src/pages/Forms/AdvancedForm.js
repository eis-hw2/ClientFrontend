import React, { PureComponent } from 'react';
import {
  Card,
  Button,
  Form,
  Icon,
  Col,
  Row,
  DatePicker,
  TimePicker,
  Input,
  Select,
  Popover,
} from 'antd';
import { connect } from 'dva';
import FooterToolbar from '@/components/FooterToolbar';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import TableForm from './TableForm';
import styles from './style.less';
import { message } from 'antd';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';
import { getToken } from '@/utils/utils';

const { Option } = Select;
const { RangePicker } = DatePicker;
const submitFormLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 10, offset: 7 },
  },
};
const fieldLabels = {
  name: '仓库名',
  url: '仓库域名',
  owner: '仓库管理员',
  orderType: 'OrderType',
  orderSide: 'OrderSide',
  future: 'Future',
  price: 'Price',
  volume: 'Volume',
  unitPrice: 'Price',
  targetType: 'Target Order Type',
  stopPrice: 'Stop Price',
  dateRange: '生效日期',
  type: '仓库类型',
  name2: '任务名',
  url2: '任务描述',
  owner2: '执行人',
  approver2: '责任人',
  dateRange2: '生效日期',
  type2: '任务类型',
};

const tableData = [
  {
    key: '1',
    workId: '00001',
    name: 'John Brown',
    department: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    workId: '00002',
    name: 'Jim Green',
    department: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    workId: '00003',
    name: 'Joe Black',
    department: 'Sidney No. 1 Lake Park',
  },
];

@connect(({ chart, loading }) => ({
  chart,
  submitting: loading.effects['form/submitAdvancedForm'],
}))
@Form.create()
class AdvancedForm extends PureComponent {
  state = {
    width: '100%',
    orderType: 'MarketOrder',
    orderSide: 'BUYER',
    future: '',
    targetType: 'MarketOrder',
  };

  componentDidMount() {
    window.addEventListener('resize', this.resizeFooterToolbar, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFooterToolbar);
  }

  getErrorInfo = () => {
    const {
      form: { getFieldsError },
    } = this.props;
    const errors = getFieldsError();
    const errorCount = Object.keys(errors).filter(key => errors[key]).length;
    if (!errors || errorCount === 0) {
      return null;
    }
    const scrollToField = fieldKey => {
      const labelNode = document.querySelector(`label[for="${fieldKey}"]`);
      if (labelNode) {
        labelNode.scrollIntoView(true);
      }
    };
    const errorList = Object.keys(errors).map(key => {
      if (!errors[key]) {
        return null;
      }
      return (
        <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
          <Icon type="cross-circle-o" className={styles.errorIcon} />
          <div className={styles.errorMessage}>{errors[key][0]}</div>
          <div className={styles.errorField}>{fieldLabels[key]}</div>
        </li>
      );
    });
    return (
      <span className={styles.errorIcon}>
        <Popover
          title="表单校验信息"
          content={errorList}
          overlayClassName={styles.errorPopover}
          trigger="click"
          getPopupContainer={trigger => trigger.parentNode}
        >
          <Icon type="exclamation-circle" />
        </Popover>
        {errorCount}
      </span>
    );
  };

  resizeFooterToolbar = () => {
    requestAnimationFrame(() => {
      const sider = document.querySelectorAll('.ant-layout-sider')[0];
      if (sider) {
        const width = `calc(100% - ${sider.style.width})`;
        const { width: stateWidth } = this.state;
        if (stateWidth !== width) {
          this.setState({ width });
        }
      }
    });
  };

  validate = () => {
    const {
      form: { validateFieldsAndScroll },
      dispatch,
    } = this.props;
    validateFieldsAndScroll((error, values) => {
      if (!error) {
        const { chart } = this.props;
        const { currentBroker } = chart;
        console.log(currentBroker, values);
        fetch('http://202.120.40.8:30255/api/v1/Order?brokerId=' + currentBroker, {
          method: 'POST',
          credentials: 'include',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            token: localStorage.getItem('token'),
          },
          body: JSON.stringify(values),
        })
          .then(res => res.json())
          .then(result => {
            console.log(result.body);
            if (result.id !== 'error' && result.body[currentBroker] !== null) {
              message.success('Order Successfully Created');
              this.handleReset();
            } else {
              message.error('Failed to Create Order');
            }
          });
      }
    });
  };

  onChangeOrderType = value => {
    console.log(`selected ${value}`);
    this.setState({
      orderType: value,
    });
  };

  onChangeOrderSide = value => {
    console.log(`selected ${value}`);
    this.setState({
      orderSide: value,
    });
  };

  onChangeFuture = value => {
    console.log(`selected ${value}`);
    this.setState({
      future: value,
    });
  };

  onChangeTargetType = value => {
    console.log(`selected ${value}`);
    this.setState({
      targetType: value,
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  render() {
    const { chart, loading } = this.props;

    const {
      form: { getFieldDecorator },
      submitting,
    } = this.props;
    const { width, orderType } = this.state;

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
    } = chart;
    return (
      <Card title="Creat Order" className={styles.card} bordered={false}>
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col lg={6} md={12} sm={24}>
              <Form.Item label={fieldLabels.orderType}>
                {getFieldDecorator('type', {
                  rules: [{ required: true, message: 'Choose OrderType' }],
                })(
                  <Select onChange={this.onChangeOrderType} placeholder="Choose OrderType">
                    <Option value="MarketOrder">MartketOrder</Option>
                    <Option value="LimitOrder">LimitOrder</Option>
                    <Option value="StopOrder">StopOrder</Option>
                    <Option value="CancelOrder">CancelOrder</Option>
                  </Select>
                )}
              </Form.Item>
            </Col>

            <Col lg={6} md={12} sm={24}>
              <Form.Item label={fieldLabels.orderSide}>
                {getFieldDecorator('side', {
                  rules: [{ required: true, message: 'Choose OrderSide' }],
                })(
                  <Select onChange={this.onChangeOrderSide} placeholder="Choose OrderSide">
                    <Option value="BUYER">Buy</Option>
                    <Option value="SELLER">Sell</Option>
                  </Select>
                )}
              </Form.Item>
            </Col>
          </Row>

          {orderType === 'StopOrder' ? (
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.targetType}>
                  {getFieldDecorator('targetType', {
                    rules: [{ required: true, message: 'Choose Target OrderType' }],
                  })(
                    <Select
                      onChange={this.onChangeTargetType}
                      placeholder="Choose Target OrderType"
                    >
                      <Option value="MarketOrder">MartketOrder</Option>
                      <Option value="LimitOrder">LimitOrder</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.stopPrice}>
                  {getFieldDecorator('stopPrice', {
                    rules: [{ required: true, message: 'Input Stop Price' }],
                  })(<Input placeholder="Input Stop Price" />)}
                </Form.Item>
              </Col>
            </Row>
          ) : (
            <br />
          )}

          <Row gutter={16}>
            <Col lg={6} md={12} sm={24}>
              <Form.Item label={fieldLabels.future}>
                {getFieldDecorator('futureName', {
                  rules: [{ required: true, message: 'Choose Future' }],
                })(
                  <Select onChange={this.onChangeFuture} placeholder="Choose Future">
                    {futuresData.map(item => {
                      return <Option value={item.description}>{item.description}</Option>;
                    })}
                  </Select>
                )}
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col lg={6} md={12} sm={24}>
              <Form.Item label={fieldLabels.volume}>
                {getFieldDecorator('totalCount', {
                  rules: [{ required: true, message: 'Input Volume' }],
                })(<Input placeholder="Input Volume" />)}
              </Form.Item>
            </Col>
            {orderType === 'MarketOrder' ||
            (this.state.orderType === 'StopOrder' && this.state.targetType === 'MarketOrder') ? (
              <br />
            ) : (
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.unitPrice}>
                  {getFieldDecorator('unitPrice', {
                    rules: [{ required: true, message: 'Input Price' }],
                  })(<Input placeholder="Input Price" />)}
                </Form.Item>
              </Col>
            )}
          </Row>

          <Row gutter={16}>
            <Form.Item {...submitFormLayout} style={{ marginTop: 32 }}>
              <Button type="primary" htmlType="submit" onClick={this.validate} loading={submitting}>
                <FormattedMessage id="form.submit" />
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </Card>
    );
  }
}

export default AdvancedForm;
