import { Card } from "antd";
import './FutsalInfo.css';

export default function FutsalInfo() {
    return (
        <Card className='card'>
            <p className='fname'>White Horse Futsal</p>
            <p className='address'>Nilopool, Kapan, Kathmandu</p>
            <p className='email'> <a href="mailto:whorse46@gmail.com">whorse46@gmail.com</a> </p>
            <p className='contact'>01-426356</p>
            <p className='social'>"F""I""T""L"</p>
        </Card>


    );
}