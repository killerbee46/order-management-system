import { Carousel, Image } from "antd";
import './Banner.css';

export default function Banner() {
    const slider=["https://boraturf.com/wp-content/uploads/2020/08/indoor_footbal_pitch-840x439-1.jpg","https://boraturf.com/wp-content/uploads/2020/08/indoor_footbal_pitch-840x439-1.jpg","https://boraturf.com/wp-content/uploads/2020/08/indoor_footbal_pitch-840x439-1.jpg"]
    return (
        <Carousel autoplay effect='fade' className='carousel'>
                <Image className='banner' preview={false} src='https://cdn.wallpapersafari.com/73/1/6kYwyR.jpg' />
                <Image className='banner' preview={false} src='https://wallpaperaccess.com/full/1884509.jpg' />
                <Image className='banner' preview={false} src='https://wallpaperaccess.com/full/1884497.jpg' />
                <Image className='banner' preview={false} src='https://www.teahub.io/photos/full/3-35374_football-wallpapers-hd-football-wallpaper-hd.jpg' />
        </Carousel>
    );
}