import ContactHeaderSection from "./ContactHeaderSection.js";
import ContactFooter from "./ContactFooter";

function Contact(props) {
  return (
    <>
      {/* headerSection */}
      <ContactHeaderSection contactus={props} />

      {/* form Section */}
      <div
        id="crmWebToEntityForm"
        className="w-screen zcwf_lblLeft crmWebToEntityForm"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <form
          action="https://crmsandbox.zoho.com/crm/WebToContactForm"
          name="WebToContacts5028374000000447001"
          method="POST"
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
                    required
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
                    required
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
                    required
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
                    required
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
                    required
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
                          required
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
              />
            </div>
          </div>
        </form>
      </div>

      {/* footer */}
      <ContactFooter contactus={props} />
    </>
  );
}

export default Contact;
