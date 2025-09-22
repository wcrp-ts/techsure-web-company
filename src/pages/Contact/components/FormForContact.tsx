import { Form, Input, Button } from "antd";
import "./FormForContact.css"; // We will add custom CSS

const FormForContact = () => {
  const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    console.log("Form Values:", values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
      className="underline-form"
    >
      <Form.Item name="name" rules={[{ required: true, message: "Please enter your name" }]}>
        <Input placeholder="Name*" />
      </Form.Item>

      <Form.Item name="email" rules={[{ required: true, message: "Please enter your email" }]}>
        <Input placeholder="Email*" />
      </Form.Item>

      <Form.Item name="phone">
        <Input placeholder="Phone*" />
      </Form.Item>

      <Form.Item name="message" rules={[{ required: true, message: "Please enter a message" }]}>
        <Input.TextArea placeholder="Message*" rows={4} />
      </Form.Item>

      <Form.Item style={{ textAlign: "right" }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormForContact;
