import React from 'react'

function Contact() {
  return (
    <div>
      <form action='https://crmsandbox.zoho.com/crm/WebToContactForm' name='WebToContacts5028374000000447001' method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory5028374000000447001()' accept-charset='UTF-8'>
        <div className='zcwf_title' style={{maxWidth: '600px',color: 'black'}}>Contact Us</div>
        <div className='zcwf_row'><div className='zcwf_col_lab' style={{fontSize:'12px', fontFamily: 'Arial'}}><label for='First_Name'>First Name<span style={{color:'red'}}>*</span></label></div><div className='zcwf_col_fld'><input type='text' id='First_Name' name='First Name' maxlength='40'></input><div className='zcwf_col_help'></div></div></div>
        <div className='zcwf_row'><div className='zcwf_col_lab' style={{fontSize:'12px', fontFamily: 'Arial'}}><label for='Last_Name'>Last Name<span style={{color:'red'}}>*</span></label></div><div className='zcwf_col_fld'><input type='text' id='Last_Name' name='Last Name' maxlength='80'></input><div className='zcwf_col_help'></div></div></div>
        <div className='zcwf_row'><div className='zcwf_col_lab' style={{fontSize:'12px', fontFamily: 'Arial'}}><label for='Mobile'>Mobile Number</label></div><div className='zcwf_col_fld'><input type='text' id='Mobile' name='Mobile' maxlength='30'></input><div className='zcwf_col_help'></div></div></div>
        <div className='zcwf_row'><div className='zcwf_col_lab' style={{fontSize:'12px', fontFamily: 'Arial'}}><label for='Email'>Email<span style={{color:'red'}}>*</span></label></div><div className='zcwf_col_fld'><input type='text' ftype='email' id='Email' name='Email' maxlength='100'></input><div className='zcwf_col_help'></div></div></div>
        <div className='zcwf_row'><div className='zcwf_col_lab' style={{fontSize:'12px', fontFamily: 'Arial'}}><label for='Description'>Message</label></div><div className='zcwf_col_fld'><textarea id='Description' name='Description'></textarea><div className='zcwf_col_help'></div></div></div><div className='zcwf_row'><div className='zcwf_privacy'><div className='dIB vat' align='left'><div className='displayPurpose  f13'><label className='newCustomchkbox-md dIB w100per'><input autocomplete='off' id='privacyTool5028374000000447001' type='checkbox' name='privacyTool' onclick='disableErr5028374000000447001()' /></label></div></div><div className='dIB zcwf_privacy_txt' style={{fontSize: '12px',fontFamily:'Arial',color: 'black'}}>I agree to the Privacy Policy and Terms of Service.</div> <div id='privacyErr5028374000000447001' style={{fontSize:'12px',color:'red',paddingLeft: '5px',visibility:'hidden'}}>Please accept this</div></div></div><div className='zcwf_row'><div className='zcwf_col_lab'></div><div className='zcwf_col_fld'><input type='submit' id='formsubmit' className='formsubmit zcwf_button' value='Submit' title='Submit' /><input type='reset' className='zcwf_button' name='reset' value='Reset' title='Reset' /></div></div>
      </form>
    </div>
  )
}

export default Contact






















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
//             <label htmlFor="text" className="text-sm leading-7 text-gray-600">
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
//             <label htmlFor="number" className="text-sm leading-7 text-gray-600">
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
//             <label htmlFor="email" className="text-sm leading-7 text-gray-600">
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
//               htmlFor="message"
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

// export default Contact;
