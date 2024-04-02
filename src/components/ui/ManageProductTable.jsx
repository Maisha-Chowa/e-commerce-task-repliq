"use client";
import { Button, Modal, Table } from "antd";
import { useState } from "react";
import { DeleteFilled, PlusOutlined, EditOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { AnyObject } from "antd/es/_util/type";
import { TAddDonationFormValues } from "./AddProductForm";
import { deleteDonation } from "@/utils/actions/crud-donation";

const ManageDonationTable = ({ donations }) => {
  const router = useRouter();

  const handleDeleteWithConfirmation = (id) => {
    console.log("donation id", id);
    const handleOk = async () => {
      await deleteDonation(id);
    };

    Modal.confirm({
      title: "Are you sure you want to delete this donation?",
      okText: "Delete",
      okButtonProps: {
        style: {
          backgroundColor: "#FF7875",
          border: "none",
          color: "white",
        },
      },
      onOk: () => handleOk(),
    });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const handleTableChange = (pagination) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

  const columns = [
    {
      title: "No.",
      key: "no",
      render: (text, record, index) => index + 1 + (currentPage - 1) * pageSize,
    },

    {
      title: "Donation Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => {
        return (
          <div>
            <Button
              className="text-xl"
              type="link"
              onClick={() => router.push(`/admin/edit-donation/${record._id}`)}
            >
              <EditOutlined />
            </Button>
            <Button
              className="text-xl"
              type="link"
              danger
              onClick={() => handleDeleteWithConfirmation(record._id)}
            >
              <DeleteFilled />
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="bg-gray-200 lg:p-6 md:p-6 p-4 rounded-xl lg:min-h-screen">
      <div className="flex justify-between items-center pb-4">
        <h1 className="text-2xl ">Manage Donations</h1>
        <Button type="link" onClick={() => router.push("/admin/add-donation")}>
          <PlusOutlined /> Add New Donation{" "}
        </Button>
      </div>
      <hr />
      <Table
        onChange={(pagination) => handleTableChange(pagination)}
        className="mt-4"
        dataSource={donations}
        columns={columns}
        scroll={{ x: "100%" }}
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
        }}
        pagination={{
          pageSize: 5,
          style: {
            backgroundColor: "#ffffff",
            paddingRight: "15px",
          },
        }}
      />
    </div>
  );
};

export default ManageDonationTable;
