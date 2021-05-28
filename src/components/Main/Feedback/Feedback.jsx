import React from "react";
import s from "./Feedback.module.scss";
import { Form, Input, message } from "antd";
import { validateName } from "../../../common/validate";
import cn from "classnames";

const validateMessages = {
  required: "Обязательное поле!",
  types: {
    email: "Неккоректный email!",
  },
};

const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 3,
  },
};
const textareaLayout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 16,
  },
};

const success = () => {
  message.success("Заявка успешно оставлена!");
};
const Feedback = () => {
  const { TextArea } = Input;
  const [form] = Form.useForm();
  return (
    <>
      <div className={s.text}>
        Если хотите поблагодарить наших сотрудников или, наоборот, сообщить о
        недопустимом обращении с вами, напишите нам. Мы гарантируем
        конфиденциальность ваших персональных данных.
      </div>
      <div className={s.form}>
        <Form
          form={form}
          validateMessages={validateMessages}
          name="login"
          onFinish={(values) => {
            form.resetFields();
            success();
          }}
        >
          <Form.Item
            {...layout}
            label="Имя"
            name="name"
            rules={[
              {
                required: true,
              },
              {
                pattern: new RegExp(validateName),
                message: "Недопустимое имя",
              },
            ]}
          >
            <Input placeholder="Ваше имя" />
          </Form.Item>

          <Form.Item
            {...layout}
            label="Тема обращения"
            name="theme"
            rules={[
              {
                required: true,
              },
              {
                min: 4,
                message: "Слишком короткая тема обращения",
              },
              {
                max: 30,
                message: "Слишком длинная тема обращения",
              },
            ]}
          >
            <Input placeholder="Тема обращения" />
          </Form.Item>
          <Form.Item
            {...layout}
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
            {...textareaLayout}
            label="Сообщение"
            name="message"
            rules={[
              {
                required: true,
              },
              {
                min: 2,
                message: "Слишком короткое сообщение",
              },
              {
                max: 2000,
                message: "Слишком длинное сообщение",
              },
            ]}
          >
            <TextArea rows={8} />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <button className={cn("button", s.button)}>Отправить</button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default Feedback;
