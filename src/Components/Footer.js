import React from 'react'
import $ from 'jquery'
import { gsap } from 'gsap';
// import ReactDOM from 'react-dom';

export default function Footer() {
  
  $(document).ready(function(){
    $(".opt-list button").addClass("btn btn-link btn-sm");
  })
  
  // let mm = gsap.matchMedia();
  // mm.add("(max-width: 950px)", () => {
  //   gsap.to(".footer-mid .btn-group", 0.3, {opacity:0, display:"none"});
  // });


  return (
    <div className="footer">
      {/* Top part of footer */}
      <div className="footer-top">
        <h6>company name</h6>

        <div className="btn-group gap-4" role="group" aria-label="Basic mixed styles example">
          <button className="btn btn-sm btn-link">
            <a href="https://twitter.com/" target="-blank">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </button>
          
          <button className="btn btn-sm btn-link">
            <a href="https://www.linkedin.com/" target="-blank">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </button>
        </div>
      </div>
      <hr/>


      {/* Middle part of footer */}
      <div className="footer-mid">
        <div className="d-flex inline-flex gap-5">
          <div className="opt-list">
            <button> Founders </button>
            <button> Beneficiaries </button>
            <button> Scholorships </button>
          </div>

          <div className="opt-list">
            <button> Press </button>
            <button> Blog </button>
            <button> Contact </button>
          </div>
        </div>
        
        <div className="btn-group gap-4" role="group" aria-label="Basic mixed styles example">
          <button className="btn btn-sm btn-link">
            <a href="https://twitter.com/" target="-blank">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </button>
          
          <button className="btn btn-sm btn-link">
            <a href="https://www.linkedin.com/" target="-blank">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </button>
        </div>
      </div><br/>
      <br/>



      {/* Bottom part of footer */}
      <div className="footer-bottom">
        <div className="opt-list">
          <button> Privacy Policy </button>
          <button> Terms and Conditions </button>
        </div>

        <div className="opt-list">
          <button> © 2021 Company Name. All rights reserved. </button>
        </div>
      </div>
    </div>
  ) 
}