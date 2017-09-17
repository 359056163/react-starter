import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Table,Layout,} from 'antd';
const {Content,Header} = Layout;
import { Form, Row, Col, Input, Button, Icon } from 'antd';
const FormItem = Form.Item;

class SearchForm extends React.Component{
    handleSearch = (e)=>{
        e.preventDefault();
        console.log(e);
        data.push({
            key:2,
            gmtDate:'20170917 21:16:22',
            IP:'122.123.0.25',
            MAC:'88-EA-75-86-85-7E',
            version:'1.9.4',
            OS:'win32',
            state:'中国',
            province:'浙江省',
            city:'杭州市'
        });

    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 19 },
        };
        return(
            <Form className="search-form" onSubmit={this.handleSearch}>
                <Row>
                    <Col span={12}>
                        <FormItem {...formItemLayout} label={'Mac地址'}>
                            {getFieldDecorator('MAC')(<Input name= placeholder="placeholder" />)}
                        </FormItem>
                    </Col>

                    <Col span={12}>
                        <FormItem {...formItemLayout}  label={'OS'}>
                            {getFieldDecorator('OS')(<Input />)}
                        </FormItem>
                    </Col>

                    <Col span={12}>
                        <FormItem {...formItemLayout}  label={'国家'}>
                            {getFieldDecorator('state')(<Input />)}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem {...formItemLayout}  label={'省'}>
                            {getFieldDecorator('province')(<Input />)}
                        </FormItem>
                    </Col>

                    <Col span={12}>
                        <FormItem {...formItemLayout}  label={'城市'}>
                            {getFieldDecorator('city')(<Input />)}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem {...formItemLayout}  label={'日期'}>
                            {getFieldDecorator('gmtDate')(<Input />)}
                        </FormItem>
                    </Col>

                    <Col span={12}>
                        <FormItem {...formItemLayout}  label={'版本'}>
                            {getFieldDecorator('version')(<Input />)}
                        </FormItem>
                    </Col>

                </Row>
                <Row>
                    <Col span={24} style={{textAlign:'center'}}>
                        <Button  type="primary" htmlType="submit">查询</Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{textAlign:'right'}}>
                        <a><b><Icon type="export" />导出</b></a>
                    </Col>
                </Row>
            </Form>
        )
    }
}
const data = [{
    key:1,
    gmtDate:'20170917 21:16:22',
    IP:'192.168.5.16',
    MAC:'54-EE-75-8A-85-8B',
    version:'1.9.4',
    OS:'win32',
    state:'中国',
    province:'浙江省',
    city:'杭州市'
}];
const columns = [{
    title: '日期',
    dataIndex: 'gmtDate',
    key: 'gmtDate',
}, {
    title: 'IP地址',
    dataIndex: 'IP',
    key: 'IP',
}, {
    title: 'MAC地址',
    dataIndex: 'MAC',
    key: 'MAC',
}, {
    title: '版本号',
    dataIndex: 'version',
    key: 'version',
}, {
    title: '操作系统',
    dataIndex: 'OS',
    key: 'OS',
},{
    title: '国家',
    dataIndex: 'state',
    key: 'state',
},{
    title: '省',
    dataIndex: 'province',
    key: 'province',
},{
    title: '市',
    dataIndex: 'city',
    key: 'city',
}];
const WrappedSearchForm = Form.create()(SearchForm);
ReactDOM.render(
    <Layout>
        <Content >
            <WrappedSearchForm/>
        </Content>
        <Content >
            <Table dataSource={data} columns={columns} style={{width:'75%','min-width':500,'margin-left':24}}></Table>
        </Content>
    </Layout>,
    document.getElementById('root'));
