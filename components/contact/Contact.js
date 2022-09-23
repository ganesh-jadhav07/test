// import { CheckIcon, MapPinIcon } from "@heroicons/react/24/solid";

// function Contact() {
//   return (
//     <div>
//       <div className="relative w-screen bg-auto">
//         <img
//           src="https://s3-alpha-sig.figma.com/img/09dd/72a8/71326e2675aef7698b40697340b3f664?Expires=1664150400&Signature=alPUDoP9rqzZBMbWIx~OptanTXLIugPI9Z8PuFscbhfF6D0Njw0tR4qo07~u1i99TfkfggcEIC1BCstrnEsWfZ3CWp4pK-IRJwQLm8t4JD8kcQWRddTsLUxf3LP550Se-Nba4HgcxttFQhp4xXzb1438o9kWcVOJtD8i0tssbPavQgfzxwzLsw9yhKvWBjudWhYNB7dILxnVLSWnzxPy-TXcOgW61f1-fZur0syP49tARLZA~57YrP3wzXbxn0frWddWjt~9Hgdzrx-oXjDfdfhkB7I8d~CEHbxgOdBCp9tAt033HoiZYT5sKS6erFm4sultuF2o1A8ZC36ELtffWA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
//           className="w-screen h-[100vh] contrast-50 object-cover xl:h-[80vh] 2xl:h-[80vh]"
//         />
//         <h1 className="absolute text-2xl font-bold text-black top-24 left-10 xl:text-4xl ">
//           Drop a line
//         </h1>
//         <h3 className="absolute text-xl text-black top-32 left-10 xl:top-36 xl:text-2xl">
//           We're happy to answer questions.
//         </h3>
//         <div className="absolute text-xl text-black top-[180px] left-10 xl:text-2xl">
//           <CheckIcon className="inline w-5 h-5" />{" "}
//           <span>Learn how to increase tea</span>
//         </div>
//         <div className="absolute text-xl text-black top-[210px] left-10 xl:text-2xl">
//           <CheckIcon className="inline w-5 h-5" />{" "}
//           <span>Learn how to increase tea</span>
//         </div>
//         <div className="absolute text-xl text-black top-[240px] left-10 xl:text-2xl">
//           <CheckIcon className="inline w-5 h-5" />{" "}
//           <span>Learn how to increase tea</span>
//         </div>
//       </div>

//       {/* form section */}
//       {/* changing */}
//       <div className="container grid justify-center px-2 py-10 mx-auto grid-col-1 md:grid-col-2 lg:grid-cols-2">
//         <div className="mx-4">
//           <div className="relative mb-4">
//             <label htmlhtmlFor="text" className="text-sm leading-7 text-gray-600">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="w-full px-4 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
//             />
//           </div>
//           <div className="relative mb-4">
//             <label htmlhtmlFor="number" className="text-sm leading-7 text-gray-600">
//               Phone Number
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="w-full px-4 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
//             />
//           </div>
//           <div className="relative mb-4">
//             <label htmlhtmlFor="email" className="text-sm leading-7 text-gray-600">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="w-full px-4 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
//             />
//           </div>
//         </div>

//         <div>
//           <div className="relative px-4 mb-4 lg:Px-2">
//             <label
//               htmlhtmlFor="message"
//               className="text-sm leading-7 text-gray-600">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               className="w-full h-32 px-6 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"></textarea>
//           </div>
//           <div className="relative px-4 mb-4 lg:px-4">
//             <input type="checkbox" id="checkbox" name="checkbox" />
//             <label className="mx-3 text-sm font-bold leading-7 text-gray-700">
//               I agree to the privay policy
//             </label>
//           </div>
//           <div className="relative px-4 mb-4 lg:px-4">
//             <a className="no-underline cursor-pointer text-sky-500">
//               Privacy policy
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="w-full p-4 mb-10">
//         <button className="flex px-8 py-2 mx-auto text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
//           Button
//         </button>
//       </div>

