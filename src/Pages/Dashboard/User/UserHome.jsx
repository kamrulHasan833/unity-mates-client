import { useEffect, useState } from "react";
import LoadingSpiner from "../../../Components/Shared/LoadingSpiner";
import Nodata from "../../../Components/Shared/Nodata";
import SectionHeader from "../../../Components/Shared/SectionHeader";
import SectionWrapperSmall from "../../../Components/Shared/SectionWrapperSmall";
import Title from "../../../Components/Shared/Title";
import useAuth from "../../../hooks/useAuth";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useDocumentSizes from "../../../hooks/useDocumentSizes";
import PieChartAdmin from "../Common/PieChartAdmin";
import StatsBoxes from "../Common/StatsBoxes";
const UserHome = () => {
  const { user } = useAuth();
  const email = user?.email;
  const { sizes, isLoading } = useDocumentSizes();
  const axiosPrivate = useAxiosPrivate();
  const [expense, setExpense] = useState(0);
  const statsPartial =
    !isLoading && sizes
      ? sizes.map(({ size, title }) => ({ data: size, title }))
      : null;

  const stats =
    !isLoading && statsPartial && expense
      ? [{ data: expense?.expense, title: expense?.title }, ...statsPartial]
      : null;

  const statsForPie = stats?.slice(1, 6);
  useEffect(() => {
    if (email) {
      axiosPrivate
        .get(`/unity-mates/v1/requests/expense?email=${email}`)
        .then(({ data }) => {
          setExpense(data);
        })
        .catch(() => {});
    }
  }, [axiosPrivate, email]);

  return (
    <section>
      <Title title="User Home" />
      <SectionWrapperSmall>
        <SectionHeader title="Overall Statistics" />
        {isLoading ? (
          <LoadingSpiner />
        ) : !isLoading && stats?.length === 0 ? (
          <Nodata />
        ) : !isLoading && stats ? (
          <>
            <StatsBoxes stats={stats} />
            <PieChartAdmin stats={statsForPie} />
          </>
        ) : (
          ""
        )}
      </SectionWrapperSmall>
    </section>
  );
};

export default UserHome;
