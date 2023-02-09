import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
type Props = {}

const Client = (props: Props) => {
  return (
    <div className="bg-[#E6FFFF]">
      <div className="fucking_body   my-0 mx-auto ">
      <div className="header flex justify-between bg-[#1F232C] py-[18px] px-[15px]">
    <a href="" className="flex">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50px" height="50px" viewBox="0,0,256,256" style={{fill: '#000000'}}>
        <g fill="#1f232c" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10}  strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}>
          <path d="M0,256v-256h256v256z" id="bgRectangle" />
        </g>
        <g  fill="none" fillRule="nonzero" stroke="none" strokeWidth="none" strokeLinecap="butt"  strokeMiterlimit={10}  strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}>
          <path d="M126.92187,34.82812l4.25,109.625l11.17188,-7.59375c1.12,-0.768 2.6955,-0.63913 3.6875,0.29687c1,0.952 1.204,2.45662 0.5,3.64062l-7.40625,12.40626l15.46875,3.21874c1.352,0.288 2.34375,1.491 2.34375,2.875c0,1.392 -0.98375,2.603 -2.34375,2.875l-15.46875,3.21875l7.39062,12.39062c0.704,1.184 0.51562,2.70426 -0.48438,3.65626c-0.96,0.91999 -2.5915,1.05687 -3.6875,0.29687l-9.98438,-6.79687l0.90625,24.01562c17.824,-3.456 32.19725,-17.69275 35.78125,-35.46875c3.224,-16.016 -2.0835,-32.11088 -14.1875,-43.04687c-1.368,-1.24001 -2.10362,-2.98888 -2.01562,-4.79688c0.088,-1.8 0.98875,-3.45087 2.46874,-4.54687c13.48001,-9.992 21.20313,-25.23613 21.20313,-41.82813c0,-6.464 -1.217,-12.81137 -3.625,-18.85938c-0.744,-1.872 -0.52625,-3.89887 0.59375,-5.54687c1.136,-1.664 2.99275,-2.65625 4.96875,-2.65625c1.208,0 2.37462,0.37375 3.39062,1.09375c20.4,14.416 34.34387,35.84025 39.67187,59.65625l-15.15625,15.15625h17.25c0.136,2.12 0.39062,4.22338 0.39062,6.35938c0,6.528 -0.68262,12.8865 -1.89062,19.0625l-21.64062,21.64062h14.6875c-15.672,34.624 -50.60387,58.82813 -91.17187,58.82813c-1.568,0 -3.13475,-0.03738 -4.71875,-0.10938c-38.224,-1.76 -71.2695,-25.54275 -86.4375,-58.71875h14.67188l-21.54688,-21.54687c-0.944,-4.736 -1.651,-9.54838 -1.875,-14.48438c-0.176,-3.704 -0.0445,-7.36762 0.1875,-11.01562h17.35938l-15.21875,-15.21875c5.28,-23.784 19.15913,-45.06575 39.70313,-59.59375c1.016,-0.72 2.19025,-1.09375 3.40625,-1.09375c1.976,0 3.83275,0.99225 4.96875,2.65625c1.12,1.656 1.33012,3.68288 0.57812,5.54688c-2.4,6.048 -3.60938,12.38775 -3.60938,18.84375c0,16.592 7.72312,31.84413 21.20312,41.82813c1.472,1.096 2.38075,2.74687 2.46875,4.54687c0.088,1.8 -0.64762,3.54925 -2.01562,4.78125c-9.76,8.816 -15.14063,20.77588 -15.14063,33.67188c0,22.072 15.79838,40.54812 36.73438,44.82812l0.90625,-24l-9.98438,6.79688c-1.096,0.736 -2.71987,0.63838 -3.67187,-0.26562c-1.008,-0.96 -1.21962,-2.47226 -0.51562,-3.65626l7.40625,-12.42187l-15.46875,-3.20313c-1.36,-0.28 -2.34375,-1.49862 -2.34375,-2.89062c0,-1.392 0.98375,-2.603 2.34375,-2.875l15.46875,-3.20312l-7.39062,-12.40626c-0.712,-1.2 -0.5,-2.70425 0.5,-3.65625c1.008,-0.96 2.51987,-1.05725 3.67187,-0.28125l11.1875,7.59375l4.23438,-109.64063c0.064,-1.576 1.3455,-2.8125 2.9375,-2.8125c1.584,-0.008 2.8815,1.24412 2.9375,2.82812z" id="strokeMainSVG" fillOpacity="0.45882" fill="#2f2a39" strokeOpacity="0.45882" stroke="#2f2a39" strokeWidth={10} strokeLinejoin="round" />
          <g transform="scale(8,8)" fill="#ffffff" stroke="none" strokeWidth={1} strokeLinejoin="miter">
            <path d="M15.49805,4c-0.199,0 -0.35919,0.15456 -0.36719,0.35156l-0.5293,13.70508l-1.39844,-0.94922c-0.144,-0.097 -0.33298,-0.08484 -0.45898,0.03516c-0.125,0.119 -0.1515,0.30703 -0.0625,0.45703l0.92383,1.55078l-1.93359,0.40039c-0.17,0.034 -0.29297,0.18538 -0.29297,0.35938c0,0.174 0.12297,0.32633 0.29297,0.36133l1.93359,0.40039l-0.92578,1.55273c-0.088,0.148 -0.06155,0.33703 0.06445,0.45703c0.119,0.113 0.32198,0.1252 0.45898,0.0332l1.24805,-0.84961l-0.11328,3c-2.617,-0.535 -4.5918,-2.84452 -4.5918,-5.60352c0,-1.612 0.67258,-3.10698 1.89258,-4.20898c0.171,-0.154 0.26295,-0.37266 0.25195,-0.59766c-0.011,-0.225 -0.12459,-0.43136 -0.30859,-0.56836c-1.685,-1.248 -2.65039,-3.15452 -2.65039,-5.22852c0,-0.807 0.15117,-1.59947 0.45117,-2.35547c0.094,-0.233 0.06773,-0.48636 -0.07227,-0.69336c-0.142,-0.208 -0.37409,-0.33203 -0.62109,-0.33203c-0.152,0 -0.29878,0.04672 -0.42578,0.13672c-2.568,1.816 -4.30289,4.47622 -4.96289,7.44922l1.90234,1.90234h-2.16992c-0.029,0.456 -0.04544,0.91395 -0.02344,1.37695c0.028,0.617 0.11637,1.21855 0.23438,1.81055l2.69336,2.69336h-1.83398c1.896,4.147 6.02669,7.11984 10.80469,7.33984c0.198,0.009 0.39384,0.01367 0.58984,0.01367c5.071,0 9.43748,-3.02552 11.39648,-7.35352h-1.83594l2.70508,-2.70508c0.151,-0.772 0.23633,-1.56681 0.23633,-2.38281c0,-0.267 -0.03183,-0.52992 -0.04883,-0.79492h-2.15625l1.89453,-1.89453c-0.666,-2.977 -2.40898,-5.65503 -4.95898,-7.45703c-0.127,-0.09 -0.27283,-0.13672 -0.42383,-0.13672c-0.247,0 -0.47909,0.12403 -0.62109,0.33203c-0.14,0.206 -0.16722,0.45936 -0.07422,0.69336c0.301,0.756 0.45313,1.54942 0.45313,2.35742c0,2.074 -0.96539,3.97952 -2.65039,5.22852c-0.185,0.137 -0.29759,0.34336 -0.30859,0.56836c-0.011,0.226 0.08095,0.44461 0.25195,0.59961c1.513,1.367 2.17644,3.37886 1.77344,5.38086c-0.448,2.222 -2.24466,4.00159 -4.47266,4.43359l-0.11328,-3.00195l1.24805,0.84961c0.137,0.095 0.34094,0.07789 0.46094,-0.03711c0.125,-0.119 0.14855,-0.30903 0.06055,-0.45703l-0.92383,-1.54883l1.93359,-0.40234c0.17,-0.034 0.29297,-0.18538 0.29297,-0.35937c0,-0.173 -0.12397,-0.32338 -0.29297,-0.35937l-1.93359,-0.40234l0.92578,-1.55078c0.088,-0.148 0.0625,-0.33608 -0.0625,-0.45508c-0.124,-0.117 -0.32094,-0.13311 -0.46094,-0.03711l-1.39648,0.94922l-0.53125,-13.70313c-0.007,-0.198 -0.16919,-0.35452 -0.36719,-0.35352z">
            </path>
          </g>
        </g>
      </svg>
      <h1 className="text-[#FFFFFF] font-medium font-sans text-[22px] mt-[7px] ml-[7px]">Cyttorak</h1>
    </a>
    <nav className="mt-[14px]">
      <ul className="flex ">
        <li className="mx-[16px] font-semibold text-[#FFFFFF] hover:text-[#B7836E]  "> <Link to="/" relative="path" className='p-[5px]'>Home</Link></li>
        <li className="mx-[16px] font-semibold text-[#FFFFFF] hover:text-[#B7836E] "><Link to="/work-with-me" relative="path" className='p-[5px]'>Work With Me</Link></li>
        <li className="mx-[16px] font-semibold text-[#FFFFFF] hover:text-[#B7836E] "><Link to="/blog-list" relative="path" className='p-[5px]'>Blog</Link></li>
        <li className="mx-[16px] font-semibold text-[#FFFFFF] hover:text-[#B7836E] "><Link to="/sign-up" relative="path" className='p-[5px]'>Contact Us</Link></li>
      </ul>
    </nav>
    <div className="contact flex">
      <div className="search mt-[5px]  flex">
        <input className=" text-[15px] text-[#FFFFFF]  border-white-500 pl-[10px]  outline-none bg-[#504448] hover:bg-[#1F232C] hover:border-b-[3px]" placeholder="Search..." />
        <button type="submit" className="bg-[#504448] text-[white]   p-2  text-xs hover:opacity-80">Search</button>
      </div>
      <div className="social">
      </div>
    </div>
  </div>
</div>
{/* <div class="footer  bottom-0 bg-[#1F232C] py-[20px] px-[15px]">
  <h1>©2035 by Viet vip pro. Proudly created with Wix.com</h1>
    </div> */}
    <Outlet/>
   
      
    </div>
  )
}

export default Client