import { message } from "antd";

export const messageSuccess = (text) => {
  message.success(text);
};
export const messageError = (text) => {
  message.error(text);
};
