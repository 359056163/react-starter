import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Table,Layout,} from 'antd';
const {Content,Header} = Layout;
import { Form, Row, Col, Input, Button, Icon } from 'antd';
const FormItem = Form.Item;

class SearchForm extends React.Component{
    // handleSearch = (e)=>{
    //     e.preventDefault();
    //     console.log(e);
    //     this.props.form.validateFields((err, values) => {
    //         console.log('Received values of form: ', values);
    //     });
    //
    // }

    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 19 },
        };
        return(
            <Form className="search-form" name="search-form" onSubmit={this.props.handleSearch}>
                <Row>
                    <Col span={12}>
                        <FormItem {...formItemLayout} label={'Mac地址'}>
                            {getFieldDecorator('MAC')(<Input name='MAC' placeholder="placeholder" />)}
                        </FormItem>
                    </Col>

                    <Col span={12}>
                        <FormItem {...formItemLayout}  label={'OS'}>
                            {getFieldDecorator('OS')(<Input name='OS' />)}
                        </FormItem>
                    </Col>

                    <Col span={12}>
                        <FormItem {...formItemLayout}  label={'国家'}>
                            {getFieldDecorator('state')(<Input name='state' />)}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem {...formItemLayout}  label={'省'}>
                            {getFieldDecorator('province')(<Input name='province' />)}
                        </FormItem>
                    </Col>

                    <Col span={12}>
                        <FormItem {...formItemLayout}  label={'城市'}>
                            {getFieldDecorator('city')(<Input name='city' />)}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem {...formItemLayout}  label={'日期'}>
                            {getFieldDecorator('gmtDate')(<Input name='gmtDate' />)}
                        </FormItem>
                    </Col>

                    <Col span={12}>
                        <FormItem {...formItemLayout}  label={'版本'}>
                            {getFieldDecorator('version')(<Input name='version' />)}
                        </FormItem>
                    </Col>

                </Row>
                <Row>
                    <Col span={24} style={{textAlign:'center'}}>
                        <Button  type="primary" htmlType="submit">查询</Button>
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

class DataTable extends React.Component{
    constructor(){
        super();
        this.state = {
            loading:false,
            columns :[{
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
        }],
            data:[{
                key:1,
                gmtDate:'20170917 21:16:22',
                IP:'192.168.5.16',
                MAC:'54-EE-75-8A-85-8B',
                version:'1.9.4',
                OS:'win32',
                state:'中国',
                province:'浙江省',
                city:'杭州市'
            }]
        };
    }
    onSearch = (e)=>{
        console.log(e);
        let self = this;
        e.preventDefault();
        this.setState({ loading: true });
        // let data = new FormData(e.target);
        // let req = new XMLHttpRequest();
        // req.open("GET","/someResource");
        // req.send(data);
        // req.onload = (event)=>{
        //      this.state.loading = false;
        //     if (req.status == 200) {
        //         self.state.data = req.response
        //     } else {
        //         alert(`错误:${req.status}`);
        //     }
        // };
        setTimeout(()=>{
            self.setState({
                loading: false,
                data: [{
                    key:1,
                    gmtDate:'20170918 02:16:22',
                    IP:'192.168.6.44',
                    MAC:'54-EE-75-8A-85-8B',
                    version:'1.9.4',
                    OS:'win32',
                    state:'中国',
                    province:'浙江省',
                    city:'杭州市'
                },{
                    key:2,
                    gmtDate:'20170918 22:16:22',
                    IP:'192.168.5.16',
                    MAC:'45-4F-75-8A-85-A4',
                    version:'1.9.4',
                    OS:'win32',
                    state:'中国',
                    province:'浙江省',
                    city:'杭州市'
                }]
            });
        },500)

    }
    exportFile(e){
        // let data = new FormData(document.forms['search-form']);
        // let req = new XMLHttpRequest();
        // req.open("GET","download/someResource");
        // req.send(data);
        // req.onload = (event)=>{
        //     if (req.status == 200 && req.responseType == 'blob') {
        //         let aLink = document.createElement('a');
        //         let url = URL.createObjectURL(req.response);
        //         aLink.download = "导出文件.xlsx";
        //         aLink.href = url;
        //         aLink.click();
        //         URL.revokeObjectURL(url);
        //     } else {
        //         alert(`错误:${req.status}或 类型${req.responseType}`);
        //     }
        // };
        let aLink = document.createElement('a');
        let blob = new Blob(['{"message":"test msg dfaklfdas","x":1,"flag":false}'],{type:'application/json'});
        let url = URL.createObjectURL(blob);
        aLink.download = "TEST.json";
        aLink.href = url;
        aLink.click();
        URL.revokeObjectURL(url);
    }
    render(){
        return (
            <Layout>
                <Content >
                    <WrappedSearchForm handleSearch={this.onSearch}/>
                </Content>
                <Content >
                    <Row>
                        <Col span={24} style={{textAlign:'right','paddingRight':24}}>
                            <a className="exportFile" onClick={this.exportFile}><b><Icon type="export" />导出</b></a>
                        </Col>
                    </Row>
                    <Table loading={this.state.loading} dataSource={ this.state.data} columns={this.state.columns} style={{width:'75%','minWidth':500,'marginLeft':24}}/>
                </Content>
            </Layout>
        )
    }
}
const WrappedSearchForm = Form.create()(SearchForm);
ReactDOM.render(
    <DataTable/>
   ,
    document.getElementById('root'));
