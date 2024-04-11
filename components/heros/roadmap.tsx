import Image from 'next/image';
import { RoadmapBody } from '@/components/roadmap/roadmap-body';
import { RoadmapItem } from '@/components/roadmap/roadmap-item';
import { RoadmapSection } from '@/components/roadmap/roadmap-section';

export const Roadmap = () => {
  return (
      <div className=" bg-[url('/roadmapbg.png')] bg-cover py-12 w-full items-center flex justify-center">
        <div className="flex flex-col w-full gap-4 max-w-7xl md:px-0 items-center text-center px-6">
          <div className="flex flex-col gap-2 items-center z-10">
            <h1 className="text-7xl lg:text-9xl drop-shadow-md">ROADMAP</h1>
            <Image width={0}
                   height={0}
                   sizes="100vw"
                   src="/roadmaplabel.png"
                   alt="logo"
                   className="w-[450px] h-auto" />
          </div>

          <div className="flex w-full mt-4 md:mt-16 gap-8 flex-col lg:flex-row">
            {/* Q2 2024 */}
            <RoadmapBody title="Q2 2024" label="green" classNames="lg:mt-16" rocket={1}>
              <RoadmapSection title="April">
                <RoadmapItem title="Launch of the new Babywif development team." items={[
                  'Online launch event for the community.',
                  'Release of Babywif\'s whitepaper.',
                  'Update and improvements of the project\'s social media networks.',
                ]} />

                <RoadmapItem title="Creation of a marketing and communication strategy for Babywif's reintroduction to the crypto community." />
              </RoadmapSection>

              <RoadmapSection title="May">
                <RoadmapItem title="Publication of the updated Babywif whitepaper." />
                <RoadmapItem title="Integration and Announcements." items={[
                  'Announcement of strategic partnerships and collaborations with related projects.',
                  'Implementation of reward programs and promotions to incentivize community participation.',
                  'Listing of Babywif on various cryptocurrency exchanges.',
                ]} />

              </RoadmapSection>
            </RoadmapBody>


            {/* Q3 2024 */}
            <RoadmapBody title="Q2 2024" label="red" classNames="lg:mt-[460px]">
              <RoadmapSection title="June">
                <RoadmapItem title="Community Development." items={[
                    'Development of a community engagement platform for voting and improvement proposals.',
                    'Organization of online and offline events to increase Babywif\'s visibility and strengthen the community.',
                    'Continuation of marketing efforts and public relations to increase adoption and awareness of Babywif.'
                ]} />

                <RoadmapItem title="Continued work on listing Babywif on various cryptocurrency exchanges." />
              </RoadmapSection>
            </RoadmapBody>

            {/* Q3 2024 */}
            <RoadmapBody title="Q3 2024" label="red" rocket={2}>
              <RoadmapSection title="July">
                <RoadmapItem title="Expansion and Celebration." />
                <RoadmapItem title="Launch of new features and functionalities on the Babywif website." />
                <RoadmapItem title="Expansion of social media presence and participation in industry conferences and events." />
              </RoadmapSection>

              <RoadmapSection title="August">
                <RoadmapItem title="Continuous Development." />
                <RoadmapItem title="Launch of new features and functionalities on the Babywif website." />
                <RoadmapItem title="Expansion of social media presence and participation in industry conferences and events." />
              </RoadmapSection>

              <RoadmapSection title="September">
                <RoadmapItem title="Evaluation and Preparation" items={[
                    'Evaluation of progress and review of Babywif\'s development and marketing strategy.',
                    'Preparations for the launch of future updates and improvements based on community feedback.',
                    'Planning of celebration and recognition events for contributors and outstanding community members.',
                ]} />
              </RoadmapSection>
            </RoadmapBody>


            {/* Q4 2024 */}
            <RoadmapBody title="Q4 2024" label="red" classNames="lg:mt-16" rocket={2}>
              <RoadmapSection title="October">
                <RoadmapItem title="Continued development and expansion of Babywif's features and utilities." />
                <RoadmapItem title="Celebration of achievements and milestones reached during the year." />
                <RoadmapItem title="Launch of special campaigns to promote adoption and usage of Babywif in the crypto community and beyond." />
              </RoadmapSection>

              <RoadmapSection title="November">
                <RoadmapItem title="Planning of year-end events and promotions to close the year successfully." />
                <RoadmapItem title="Evaluation of performance and results of the year and setting goals for the next year." />
                <RoadmapItem title="Thanksgiving to the community for their continuous support and commitment to Babywif." />
              </RoadmapSection>

              <RoadmapSection title="December">
                <RoadmapItem title="Reflection on the year's achievements and challenges and preparation for an exciting new year." />
                <RoadmapItem title="Announcement of the roadmap and goals for the next year." />
                <RoadmapItem title="Celebration of the holiday spirit with special events and promotions for the community." />
              </RoadmapSection>
            </RoadmapBody>
          </div>
        </div>
      </div>
  )
      ;
};