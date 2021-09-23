import React from "react";

interface SearchSectionProps {
  items: { name?: string; uri?: string }[];
}

export const SearchSection = ({ items }: SearchSectionProps) => {
  return (
    <ul>
      {items && items.map((tracks) => <li key={tracks.uri}>{tracks.name}</li>)}
    </ul>
  );
};
