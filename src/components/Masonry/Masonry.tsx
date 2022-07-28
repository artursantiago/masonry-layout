import { memo } from "react";
import "./styles.scss";

const groupArrayByColumns = (
  dataArray: MasonryProps["dataArray"],
  columns: number
) => {
  const newArray = [...dataArray];
  const elementsPerColumn = Math.floor(newArray.length / columns);
  let results = [];

  for (let i = 0; i < columns; i++) {
    results.push(newArray.splice(0, elementsPerColumn));
  }

  for (let i = 0; i < newArray.length; i++) {
    results[i].push(newArray[i]);
  }

  results = results.filter((itm) => itm.length);

  return results;
};

type MasonryProps = {
  columns: number;
  gap?: number;
  dataArray: any[];
  element: (props: { value: any }) => JSX.Element;
};

function Masonry({ dataArray, columns, element: Element, gap }: MasonryProps) {
  const elementsByColumns = groupArrayByColumns(dataArray, columns);

  return (
    <div className="masonry" style={{ gap }}>
      {elementsByColumns?.map((column, i) => (
        <div key={i} className="masonry__columns" style={{ gap }}>
          {column?.map((data, i) => (
            <Element value={data} key={data?.id ?? i} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default memo(Masonry);