//       {/* footer */}
//       <footer className="text-gray-600 body-font">
//         <div className="flex flex-wrap justify-center flex-grow -mb-10 text-center md:text-center">
//           <div className="flex flex-col justify-center w-full px-8 lg:w-1/4 md:w-1/2">
//             <MapPinIcon className="self-center justify-center w-5 h-5 md:self-center" />
//             <h2 className="mb-3 text-lg font-bold tracking-widest text-gray-900 title-font">
//               INDIA
//             </h2>
//             <nav className="mb-10 list-none ">
//               India 3rd Floor, Vasudha House, Baner Road, Pune, Maharashtra
//               411045, India
//             </nav>
//           </div>
//           <div className="flex flex-col w-full px-8 lg:w-1/4 md:w-1/2">
//             <MapPinIcon className="self-center justify-center w-5 h-5 md:self-center" />
//             <h2 className="mb-3 font-bold tracking-widest text-gray-900 text-large title-font">
//               AUSTRALIA
//             </h2>
//             <nav className="mb-10 list-none">
//               Australia Level 2, 11 York Street, Sydney NSW 2000
//             </nav>
//           </div>
//           <div className="flex flex-col w-full px-8 lg:w-1/4 md:w-1/2">
//             <MapPinIcon className="self-center justify-center w-5 h-5 md:self-center" />
//             <h2 className="mb-3 text-lg font-bold tracking-widest text-gray-900 title-font">
//               USA
//             </h2>
//             <nav className="mb-10 list-none">
//               USA 160 Greentree Drive, Suite 101 Dover, DE 19904
//             </nav>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

//

import React, { useState } from "react";
import { CheckIcon, MapPinIcon } from "@heroicons/react/24/solid";
import mailLogo from "../../public/images/home/mail1.png";

