import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Form,Row,Col,Input,Button,Table,Layout,} from 'antd';
const {FormItem} = Form;
const {Content,Header} = Layout;

class SearchForm extends React.Component{
    handleSearch = (e)=>{
        console.log(e);
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <Form className="search-form" onSubmit={this.handleSearch}>
                <Row>
                    <Col span={12}>
                        <FormItem label={'Mac地址'}>
                            {getFieldDecorator('MAC')(<Input placeholder="placeholder" />)}
                        </FormItem>
                    </Col>

                    <Col span={12}>
                        <FormItem label={'OS'}>
                            {getFieldDecorator('OS')(<Input />)}
                        </FormItem>
                    </Col>

                    <Col span={12}>
                        <FormItem label={'Mac地址'}>
                            {getFieldDecorator('state')(<Input />)}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem label={'Mac地址'}>
                            {getFieldDecorator('province')(<Input />)}
                        </FormItem>
                    </Col>

                    <Col span={12}>
                        <FormItem label={'Mac地址'}>
                            {getFieldDecorator('city')(<Input />)}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem label={'Mac地址'}>
                            {getFieldDecorator('gmtDate')(<Input />)}
                        </FormItem>
                    </Col>

                    <Col span={12}>
                        <FormItem label={'Mac地址'}>
                            {getFieldDecorator('version')(<Input />)}
                        </FormItem>
                    </Col>

                </Row>
                <Row>
                    <Col span={24} style={{textAlign:'right'}}>
                        <Button  type="primary" htmlType="submit">查询</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}
let data = [{
    gmtDate:'20170917 21:16:22',
    IP:'192.168.5.16',
    MAC:'54-EE-75-8A-85-8B',
    version:'1.9.4',
    OS:'win32',
    state:'中国',
    province:'浙江省',
    city:'杭州市'
}];
let columns = [{
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
        <Header>
            <WrappedSearchForm/>
        </Header>
        <Content>
            <Table dataSource={data} columns={columns}></Table>
        </Content>
    </Layout>,
    document.getElementById('root'));
