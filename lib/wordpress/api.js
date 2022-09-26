//demo api for testing purposes
export const DEMO = `query HomeSection_2_Query { 
    page(id: "cG9zdDo5") { 
    title 
    homepage_customfields { 
    section2Title 
    section2Content 
  } } } `;

//write your api's here

export const HomePageSection1 = `query HomeSection_1_Query { 
  page(id: "cG9zdDo5") { 
    title 
    homepage_customfields { 
      section1Content 
      section1Subtitle 
      section1Tagline 
      section1Title 
    } 
  }
 services {
    nodes { 
      id 
      title 
      content 
    } 
  }
}`;

export const customerReview = `query HomeSection_4_Query { 
  page(id: "cG9zdDo5") 
  { 
    title 
    homepage_customfields 
    { 
      section4Title 
    } 
  } 
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

//API for Home Page's Innovation Service Section

export const HomePageSection2 = `query HomeSection_2_Query { 

  page(id: "cG9zdDo5") { 

    title 

    homepage_customfields { 

      section2Title 

      section2Content 

    } 

  } 

} `;
