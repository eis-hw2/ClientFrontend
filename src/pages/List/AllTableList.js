import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import Link from 'umi/link';
import request from '@/utils/request';
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Select,
  Icon,
  Button,
  Dropdown,
  Menu,
  InputNumber,
  DatePicker,
  Modal,
  message,
  Badge,
  Divider,
  Steps,
  Radio,
} from 'antd';
import StandardTable from '@/components/StandardTable';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from './TableList.less';

const { RangePicker } = DatePicker;
const FormItem = Form.Item;
const { Step } = Steps;
const { TextArea } = Input;
const { Option } = Select;
const RadioGroup = Radio.Group;
const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(',');
const statusMap = ['processing', 'success', 'error', 'default'];
const status = ['WAITING', 'FINISHED', 'OUTDATED', 'CANCELLED'];
const antiStatusMap = { WAITING: 0, FINISHED: 1, OUTDATED: 2, CANCELLED: 3 };
const fieldLabels = {
  startTime: 'Start Time',
  endTime: 'End Time',
}

const CreateForm = Form.create()(props => {
  const { modalVisible, form, handleAdd, handleModalVisible } = props;
  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      handleAdd(fieldsValue);
    });
  };
  return (
    <Modal
      destroyOnClose
      title="新建规则"
      visible={modalVisible}
      onOk={okHandle}
      onCancel={() => handleModalVisible()}
    >
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="描述">
        {form.getFieldDecorator('desc', {
          rules: [{ required: true, message: '请输入至少五个字符的规则描述！', min: 5 }],
        })(<Input placeholder="请输入" />)}
      </FormItem>
    </Modal>
  );
});

@Form.create()
class UpdateForm extends PureComponent {
  static defaultProps = {
    handleUpdate: () => {},
    handleUpdateModalVisible: () => {},
    values: {},
  };

