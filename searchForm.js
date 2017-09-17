/**
 * Created by puqin on 2017/9/14.
 */

import React from 'react';
import { Form } from 'antd';
const FormItem = Form.FormItem;
import Row from "antd/es/grid/row.d";

export class SearchForm extends React.Component{
    handleSubmit = (e) => {
        e.preventDefault();

    }
    render(){
        return (<Form>
            <Row>
                <FormItem>

                </FormItem>
                <FormItem>

                </FormItem>
            </Row>
            <Row>
                <FormItem>

                </FormItem>
                <FormItem>

                </FormItem>
            </Row>
            <Row>
                <FormItem>

                </FormItem>
                <FormItem>

                </FormItem>
            </Row>
            <Row>
                <FormItem>

                </FormItem>
                <FormItem>

                </FormItem>
            </Row>
        </Form>)
    }
}