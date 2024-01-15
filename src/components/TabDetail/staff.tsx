import { StaffCard, StaffCardProps } from "../StaffCard";

export type StaffProps = {
  data: StaffCardProps[];
};

export const Staff = (props: StaffProps) => {
  const { data } = props;

  return (
    <div className="flex flex-wrap gap-4">
      {data.map((person) => (
        <StaffCard
          key={person.person.mal_id}
          person={person.person}
          positions={person.positions}
        />
      ))}
    </div>
  );
};
