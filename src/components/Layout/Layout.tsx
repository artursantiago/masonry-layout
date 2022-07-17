import { useAppState } from "../../context/AppContext";

import Navbar from "../../components/Navbar/Navbar";
import Masonry from "../../components/Masonry/Masonry";
import Pin from "../../components/Pin/Pin";

import { ReactComponent as Loading } from "assets/loading.svg";
import "./styles.scss";

export default function Layout() {
  const { images, loading, columns } = useAppState();

  return (
    <>
      <Navbar />
      <div className="masonry-container">
        {loading ? (
          <Loading className="loading" />
        ) : (
          <Masonry
            dataArray={images}
            columns={columns}
            element={Pin}
            gap={16}
          />
        )}
      </div>
    </>
  );
}
