import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
type Props = {}

const Admin = (props: Props) => {
  return (
    <div>
      <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <Link to="/admin" relative='path' className="
nav-link
block
font-medium
text-xs
leading-tight
uppercase
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3
my-2
hover:border-transparent hover:bg-gray-100
focus:border-transparent
active
    " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home" aria-selected="true">Home</Link>
  </li>
  <li className="nav-item" role="presentation">
    <a href="#tabs-profile" className="
nav-link
block
font-medium
text-xs
leading-tight
uppercase
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3
my-2
hover:border-transparent hover:bg-gray-100
focus:border-transparent
    " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab" aria-controls="tabs-profile" aria-selected="false">Profile</a>
  </li>
  <li className="nav-item" role="presentation">
    <a href="#tabs-messages" className="
nav-link
block
font-medium
text-xs
leading-tight
uppercase
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3
my-2
hover:border-transparent hover:bg-gray-100
focus:border-transparent
    " id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab" aria-controls="tabs-messages" aria-selected="false">Messages</a>
  </li>
  <li className="nav-item" role="presentation">
    <a href="#tabs-contact" className="
nav-link
disabled
pointer-events-none
block
font-medium
text-xs
leading-tight
uppercase
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3
my-2
hover:border-transparent hover:bg-gray-100
focus:border-transparent
    " id="tabs-contact-tab" data-bs-toggle="pill" data-bs-target="#tabs-contact" role="tab" aria-controls="tabs-contact" aria-selected="false">Contact</a>
  </li>
</ul>
    <Outlet/>
    </div>
  )
}

export default Admin