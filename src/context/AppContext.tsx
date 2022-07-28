import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { dataArray as data, DataImage } from "../data";

type AppState = {
  images: string[];
  loading: boolean;
  search: string;
  columns: number;
  loadMore: () => void;
  changeSearch: (value: string) => void;
};

export const AppContext = createContext<AppState>({} as AppState);

function AppProvider({ children }: React.PropsWithChildren) {
  const [allDataArray, setAllDataArray] = useState<DataImage[]>();
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const filteredImages = useMemo(() => {
    return (
      allDataArray?.filter((data) =>
        data.name
          .toLocaleLowerCase()
          .includes(search?.toLocaleLowerCase() || "")
      ) || []
    ).map((data) => data.src);
  }, [search, allDataArray]);

  const settingColumns = useCallback(() => {
    if (window.innerWidth >= 1400) return 4;
    if (window.innerWidth >= 800) return 3;
    if (window.innerWidth >= 500) return 2;
    return 1;
  }, []);

  const [columns, setColumns] = useState(() => settingColumns());

  useEffect(() => {
    window.addEventListener("resize", () => setColumns(() => settingColumns()));

    return window.removeEventListener("resize", () =>
      setColumns(() => settingColumns())
    );
  }, [setColumns, settingColumns]);

  async function init() {
    setLoading(true);
    const newDataArray: DataImage[] = await new Promise((resolve) =>
      setTimeout(() => resolve(data), 1500)
    );

    setAllDataArray(newDataArray);
    setLoading(false);
  }

  async function loadMore() {
    setLoading(true);
    await new Promise((resolve) => setTimeout(() => resolve, 100));

    setAllDataArray((prev) => [...(prev || []), ...data]);
    setLoading(false);
  }

  function changeSearch(value: string) {
    setSearch(value);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <AppContext.Provider
      value={{
        images: filteredImages,
        columns,
        loading,
        search,
        loadMore,
        changeSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;

export function useAppState() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppState must be used inside a AppProvider");
  }

  return context;
}
