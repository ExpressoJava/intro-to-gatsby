import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: "purple" }}>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Hello Batsby!" />
    <p>Demon Slayer</p>
    <img
      src="https://4.bp.blogspot.com/-vIaYEfwZBAw/XVHIWe1RzmI/AAAAAAAALEA/85QRWriKStwnYQL1IK29noPQCOUrCjsCQCLcBGAs/w914-h514-p-k-no-nu/tanjiro-kamado-flaming-katana-kimetsu-no-yaiba-uhdpaper.com-4K-3.427-wp.thumbnail.jpg"
      alt=""
    />
  </div>
)
