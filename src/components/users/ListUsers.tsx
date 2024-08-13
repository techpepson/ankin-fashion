import { Heading, Table } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ListUsers: React.FC = () => {
  // Interface for the details from the user database
  interface UserDetails {
    _id: number | string;
    name: string;
    email: string;
    userPassword: string | number;
    phoneNumber: string | number;
    __v: number;
  }

  // Local state for incoming user details
  const [users, setUsers] = useState<UserDetails[]>([]);

  // Function to make a call to the server for user details
  const handleUserDetails = async () => {
    try {
      const userResponse = await axios.get("http://localhost:5000/api/users");
      const dataResponse = userResponse.data.userData;
      setUsers(dataResponse);
    } catch (error) {
      console.error(error);
    }
  };

  // Call the handleUserDetails function
  useEffect(() => {
    handleUserDetails();
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <Heading>User List of Ankin</Heading>
      </div>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Phone</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users.length > 0 ? (
            users.map((user, index) => (
              <Table.Row key={index}>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user._id}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.phoneNumber}</Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell colSpan={4}>
                There are no users in our database.
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default ListUsers;
