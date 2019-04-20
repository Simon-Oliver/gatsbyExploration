import React from "react"
import moment from "moment"

const Footer = () => {
  return (
    <div>
      <p>Copyright ©{moment().year()} Simon Stauffer. All rights reserved.</p>
    </div>
  )
}

export default Footer
