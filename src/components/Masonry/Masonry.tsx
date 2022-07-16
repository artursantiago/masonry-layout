import { memo, useMemo } from "react";
import ".styles/.css";

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
  dataArray: any[];
  element: (props: { value: any[] }) => JSX.Element;
};

function Masonry({ dataArray, columns, element: Element }: MasonryProps) {
  return useMemo(() => {
    const elementsByColumns = groupArrayByColumns(dataArray, columns);

    return (
      <div className="masonry">
        {elementsByColumns?.map((column, i) => (
          <div key={i} className="masonry__column">
            {column?.map((data, i) => (
              <Element value={data} key={data?.id ?? i} />
            ))}
          </div>
        ))}
      </div>
    );
  }, [dataArray, columns]);
}

export default memo(Masonry);
