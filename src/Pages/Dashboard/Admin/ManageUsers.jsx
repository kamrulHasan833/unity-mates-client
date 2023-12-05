import { useQuery } from "@tanstack/react-query";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import LoadingSpiner from "../../../Components/Shared/LoadingSpiner";
import Nodata from "../../../Components/Shared/Nodata";
import SearchUserInput from "../../../Components/Shared/SearchUserInput";
import SectionHeader from "../../../Components/Shared/SectionHeader";
import SectionWrapperSmall from "../../../Components/Shared/SectionWrapperSmall";
import Title from "../../../Components/Shared/Title";
import useAlert from "../../../hooks/useAlert";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
const ManageUsers = () => {
  const alert = useAlert();
  const axiosPrivate = useAxiosPrivate();

  const {
    data: allUsers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await axiosPrivate.get("/unity-mates/v1/users");
      return res.data;
    },
  });

  const [users, setUsers] = useState(allUsers);
  useEffect(() => {
    setUsers(allUsers);
  }, [allUsers]);
  //   handle make premium
  const handleMakePremium = async (email, name) => {
    try {
      const res = await axiosPrivate.put(
        `/unity-mates/v1/users/type?email=${email}`
      );
      const isSuccess = res?.data?.modifiedCount > 0;
      if (isSuccess) {
        refetch();
        alert(`${name} has been made premium  successfully!`, "success");
      }
    } catch (err) {
      if (err) {
        alert("Made premium failed!", "error");
      }
    }
  };
  //   handle make admin
  const handleMakeAdmin = async (email, name) => {
    try {
      const res = await axiosPrivate.put(
        `/unity-mates/v1/users/role?email=${email}`
      );
      const isSuccess = res?.data?.modifiedCount > 0;
      if (isSuccess) {
        refetch();
        alert(`${name} has been made admin  successfully!`, "success");
      }
    } catch (err) {
      if (err) {
        alert("Made premium failed!", "err");
      }
    }
  };

  // handle search
  const handleSearch = async (data) => {
    const searchText = data?.search;
    try {
      const res = await axiosPrivate.get(
        `/unity-mates/v1/users/query?name=${searchText}`
      );

      setUsers(res?.data);
    } catch (err) {
      if (err) {
        setUsers([]);
      }
    }
  };
  return (
    <section>
      <Title title="Manage Users" />
      <SectionWrapperSmall>
        <SectionHeader title="manage users" />
        <div className="overflow-x-auto">
          {isLoading ? (
            <LoadingSpiner />
          ) : !isLoading && !users.length ? (
            <Nodata />
          ) : (
            <>
              <div className="w-full  flex justify-end">
                <SearchUserInput handleSearch={handleSearch} />
              </div>
              <Table>
                <Table.Head>
                  <Table.HeadCell></Table.HeadCell>
                  <Table.HeadCell>name</Table.HeadCell>
                  <Table.HeadCell>Email</Table.HeadCell>
                  <Table.HeadCell>type</Table.HeadCell>
                  <Table.HeadCell>role</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {users.map(({ _id, email, name, user_type, role }, idx) => (
                    <Table.Row
                      key={_id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {idx + 1}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {name}
                      </Table.Cell>
                      <Table.Cell>{email}</Table.Cell>
                      <Table.Cell>
                        {" "}
                        {user_type === "premium" ? (
                          <span className=" px-3 py-1">Premium</span>
                        ) : (
                          <button
                            onClick={() => handleMakePremium(email, name)}
                            className="bg-primary-color text-white hover:bg-secondary-color rounded-sm  px-3 py-1 min-w-[120px]"
                          >
                            Make Premium
                          </button>
                        )}
                      </Table.Cell>
                      <Table.Cell>
                        {" "}
                        {role === "admin" ? (
                          <span className=" px-3 py-1">Admin</span>
                        ) : (
                          <button
                            onClick={() => handleMakeAdmin(email, name)}
                            className="bg-secondary-color  text-white hover:bg-primary-color rounded-sm  px-3 py-1 capitalize min-w-[120px]"
                          >
                            make admin
                          </button>
                        )}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </>
          )}
        </div>
      </SectionWrapperSmall>
    </section>
  );
};

export default ManageUsers;
