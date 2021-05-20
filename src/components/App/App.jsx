import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import "swiper/swiper-bundle.css";
import { Login } from "./../Login/Login";
import { FooterItem } from "./../Footer/Footer";
import { HeaderItem } from "../Header/Header";
import "./App.scss";
import { ScrollToTop } from "../shared/ScrollToTop";
import { MainRouter } from "../Main/MainRoute";
import { Registration } from "../Registration/Registration";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Route>
      <ScrollToTop />
      <Layout className={"app"}>
        <Header className={"layout header"}>
          <HeaderItem />
        </Header>
        <Content className={"layout content"}>
          <Switch>
            <Route path="/registration" render={() => <Registration />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/" render={() => <MainRouter />} />
          </Switch>
        </Content>
        <Footer className={"layout footer"}>
          <FooterItem />
        </Footer>
      </Layout>
    </Route>
  );
}

export default App;
