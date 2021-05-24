import { Button, Card, Col, Form, Image, Input, Row, Space, Typography } from 'antd';
import './Form.css';

export default function Forms(){
    return( 
        <Card className='form-card' title="Registration Form" extra={<a href="/login">Already Have an Account?</a>}>
            <Form className='form'>
              <Space direction='vertical' size='middle'>
              <Image className='logo' preview={false} src='https://lh3.googleusercontent.com/proxy/uDuRWecMCF04B5y9FsBNg6Trb_QLsKOemJ7bI7thhpGRMLdT2PktgMDPqaxtPtOIpC75qppyWwuzCz8N3hoyj9DDNhqlPkn1Spb2ONBdgDk__9qf_JTluGw9J4laT9ext87KGT-BdHKUhLT9' alt='Error'/>
              <Typography.Title level={3} className='brand_name'>Company Name</Typography.Title>
              <Row gutter={30}>
                <Col span={12}>
                  First Name* 
                  <Input className='firstname'/>
                </Col>
                <Col span={12}>
                Last Name* 
                  <Input className='lastname'/>
                </Col>
              </Row>
             <div>
             Email Address* 
              <Input className='email'/>
             </div>
             <div>
             Password
              <Input.Password className='password' />
             </div>
              <div>
              Confirm Password 
              <Input.Password className='password' /> 
              </div>
              <Button className='button' type='primary'>Register</Button>

              </Space>
            </Form>
  </Card>
    );
}