import {
  CharacterCard,
  CharacterCardProps,
} from "../../../../components/CharacterCard";

export type CharactersProps = {
  data: { character: CharacterCardProps["character"]; role: string }[];
};

export const Characters = (props: CharactersProps) => {
  const { data } = props;
  return (
    <div className="flex flex-wrap gap-4">
      {data.map((character) => (
        <CharacterCard
          key={character.character.mal_id}
          character={character.character}
          role={character.role}
        />
      ))}
    </div>
  );
};
