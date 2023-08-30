import Link from "next/link"

const DoctorCard = () => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-9">
      <div className="doctor-box-one mb-30">
        <div className="doctor-photo">
          <img src="assets/img/doctors/01.jpg" alt="Image" />
        </div>
        <div className="doctor-information">
          <h5 className="name">
            <Link href="/doctor/1">
              <a>Lee S. Williamson</a>
            </Link>
          </h5>
          <span className="specialty">Cardiology</span>
          <ul className="social-links">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export { DoctorCard }