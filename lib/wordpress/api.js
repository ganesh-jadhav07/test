//demo api for testing purposes
// export const DEMO = `query HomeSection_2_Query { 
//     page(id: "cG9zdDo5") { 
//     title 
//     homepage_customfields { 
//     section2Title 
//     section2Content 
//   } } } `;

//write your api's here

export const HomePageSection1 = `query HomeSection_1_Query { 

  page(id: "cG9zdDo1", idType: ID) { 

    homepage_customfields { 
      section1Title 
      section1Tagline 
      section1Subtitle 
      section1Content 
      section1Buttondata 
      section1Bg { 
        sourceUrl 
      } 
    } 
  } 
  services { 
    nodes { 
      title 
      services { 
        overview 
        logo { 
          sourceUrl 
        } 
      } 
    } 
  } 
  post(id: "cG9zdDoyNA==") { 
    icons { 
      blueDiamond { 
        sourceUrl 
      } 
    } 
  } 
}`;


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
export const customerReview = `query HomeSection_4_Query {
  reviews 
  { 
    nodes 
    { 
      id 
      title 
      content 
    } 
  }
} `;