  constructor(props) {
    super(props);

    this.state = {
      formVals: {
        name: props.values.name,
        desc: props.values.desc,
        key: props.values.key,
        target: '0',
        template: '0',
        type: '1',
        time: '',
        frequency: 'month',
      },
      currentStep: 0,
    };

    this.formLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 13 },
    };
  }

  handleNext = currentStep => {
    const { form, handleUpdate } = this.props;
    const { formVals: oldValue } = this.state;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const formVals = { ...oldValue, ...fieldsValue };
      this.setState(
        {
          formVals,
        },
        () => {
          if (currentStep < 2) {
            this.forward();
          } else {
            handleUpdate(formVals);
          }
        }
      );
    });
  };

  backward = () => {
    const { currentStep } = this.state;
    this.setState({
      currentStep: currentStep - 1,
    });
  };

  forward = () => {
    const { currentStep } = this.state;
    this.setState({
      currentStep: currentStep + 1,
    });
  };

  renderContent = (currentStep, formVals) => {
    const { form } = this.props;
    if (currentStep === 1) {
      return [
        <FormItem key="target" {...this.formLayout} label="监控对象">
          {form.getFieldDecorator('target', {
            initialValue: formVals.target,
          })(
            <Select style={{ width: '100%' }}>
              <Option value="0">表一</Option>
              <Option value="1">表二</Option>
            </Select>
          )}
        </FormItem>,
        <FormItem key="template" {...this.formLayout} label="规则模板">
          {form.getFieldDecorator('template', {
            initialValue: formVals.template,
          })(
            <Select style={{ width: '100%' }}>
              <Option value="0">规则模板一</Option>
              <Option value="1">规则模板二</Option>
            </Select>
          )}
        </FormItem>,
        <FormItem key="type" {...this.formLayout} label="规则类型">
          {form.getFieldDecorator('type', {
            initialValue: formVals.type,
          })(
            <RadioGroup>
              <Radio value="0">强</Radio>
              <Radio value="1">弱</Radio>
            </RadioGroup>
          )}
        </FormItem>,
      ];
    }
    if (currentStep === 2) {
      return [
        <FormItem key="time" {...this.formLayout} label="开始时间">
          {form.getFieldDecorator('time', {
            rules: [{ required: true, message: '请选择开始时间！' }],
          })(
            <DatePicker
              style={{ width: '100%' }}
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              placeholder="选择开始时间"
            />
          )}
        </FormItem>,
        <FormItem key="frequency" {...this.formLayout} label="调度周期">
          {form.getFieldDecorator('frequency', {
            initialValue: formVals.frequency,
          })(
            <Select style={{ width: '100%' }}>
              <Option value="month">月</Option>
              <Option value="week">周</Option>
            </Select>
          )}
        </FormItem>,
      ];
    }
    return [
      <FormItem key="name" {...this.formLayout} label="规则名称">
        {form.getFieldDecorator('name', {
          rules: [{ required: true, message: '请输入规则名称！' }],
          initialValue: formVals.name,
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="desc" {...this.formLayout} label="规则描述">
        {form.getFieldDecorator('desc', {
          rules: [{ required: true, message: '请输入至少五个字符的规则描述！', min: 5 }],
          initialValue: formVals.desc,
        })(<TextArea rows={4} placeholder="请输入至少五个字符" />)}
      </FormItem>,
    ];
  };

  renderFooter = currentStep => {
    const { handleUpdateModalVisible, values } = this.props;
    if (currentStep === 1) {
      return [
        <Button key="back" style={{ float: 'left' }} onClick={this.backward}>
          上一步
        </Button>,
        <Button key="cancel" onClick={() => handleUpdateModalVisible(false, values)}>
          取消
        </Button>,
        <Button key="forward" type="primary" onClick={() => this.handleNext(currentStep)}>
          下一步
        </Button>,
      ];
    }
    if (currentStep === 2) {
      return [
        <Button key="back" style={{ float: 'left' }} onClick={this.backward}>
          上一步
        </Button>,
        <Button key="cancel" onClick={() => handleUpdateModalVisible(false, values)}>
          取消
        </Button>,
        <Button key="submit" type="primary" onClick={() => this.handleNext(currentStep)}>
          完成
        </Button>,
      ];
    }
    return [
      <Button key="cancel" onClick={() => handleUpdateModalVisible(false, values)}>
        取消
      </Button>,
      <Button key="forward" type="primary" onClick={() => this.handleNext(currentStep)}>
        下一步
      </Button>,
    ];
  };

  render() {
    const { updateModalVisible, handleUpdateModalVisible, values } = this.props;
    const { currentStep, formVals } = this.state;

    return (
      <Modal
        width={640}
        bodyStyle={{ padding: '32px 40px 48px' }}
        destroyOnClose
        title="规则配置"
        visible={updateModalVisible}
        footer={this.renderFooter(currentStep)}
        onCancel={() => handleUpdateModalVisible(false, values)}
        afterClose={() => handleUpdateModalVisible()}
      >
        <Steps style={{ marginBottom: 28 }} size="small" current={currentStep}>
          <Step title="基本信息" />
          <Step title="配置规则属性" />
          <Step title="设定调度周期" />
        </Steps>
        {this.renderContent(currentStep, formVals)}
      </Modal>
    );
  }
}

/* eslint react/no-multi-comp:0 */
@connect(({ rule, loading }) => ({
  rule,
  loading: loading.models.rule,
}))
@Form.create()
class AllTableList extends PureComponent {
  state = {
    modalVisible: false,
    updateModalVisible: false,
    expandForm: false,
    selectedRows: [],
    formValues: {},
    stepFormValues: {},
    data: [],
    brokersData: [],
    futuresData: [],
    startTime: "",
    endTime: ""
  };

  columns = [
    {
      title: 'Future',
      dataIndex: 'futureName',
    },
    {
      title: 'Buyer',
      dataIndex: 'buyerTraderName',
    },
    {
      title: 'Seller',
      dataIndex: 'sellerTraderName',
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Volume',
      dataIndex: 'count',
    },
    {
      title: 'Creation Time',
      dataIndex: 'creationTime',
      sorter: true,
      render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
    },
  ];
  
  componentDidMount() {
    this.getBrokers()
  }

  getBrokers = () =>{
    fetch('http://202.120.40.8:30255/api/v1/Broker', {
        method: 'GET',
        credentials: 'include',
      })
        .then(res => res.json())
        .then(
          result =>{
            this.setState({
              brokersData: result.body
            })
          }
        )
  }

  fetchData = (val) =>{
    let path = 'http://202.120.40.8:30255/api/v1/OrderBlotter/query?brokerId=' + this.state.currentBroker 
    + "&marketDepthId=" + val
    + "&startTime=" + this.state.startTime
    + "&endTime=" + this.state.endTime
    console.log("path", path)
    fetch(path, {
      method: 'GET',
      credentials: 'include',
      headers: {
        token: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(result => {
        console.log('history order:', result.body);
        let data = result.body;
        // for (let item in data) {
        //   data[item].key = parseInt(item);
        //   data[item].status = antiStatusMap[data[item].status];
        //   if (data[item].status === 0) {
        //     data[item].cancel = 1;
        //   }
        // }
        if (data === undefined) {
          return;
        }
        this.setState({
          data: {
            list: data,
            pagination: {
              current: 1,
              pageSize: 5,
              total: data.length,
            },
          },
        });
      });
  }

  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch } = this.props;
    const { formValues } = this.state;

    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = getValue(filtersArg[key]);
      return newObj;
    }, {});

    const params = {
      currentPage: pagination.current,
      pageSize: pagination.pageSize,
      ...formValues,
      ...filters,
    };
    console.log("handleChange params:", params)
    if (sorter.field) {
      params.sorter = `${sorter.field}_${sorter.order}`;
    }
    console.log("originData", this.state.data)
    let originData = this.state.data;
    let newData = originData
    // let newList = []
    // if(params.status !== ""){
    //   let statusList =params.status.split(",")
    //   console.log("originData", originData)
    //   for(let i in originData.list){
    //     if(originData.list[i].status in statusList){
    //       newList.push(originData.list[i])
    //     }
    //   newData.list = newList
    //   }
    // }
    // else{
    //   this.fetchData()
    // }
    newData.pagination.current = params.currentPage;
    this.setState({
      data: newData,
    });
    this.setState({
      cTime: new Date(),
    });
  };

  handleFormReset = () => {
    const { form, dispatch } = this.props;
    form.resetFields();
    this.setState({
      formValues: {},
    });
    dispatch({
      type: 'rule/fetch',
      payload: {},
    });
  };

  toggleForm = () => {
    const { expandForm } = this.state;
    this.setState({
      expandForm: !expandForm,
    });
  };

  handleMenuClick = e => {
    const { dispatch } = this.props;
    const { selectedRows } = this.state;
    if (selectedRows.length === 0) return;
    switch (e.key) {
      case 'remove':
        dispatch({
          type: 'rule/remove',
          payload: {
            key: selectedRows.map(row => row.key),
          },
          callback: () => {
            this.setState({
              selectedRows: [],
            });
          },
        });
        break;
      default:
        break;
    }
  };

  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
    });
  };

  handleSearch = e => {
    e.preventDefault();

    const { dispatch, form } = this.props;

    form.validateFields((err, fieldsValue) => {
      if (err) return;

      const values = {
        ...fieldsValue,
        updatedAt: fieldsValue.updatedAt && fieldsValue.updatedAt.valueOf(),
      };

      this.setState({
        formValues: values,
      });

      dispatch({
        type: 'rule/fetch',
        payload: values,
      });
    });
  };

  handleModalVisible = flag => {
    this.setState({
      modalVisible: !!flag,
    });
  };

  handleUpdateModalVisible = (flag, record) => {
    this.setState({
      updateModalVisible: !!flag,
      stepFormValues: record || {},
    });
  };

  handleAdd = fields => {
    const { dispatch } = this.props;
    dispatch({
      type: 'rule/add',
      payload: {
        desc: fields.desc,
      },
    });

    message.success('添加成功');
    this.handleModalVisible();
  };

  handleUpdate = fields => {
    const { dispatch } = this.props;
    const { formValues } = this.state;
    dispatch({
      type: 'rule/update',
      payload: {
        query: formValues,
        body: {
          name: fields.name,
          desc: fields.desc,
          key: fields.key,
        },
      },
    });

    message.success('配置成功');
    this.handleUpdateModalVisible();
  };

  onChangeBroker = value => {
    const { dispatch } = this.props;
    console.log(`selected ${value} Broker`);
    this.setState({
      currentBroker: value,
    });
    fetch('http://202.120.40.8:30255/api/v1/Future?brokerId='+value, {
        method: 'GET',
        credentials: 'include',
      })
        .then(res => res.json())
        .then(
          result =>{
            this.setState({
              futuresData: result.body
            })
          }
        )
  };
  

  onChangeFuture = value => {
    console.log(`selected ${value}`);
    this.setState({
      currentFuture: value,
    });
    this.fetchData(value);
  };

  onChangeStartTime = (value, valueS) => {
    console.log(value.minutes());
    this.setState({
      startTime: valueS,
    });
  };

  onChangeEndTime = (value, valueS) => {
    this.setState({
      endTime: valueS,
    });
  };

  onChangeRange = (val)=>{
    this.setState({
      startTime:val[0].format("YYYY-MM-DD HH:MM:SS"),
      endTime:val[1].format("YYYY-MM-DD HH:MM:SS"),
    })
    console.log(val[0].format("YYYY-MM-DD HH:MM:SS"))
  }

  render() {
    const { selectedRows, modalVisible, updateModalVisible, stepFormValues } = this.state;
    const menu = (
      <Menu onClick={this.handleMenuClick} selectedKeys={[]}>
        <Menu.Item key="remove">删除</Menu.Item>
        <Menu.Item key="approval">批量审批</Menu.Item>
      </Menu>
    );
    console.log("brokersData", this.state.brokersData)
    console.log("futuresData", this.state.futuresData)

    const parentMethods = {
      handleAdd: this.handleAdd,
      handleModalVisible: this.handleModalVisible,
    };
    const updateMethods = {
      handleUpdateModalVisible: this.handleUpdateModalVisible,
      handleUpdate: this.handleUpdate,
    };
    return (
      <div>
        <Card bordered={false} title={'History Orders'}>
        <Row style={{ marginBottom: '20px' }}>
            <Col xl={6} lg={10} md={12} sm={24} xs={24}>
              <h2>Broker: </h2>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a broker"
                optionFilterProp="children"
                onChange={this.onChangeBroker}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {this.state.brokersData.map(item => {
                  return <Option value={item.id}>{item.url}</Option>;
                })}
              </Select>
            </Col>
            <Col xl={12} lg={10} md={12} sm={24} xs={24}>
              <h2>Date Range: </h2>
              <RangePicker onChange={this.onChangeRange}/>
            </Col>
            <Col xl={6} lg={10} md={12} sm={24} xs={24}>
              <h2>Future: </h2>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a future"
                optionFilterProp="children"
                onChange={this.onChangeFuture}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {this.state.futuresData.map(item => {
                  return <Option value={item.marketDepthId}>{item.description}</Option>;
                })}
              </Select>
            </Col>
          </Row>
        
          <div className={styles.tableList}>
            <StandardTable
              selectedRows={selectedRows}
              data={this.state.data}
              columns={this.columns}
              onSelectRow={this.handleSelectRows}
              onChange={this.handleStandardTableChange}
            />
          </div>
        </Card>
        <CreateForm {...parentMethods} modalVisible={modalVisible} />
        {stepFormValues && Object.keys(stepFormValues).length ? (
          <UpdateForm
            {...updateMethods}
            updateModalVisible={updateModalVisible}
            values={stepFormValues}
          />
        ) : null}
      </div>
    );
  }
}

export default AllTableList;
