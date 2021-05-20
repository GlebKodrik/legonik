import { Form, Input, Button, Checkbox, Card } from "antd";
import s from "./Login.module.scss";
import cn from "classnames";
import { NavLink } from "react-router-dom";
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
          onFinish={(values) => {
            console.log(values);
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
            label="Password"
            name="password"
            rules={[{ required: true }]}
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