function Contact() {
  const [validation,setValidation] = useState(false);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if(e.target.Email.value.length > 0) {
  //     window.location.href ="https://crmsandbox.zoho.com/crm/WebToContactForm";
  //   }
  //   else{
  //     alert("please enter your email address");
  //   }
  //   // console.log();
  //   // console.log(e.target.First_Name.value);
  // };

  const fnameChangeHandler = (e) => {
    if(e.target.value <= 0 ||validation){
      alert("Please enter your first name");
      setValidation(true);
    }
  }

  const privacyAlert5028374000000447001 = (e) => {
    e.preventDefault();
    console.log(e.target.Email.value);
    var privacyTool = document.getElementById("privacyTool5028374000000447001");
    var privacyErr = document.getElementById("privacyErr5028374000000447001");
    if (privacyTool != undefined && !privacyTool.checked) {
      privacyErr.style.visibility = "visible";
      privacyTool.focus();
      return false;
    }
    return true;
  };
  function disableErr5028374000000447001() {
    var privacyTool = document.getElementById("privacyTool5028374000000447001");
    var privacyErr = document.getElementById("privacyErr5028374000000447001");
    if (
      privacyTool != undefined &&
      privacyTool.checked &&
      privacyErr != undefined
    ) {
      privacyErr.style.visibility = "hidden";
    }
  }
  function validateEmail5028374000000447001() {
    var form = document.forms["WebToContacts5028374000000447001"];
    var emailFld = form.querySelectorAll("[ftype=email]");
    var i;
    for (i = 0; i < emailFld.length; i++) {
      var emailVal = emailFld[i].value;
      if (emailVal.replace(/^\s+|\s+$/g, "").length != 0) {
        var atpos = emailVal.indexOf("@");
        var dotpos = emailVal.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
          alert("Please enter a valid email address. ");
          emailFld[i].focus();
          return false;
        }
      }
    }
    return true;
  }

  function checkMandatory5028374000000447001() {
    var mndFileds = new Array("First Name", "Last Name", "Email");
    var fldLangVal = new Array("First\x20Name", "Last\x20Name", "Email");
    for (i = 0; i < mndFileds.length; i++) {
      var fieldObj =
        document.forms["WebToContacts5028374000000447001"][mndFileds[i]];
      if (fieldObj) {
        if (fieldObj.value.replace(/^\s+|\s+$/g, "").length == 0) {
          if (fieldObj.type == "file") {
            alert("Please select a file to upload.");
            fieldObj.focus();
            return false;
          }
          alert(fldLangVal[i] + " cannot be empty.");
          fieldObj.focus();
          return false;
        } else if (fieldObj.nodeName == "SELECT") {
          if (fieldObj.options[fieldObj.selectedIndex].value == "-None-") {
            alert(fldLangVal[i] + " cannot be none.");
            fieldObj.focus();
            return false;
          }
        } else if (fieldObj.type == "checkbox") {
          if (fieldObj.checked == false) {
            alert("Please accept  " + fldLangVal[i]);
            fieldObj.focus();
            return false;
          }
        }
        try {
          if (fieldObj.name == "Last Name") {
            let name = fieldObj.value;
          }
        } catch (e) {}
      }
    }
    if (!validateEmail5028374000000447001()) {
      return false;
    }

    if (!privacyAlert5028374000000447001()) {
      return false;
    }
    document
      .querySelector(".crmWebToEntityForm .formsubmit")
      .setAttribute("disabled", true);
  }

  function tooltipShow5028374000000447001(el) {
    var tooltip = el.nextElementSibling;
    var tooltipDisplay = tooltip.style.display;
    if (tooltipDisplay == "none") {
      var allTooltip = document.getElementsByClassName("zcwf_tooltip_over");
      for (i = 0; i < allTooltip.length; i++) {
        allTooltip[i].style.display = "none";
      }
      tooltip.style.display = "block";
    } else {
      tooltip.style.display = "none";
    }
  }

  console.log(mailLogo);
  return (
    <>
      <div>
        <div className="relative w-screen bg-auto">
          <div className="relative">
            <img
              src="https://s3-alpha-sig.figma.com/img/09dd/72a8/71326e2675aef7698b40697340b3f664?Expires=1664150400&Signature=alPUDoP9rqzZBMbWIx~OptanTXLIugPI9Z8PuFscbhfF6D0Njw0tR4qo07~u1i99TfkfggcEIC1BCstrnEsWfZ3CWp4pK-IRJwQLm8t4JD8kcQWRddTsLUxf3LP550Se-Nba4HgcxttFQhp4xXzb1438o9kWcVOJtD8i0tssbPavQgfzxwzLsw9yhKvWBjudWhYNB7dILxnVLSWnzxPy-TXcOgW61f1-fZur0syP49tARLZA~57YrP3wzXbxn0frWddWjt~9Hgdzrx-oXjDfdfhkB7I8d~CEHbxgOdBCp9tAt033HoiZYT5sKS6erFm4sultuF2o1A8ZC36ELtffWA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              className="w-screen h-[50vh] contrast-100 object-cover xl:h-[50vh] 2xl:h-[50vh]"
            />
            <img
              src={mailLogo.src}
              className="absolute z-[1] w-24 h-24 top-52 left-[69%] sm:left-[60%] sm:h-[12rem] sm:w-[15rem] sm:top-32 md:left-[62%] md:h[14rem] md:w-[17rem] lg:h-[12rem] lg:w-[15rem] lg:top-28 xl:top-32"
              alt="mail"
            />
          </div>
          <h1 className="absolute text-lg font-semibold text-white top-24 left-5 sm:text-lg md:text-lg xl:text-2xl ">
            Drop a line
          </h1>
          <h3 className="absolute text-base text-white top-32 left-5 sm:text-sm md:base xl:top-36 xl:text-xl xl:lg">
            We're happy to answer questions.
          </h3>
          <div className="absolute text-xs text-white top-[180px] left-5 sm:text-sm md:base xl:text-xl">
            <CheckIcon className="inline w-4 h-5" />{" "}
            <span>Learn how to increase team productivity</span>
          </div>
          <div className="absolute text-xs text-white top-[210px] left-5 sm:text-sm md:base xl:text-xl">
            <CheckIcon className="inline w-4 h-5" />{" "}
            <span> Get pricing information</span>
          </div>
          <div className="absolute text-xs text-white top-[240px] left-5 sm:text-sm md:base xl:text-xl">
            <CheckIcon className="inline w-4 h-5" />{" "}
            <span>Explore use cases for your team</span>
          </div>
        </div>
      </div>

      <div
        id="crmWebToEntityForm"
        className="w-screen zcwf_lblLeft crmWebToEntityForm"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <form
          action="https://crmsandbox.zoho.com/crm/WebToContactForm"
          name="WebToContacts5028374000000447001"
          method="POST"
          // onSubmit={(e) =>checkMandatory5028374000000447001(e)}
          // onSubmit={submitHandler}
          acceptCharset="UTF-8"
          className="grid grid-cols-1"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div>
              <input
                type="text"
                style={{ display: "none" }}
                name="xnQsjsdp"
                value="22a7e76744104c1be3d76a00e7328184bdf7fc9ff7b951e9aa732dc571c638bd"
              />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />
              <input
                type="text"
                style={{ display: "none" }}
                name="xmIwtLD"
                value="8bc9c3c27b835e9e0b0ca5afa2ffb891e632e2b83522fa46379a1633333a65eb"
              />
              <input
                type="text"
                style={{ display: "none" }}
                name="actionType"
                value="Q29udGFjdHM="
              />
              <input
                type="text"
                style={{ display: "none" }}
                name="returnURL"
                value="https&#x3a;&#x2f;&#x2f;mango-water-059233300.1.azurestaticapps.net&#x2f;"
              />

              <div className="grid grid-cols-1 zcwf_row">
                <div
                  className="zcwf_col_lab"
                  style={{ fontSize: "14px", fontFamily: "Arial" }}
                >
                  <label htmlFor="First_Name">
                    First Name<span style={{ color: "red" }}>*</span>
                  </label>
                </div>
                <div className="zcwf_col_fld">
                  <input
                    type="text"
                    id="First_Name"
                    name="First Name"
                    maxLength="40"
                    className="p-2"
                    placeholder="First Name"
                    onChange={fnameChangeHandler}
                  />
                  <div className="zcwf_col_help"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 zcwf_row">
                <div
                  className="zcwf_col_lab"
                  style={{ fontSize: "14px", fontFamily: "Arial" }}
                >
                  <label htmlFor="Last_Name">
                    Last Name<span style={{ color: "red" }}>*</span>
                  </label>
                </div>
                <div className="zcwf_col_fld">
                  <input
                    type="text"
                    id="Last_Name"
                    name="Last Name"
                    maxLength="80"
                    placeholder="Last Name"
                    className="p-2"
                  />
                  <div className="zcwf_col_help"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 zcwf_row">
                <div
                  className="zcwf_col_lab"
                  style={{ fontSize: "14px", fontFamily: "Arial" }}
                >
                  <label htmlFor="Mobile">Mobile Number</label>
                </div>
                <div className="zcwf_col_fld">
                  <input
                    type="text"
                    id="Mobile"
                    name="Mobile"
                    maxLength="30"
                    placeholder="Mobile Number"
                    className="p-2"
                  />
                  <div className="zcwf_col_help"></div>
                </div>
              </div>
            </div>

            <div>
              <div className="grid justify-start grid-cols-1 zcwf_row">
                <div
                  className="zcwf_col_lab"
                  style={{ fontSize: "14px", fontFamily: "Arial" }}
                >
                  <label htmlFor="Email">
                    Email<span style={{ color: "red" }}>*</span>
                  </label>
                </div>
                <div className="zcwf_col_fld">
                  <input
                    type="text"
                    ftype="email"
                    id="Email"
                    name="Email"
                    maxLength="100"
                    placeholder="Email"
                    className="p-2"
                  />
                  <div className="zcwf_col_help"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 zcwf_row">
                <div
                  className="zcwf_col_lab"
                  style={{ fontSize: "14px", fontFamily: "Arial" }}
                >
                  <label htmlFor="Description">Message</label>
                </div>
                <div className="zcwf_col_fld">
                  <textarea
                    id="Description"
                    name="Description"
                    rows="3"
                  ></textarea>
                  <div className="zcwf_col_help"></div>
                </div>
              </div>

              <div className="zcwf_row">
                <div className="grid justify-end zcwf_privacy">
                  <div className="dIB vat" align="right">
                    <div className="displayPurpose f13">
                      <label className="newCustomchkbox-md dIB w100per -mt-[8px]">
                        <input
                          autoComplete="off"
                          id="privacyTool5028374000000447001"
                          type="checkbox"
                          name="privacyTool"
                          onClick={() => disableErr5028374000000447001()}
                        />
                      </label>
                      <div
                        className="dIB zcwf_privacy_txt"
                        style={{ fontSize: "14px", fontFamily: "Arial" }}
                      >
                        I agree to the Privacy Policy.
                      </div>
                    </div>
                  </div>

                  <div
                    className="text-xs text-right"
                    style={{ fontSize: "14px", fontFamily: "Arial" }}
                  >
                    <a className="font-bold cursor-pointer text-sky-600">
                      Privacy Policy
                    </a>
                  </div>
                  <div
                    id="privacyErr5028374000000447001"
                    style={{
                      fontSize: "12px",
                      color: "red",
                      paddingLeft: "5px",
                      visibility: "hidden",
                    }}
                  >
                    Please accept this
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* <div className="zcwf_col_lab"></div> */}
            <div className="flex justify-end">
              <input
                type="submit"
                id="formsubmit"
                className="formsubmit zcwf_button form" 
                value="Submit"
                title="Submit"
                disabled={validation}
                
              />
              {/* <input
              type="reset"
              className="zcwf_button"
              name="reset"
              value="Reset"
              title="Reset" 
            />*/}
            </div>
          </div>
        </form>
      </div>

      {/* footer */}
      <footer className="text-gray-600 body-font">
        <div className="flex justify-center ml-4 mr-4 -mb-10 space-x-4 text-center md:text-center">
          <div>
            <MapPinIcon className="w-5 h-5 md:" />
            <div>
              <h2 className="pl-2 mb-3 text-xs font-bold tracking-widest text-left text-gray-900 title-font md:text-sm">
                INDIA
              </h2>
              <nav className="justify-center pl-2 mb-10 text-xs text-left list-none md:text-sm">
                India 3rd Floor, Vasudha House, Baner Road, Pune, Maharashtra
                411045, India{" "}
              </nav>{" "}
            </div>
          </div>

          <div>
            <MapPinIcon className="w-5 h-5 md:" />
            <div>
              <h2 className="pl-2 mb-3 text-xs font-bold tracking-widest text-left text-gray-900 title-font md:text-sm">
                INDIA
              </h2>
              <nav className="pl-2 mb-10 text-xs text-left list-none md:text-sm">
                India 3rd Floor, Vasudha House, Baner Road, Pune, Maharashtra
                411045, India{" "}
              </nav>{" "}
            </div>
          </div>

          <div>
            <MapPinIcon className="w-5 h-5 md:" />
            <h2 className="pl-2 mb-3 text-xs font-bold tracking-widest text-left text-gray-900 title-font md:text-sm">
              INDIA
            </h2>
            <nav className="pl-2 mb-10 text-xs text-left list-none md:text-sm">
              India 3rd Floor, Vasudha House, Baner Road, Pune, Maharashtra
              411045, India{" "}
            </nav>{" "}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
