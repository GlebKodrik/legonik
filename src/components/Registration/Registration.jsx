import { Form, Input, Button, Card } from "antd";
import s from "./Registration.module.scss";
import cn from "classnames";
import { validateMessages } from "../../common/validate";

const layout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 15,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 15,
  },
};

export const Registration = () => {
  return (
    <div className={cn("container-small", s.form)}>
      <Card title="Регистрация">
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
            name="password"
            label="Пароль"
            rules={[
              {
                required: true,
              },
              {
                min: 6,
                message: "Пароль слишком короткий",
              },
              {
                max: 15,
                message: "Пароль слишком длинный",
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Пароль" />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Повторите пароль"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error("Пароль не совпадает"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Повторите пароль" />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button htmlType="submit">Зарегистрироваться</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
