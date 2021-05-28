import { Avatar, Col, Row, Space, Typography } from "antd";
import './PSmall.css';

export default function PSmall() { 
    return (
        <Row className='small' justify='center'>
            <Space direction='vertical' size='large'>
                <Col className='avatar'>
                    <Avatar size={120} src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png' />
                </Col>
                <Col className='detail'>
                    <Typography.Paragraph className='name'>User Name</Typography.Paragraph>
                    <Typography.Paragraph className='position'>Position</Typography.Paragraph>
                    <Typography.Paragraph className='social_media'> <a href="#">F</a><a href="#">I</a><a href="#">T</a> </Typography.Paragraph>
                    <Typography.Paragraph className='address'>Address, Address</Typography.Paragraph>
                    <Typography.Paragraph className='email'>email@email.com</Typography.Paragraph>
                    <Typography.Paragraph className='contact'>741/852963</Typography.Paragraph>
                </Col>
            </Space>
        </Row>
    );
}