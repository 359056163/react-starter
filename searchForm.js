/**
 * Created by puqin on 2017/9/14.
 */

import React from 'react';
import { Form } from 'antd';
import FormItem from "antd/es/form/FormItem.d";
import Row from "antd/es/grid/row.d";

class SearchForm extends React.Component{
    handleSubmit = (e) => {
        e.preventDefault();

    }
    render(){
        return <Form>
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
        </Form>
    }
}