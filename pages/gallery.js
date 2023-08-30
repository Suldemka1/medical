import dynamic from "next/dynamic";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const GalleryIsotop = dynamic(() => import("../src/components/GalleryIsotop"), {
  ssr: false,
});

const Gallery = () => {
  return (
    <Layouts footer={2}>
      <PageBanner title={"Галерея"} bgnone pageName={"Галерея"} />
      <GalleryIsotop />
    </Layouts>
  );
};
export default Gallery;
