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
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../shared/Loader/Loader";
import { useEffect } from "react";
import { initializeApp } from "../../redux/app-reducer";
import { Goods } from "../Main/Goods/Goods";

const { Header, Content, Footer } = Layout;

const App = () => {
  const dispacth = useDispatch();
  const initialized = useSelector((state) => state.app.initialized);

  useEffect(() => {
    dispacth(initializeApp());
  }, [dispacth]);

  if (!initialized) {
    return <Loader />;
  }

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
            <Route path="/product/:id" render={() => <Goods />} />
            <Route path="/" render={() => <MainRouter />} />
          </Switch>
        </Content>
        <Footer className={"layout footer"}>
          <FooterItem />
        </Footer>
      </Layout>
    </Route>
  );
};

export default App;
