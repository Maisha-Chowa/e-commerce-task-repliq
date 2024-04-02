"use client";

import { Button, Form, Input, message, Select } from "antd";

const AddProductForm = () => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const res = await fetch(`${process.env.BACKEND_URL}/eyeglass/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
      cache: "no-cache",
    });
    const productInfo = await res.json();
    console.log(productInfo);

    if (productInfo.success) {
      message.success("product created successfully");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="bg-gray-200 lg:p-8 md:p-6 p-4 rounded-xl lg:min-h-screen">
      <div className="max-w-xl shadow-xl bg-white mx-auto">
        <h1 className="text-center text-xl py-6 bg-blue-950 text-white">
          Add Product
        </h1>
        <Form
          layout="vertical"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="px-10"
          form={form}
        >
          <Form.Item
            label="Product Title"
            name="name"
            rules={[{ required: true, message: "Please input product title!" }]}
          >
            <Input
              type="text"
              size="large"
              className="text-black"
              style={{ width: 300, padding: 10, margin: 4 }}
            />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input product price!" }]}
          >
            <Input type="text" size="large" className="text-black" />
          </Form.Item>
          <Form.Item
            label="Quantity"
            name="quantity"
            rules={[{ required: true, message: "Please input quantity!" }]}
          >
            <Input type="text" size="large" className="text-black" />
          </Form.Item>
          <Form.Item
            label="Image"
            name="image"
            rules={[{ required: true, message: "Please input product image!" }]}
          >
            <Input type="text" size="large" className="text-black" />
          </Form.Item>
          <Form.Item
            label="Frame Material"
            name="frameMaterial"
            rules={[
              {
                required: true,
                message: "Please input product frameMaterial!",
              },
            ]}
          >
            <Select
              defaultValue="plastic"
              // style={{ width: 120 }}
              options={[
                { value: "plastic", label: "  plastic" },
                { value: "acetate", label: " acetate" },
                { value: "metal", label: "metal" },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Frame Shape"
            name="frameShape"
            rules={[
              { required: true, message: "Please input product Frame Shape!" },
            ]}
          >
            <Select
              defaultValue="rectangular"
              // style={{ width: 120 }}
              options={[
                { value: "rectangular", label: "  Rectangular" },
                { value: "round", label: " Round" },
                { value: "cat-eye", label: "cat-eye" },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Lens Type"
            name="lensType"
            rules={[
              {
                required: true,
                message: "Please input product Lens Type!",
              },
            ]}
          >
            <Select
              defaultValue="single-vision"
              // style={{ width: 120 }}
              options={[
                { value: "single-vision", label: "single-vision" },
                { value: "bifocal", label: " bifocal" },
                { value: "progressive", label: "progressive" },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Brand"
            name="brand"
            rules={[
              {
                required: true,
                message: "Please input product brand!",
              },
            ]}
          >
            <Input type="text" size="large" className="text-black" />
          </Form.Item>
          <Form.Item
            label="Gender"
            name="gender"
            rules={[
              {
                required: true,
                message: "Please input product gender!",
              },
            ]}
          >
            <Select
              defaultValue="men"
              // style={{ width: 120 }}
              options={[
                { value: "men", label: "men" },
                { value: "women", label: " women" },
                { value: "unisex", label: "unisex" },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Color"
            name="color"
            rules={[{ required: true, message: "Please input product color!" }]}
          >
            <Input type="text" size="large" className="text-black" />
          </Form.Item>

          <Form.Item>
            <Button
              className="text-white bg-blue-950"
              htmlType="submit"
              block
              size="large"
            >
              Add Now
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddProductForm;
