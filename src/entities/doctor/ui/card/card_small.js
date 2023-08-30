import Link from "next/link"

const DoctorCardS = () => {
  return <div className="col-xl-3 col-lg-4 col-sm-6">
    <div
      className="doctor-box-three mt-30 wow fadeInUp"
      data-wow-delay="0.3s"
    >
      <div className="doctor-photo">
        <img src="assets/img/doctors/18.jpg" alt="Image" />
      </div>
      <div className="doctor-information">
        <h5 className="name">
          <Link href="/doctor/1">
            <a>Allan K. Simons</a>
          </Link>
        </h5>
        <span className="specialty">Dental Specialist</span>
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
        <span className="plus-icon">
          <i className="far fa-plus"></i>
        </span>
      </div>
    </div>
  </div>
}

export { DoctorCardS }