import { useQuery } from "@tanstack/react-query";
import { Table } from "flowbite-react";
import Swal from "sweetalert2";
import SectionHeader from "../../../Components/Shared/SectionHeader";
import SectionWrapperSmall from "../../../Components/Shared/SectionWrapperSmall";
import useAlert from "../../../hooks/useAlert";
import useAuth from "../../../hooks/useAuth";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
const FavouriteBiodatas = () => {
  const axiosPrivate = useAxiosPrivate();
  const alert = useAlert();
  const { user } = useAuth();
  const {
    data: favourites = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-favourites"],
    enabled: user?.email ? true : false,
    queryFn: async () => {
      const res = await axiosPrivate.get(
        `/unity-mates/v1/favourites?email=${user?.email}`
      );
      return res.data;
    },
  });

  // handle delete favourite
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "To delete favourite biodata, click yes!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2B2A4C",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPrivate
          .delete(`/unity-mates/v1/favourites?id=${id}`)

          .then((res) => {
            const isSuccess = res?.data?.deletedCount > 0;
            if (isSuccess) {
              refetch();
              alert(`Favourite biodata deleted successfully!`, "success");
            }
          })
          .catch((err) => {
            if (err) {
              alert("Request deletation failed!", "error");
            }
          });
      }
    });
  };
  return (
    <section>
      <SectionWrapperSmall>
        <SectionHeader title="My favourite Biodatas" />
        <div className="overflow-x-auto">
          {isLoading ? (
            <p>loading...</p>
          ) : !isLoading && !favourites.length ? (
            <p>no users found</p>
          ) : (
            <Table>
              <Table.Head>
                <Table.HeadCell></Table.HeadCell>
                <Table.HeadCell>name</Table.HeadCell>
                <Table.HeadCell>Biodata id</Table.HeadCell>
                <Table.HeadCell>permanent address</Table.HeadCell>
                <Table.HeadCell>occupation</Table.HeadCell>
                <Table.HeadCell>action</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y capitalize">
                {favourites.map(
                  (
                    { _id, name, biodata_id, permanent_adress, occupation },
                    idx
                  ) => (
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
                      <Table.Cell>{biodata_id}</Table.Cell>
                      <Table.Cell>{permanent_adress}</Table.Cell>
                      <Table.Cell>{occupation}</Table.Cell>
                      <Table.Cell>
                        <button
                          onClick={() => handleDelete(_id)}
                          className="bg-primary-color text-white hover:bg-secondary-color rounded-sm  px-3 py-1"
                        >
                          Delete
                        </button>
                      </Table.Cell>
                    </Table.Row>
                  )
                )}
              </Table.Body>
            </Table>
          )}
        </div>
      </SectionWrapperSmall>
    </section>
  );
};

export default FavouriteBiodatas;
