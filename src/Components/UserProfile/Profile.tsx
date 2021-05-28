import { Avatar, Card, Col, Row, Space, Typography } from 'antd';
import PBig from './PBig/PBig';
import './Profile.css';
import PSmall from './PSmall/PSmall';

export default function Profile() {
    return (
        <Card className='profile-card'>
            <Row>
                <Col className="brief" span={6}>
                    <PSmall/>
                </Col>
                <Col className="more" span={18}>
                    <PBig/>
                </Col>
            </Row>
        </Card>
    );
}