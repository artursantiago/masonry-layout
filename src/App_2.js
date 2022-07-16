import { useCallback, useEffect, useState } from "react";
import Masonry from "./components/Masonry/Masonry";
import dataImages from "./data.json";

const initialImages = dataImages.map((di) => di.src);

export default function App() {
  /**
   * this code is example of responsive column, how many columns will be rendered if width of screen reach a certain value
   */

  const settingColumns = useCallback(() => {
    if (window.innerWidth >= 1400) return 4;
    if (window.innerWidth >= 800) return 3;
    if (window.innerWidth >= 500) return 2;
    return 1;
  }, []);

  const [column, setColumn] = useState(() => settingColumns());

  useEffect(() => {
    window.addEventListener("resize", () => setColumn(() => settingColumns()));

    return window.removeEventListener("resize", () =>
      setColumn(() => settingColumns())
    );
  }, [setColumn, settingColumns]);

  /**
   * end of responsive column example
   */

  return (
    <div>
      <Masonry dataArray={initialImages} columns={column} element={Pin} />
    </div>
  );
}
