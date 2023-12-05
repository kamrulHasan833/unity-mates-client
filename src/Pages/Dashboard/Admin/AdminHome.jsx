import { useEffect, useState } from "react";
import LoadingSpiner from "../../../Components/Shared/LoadingSpiner";
import Nodata from "../../../Components/Shared/Nodata";
import SectionHeader from "../../../Components/Shared/SectionHeader";
import SectionWrapperSmall from "../../../Components/Shared/SectionWrapperSmall";
import Title from "../../../Components/Shared/Title";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useDocumentSize from "../../../hooks/useDocumentSizes";
import PieChartAdmin from "../Common/PieChartAdmin";
import StatsBoxes from "../Common/StatsBoxes";
const AdminHome = () => {
  const { sizes, isLoading } = useDocumentSize();
  const axiosPrivate = useAxiosPrivate();
  const [revenue, setRevenue] = useState(0);
  const statsPartial =
    !isLoading && sizes
      ? sizes.map(({ size, title }) => ({ data: size, title }))
      : null;

  const stats =
    !isLoading && statsPartial && revenue
      ? [{ data: revenue.revenue, title: revenue.title }, ...statsPartial]
      : null;
  const statsForPie = stats?.filter(({ title }) => title !== "total revenue");
  useEffect(() => {
    axiosPrivate
      .get("/unity-mates/v1/requests/revenue")
      .then(({ data }) => {
        setRevenue(data);
      })
      .catch(() => {});
  }, [axiosPrivate]);

  return (
    <section>
      <Title title="Admin Home" />
      <SectionWrapperSmall>
        <SectionHeader title="Overall Statistics" />
        {isLoading ? (
          <LoadingSpiner />
        ) : !isLoading && !stats?.length === 0 ? (
          <Nodata />
        ) : !isLoading && stats ? (
          <>
            <StatsBoxes stats={stats} />
            <PieChartAdmin stats={statsForPie} />
          </>
        ) : (
          <p></p>
        )}
      </SectionWrapperSmall>
    </section>
  );
};

export default AdminHome;
