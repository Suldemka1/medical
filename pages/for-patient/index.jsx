import PageBanner from "../../src/components/PageBanner"
import Layouts from "../../src/layouts/Layouts"

const ForPatient = () => {
  return (
    <Layouts>
      <PageBanner title={"Общая информация"} pageName="Общая информация" bgnone={false} />

      <div className="container">
        <div dangerouslySetInnerHTML={{
          __html: `<div>asd<p>asd</p> </div>`
        }} />
      </div>

    </Layouts>
  )
}

export default ForPatient