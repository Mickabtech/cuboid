import React from 'react';
import { Button, Form, Input } from 'antd';



const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};


const Settings = () => {
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
        <div>
            <h1>Edit your profile</h1>
        </div>
      <MyFormItemGroup prefix={['user']}>
        <MyFormItemGroup prefix={['name']}>
          <MyFormItem name="firstName" label="First Name">
            <Input />
          </MyFormItem>
          <MyFormItem name="lastName" label="Last Name">
            <Input />
          </MyFormItem>
        </MyFormItemGroup>

        <MyFormItem name="email" label="Email address">
          <Input />
        </MyFormItem>

        <MyFormItem name="website" label="Portfolio">
          <Input />
        </MyFormItem>

        <MyFormItem name="Instagram" label="Instagram ">
          <Input />
        </MyFormItem>
      </MyFormItemGroup>

      <Button type="primary" htmlType="submit">
        Update
      </Button>
    </Form>
  );
};
export default Settings;