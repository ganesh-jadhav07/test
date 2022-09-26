//demo api for testing purposes
export const DEMO = `query HomeSection_2_Query { 
    page(id: "cG9zdDo5") { 
    title 
    homepage_customfields { 
    section2Title 
    section2Content 
  } } } `;

//write your api's here

// GET ALL PRODUCTS
export const PRODUCTS = `
query HomeSection_3_Query { 

  page(id: "cG9zdDo1", idType: ID) { 
    homepage_customfields { 
      section3Title 
      section3Tagline 
      section3Subtitle 
      section3Buttondata 
      section3Bg { 
        sourceUrl 
      } 
    } 
  } 
  products { 
    nodes { 
      title 
      products { 
        overview 
      } 
    } 
  } 
  post(id: "cG9zdDoyNA==") { 
    icons { 
      greenDiamond { 
        sourceUrl 
      } 
      greyDiamond { 
        sourceUrl 
      } 
    } 
  } 
} 
`;
