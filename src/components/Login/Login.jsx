import { Form, Input, Button, Checkbox, Card } from "antd";
import s from "./Login.module.scss";
import cn from "classnames";
import { NavLink, useHistory } from "react-router-dom";
import { authAPI } from "../../api/api";
import { useDispatch } from "react-redux";
import { meThunk } from "../../redux/user-reducer";
import { messageError, success } from "../../common/sucsess";
const validateMessages = {
  required: "Обязательное поле!",
  types: {
    email: "Неккоректный email!",
  },
};

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 20,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 5,
  },
};

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className={cn("container-small", s.form)}>
      <Card title="Авторизация">
        <Form
          {...layout}
          name="login"
          validateMessages={validateMessages}
          initialValues={{
            remember: true,
          }}
          onFinish={async (values) => {
            const response = await authAPI.logIn({ ...values });
            if (!!response.data.errors) {
              messageError("Ошибка авторизации!");
              return;
            }
            dispatch(meThunk());
            history.push("/");
          }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
              },
            ]}
          >
            <Input placeholder="Ваш e-mail" />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password placeholder="Ваш пароль" />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Запомнить</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button htmlType="submit">Войти</Button>
          </Form.Item>
          <div className={s.reg}>
            <NavLink to={"/registration"}>Регистрация</NavLink>
          </div>
        </Form>
      </Card>
    </div>
  );
};
