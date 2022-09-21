//demo api for testing purposes
export const DEMO = `query HomeSection_2_Query { 
    page(id: "cG9zdDo5") { 
    title 
    homepage_customfields { 
    section2Title 
    section2Content 
  } } } `;


//write your api's here

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