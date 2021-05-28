import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import Banner from "../Components/Banner/Banner";
import FutsalInfo from "../Components/FutsalInfo/FutsalInfo";
import Header from "../Components/Header/Header";

export default function MainLayout(){
    return(
        <Layout>
            <Content>
                <Header/>
                <Banner/>
                <FutsalInfo/>
            </Content>

        </Layout>
        
    );
}