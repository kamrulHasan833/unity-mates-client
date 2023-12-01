import { Table } from "flowbite-react";
import { useState } from "react";
import SectionHeader from "../../../Components/Shared/SectionHeader";
import SectionWrapperSmall from "../../../Components/Shared/SectionWrapperSmall";
import StoryModal from "../../../Layouts/StoryModal";
import useSuccessStories from "../../../hooks/useSuccessStories";

const SeccessStoryPage = () => {
  const { successStories, isLoading } = useSuccessStories();

  const [story, setStory] = useState(successStories?.[0]);

  return (
    <SectionWrapperSmall>
      <SectionHeader title="success stories" />
      <div className="overflow-x-auto">
        {isLoading ? (
          <p>loading...</p>
        ) : !isLoading && successStories?.length === 0 ? (
          <p>no users found</p>
        ) : (
          <Table>
            <Table.Head>
              <Table.HeadCell></Table.HeadCell>
              <Table.HeadCell>Male Biodata Id</Table.HeadCell>
              <Table.HeadCell>female Biodata Id</Table.HeadCell>
              <Table.HeadCell>action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {successStories.map(
                (
                  {
                    _id,
                    self_biodata_id,
                    partner_biodata_id,
                    couple_image,
                    success_story,
                    reviews,
                  },
                  idx
                ) => (
                  <Table.Row
                    key={_id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {idx + 1}
                    </Table.Cell>
                    <Table.Cell>{self_biodata_id}</Table.Cell>
                    <Table.Cell>{partner_biodata_id}</Table.Cell>
                    <Table.Cell>
                      <button
                        onClick={() => {
                          document.getElementById("my_modal_1").showModal();
                          setStory({
                            _id,
                            self_biodata_id,
                            partner_biodata_id,
                            couple_image,
                            success_story,
                            reviews,
                          });
                        }}
                        className="bg-primary-color text-white hover:bg-secondary-color rounded-sm  px-3 py-1"
                      >
                        View Sory
                      </button>
                    </Table.Cell>
                  </Table.Row>
                )
              )}
            </Table.Body>
          </Table>
        )}
      </div>
      <StoryModal story={story} />
    </SectionWrapperSmall>
  );
};

export default SeccessStoryPage;
