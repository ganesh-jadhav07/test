//write your api's here

export const HOMEPAGE = `query HomeSection_1_Query { 

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

      section2Title 
      section2Content 
      section2Bg { 
        sourceUrl 
      } 
      section2Buttondata 
      
      section3Title 
      section3Tagline 
      section3Subtitle 
      section3Buttondata 
      section3Bg { 
        sourceUrl 
      } 
      section4Title 
      section4Bg { 
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
      blueDiamond { 
        sourceUrl 
      } 
      greenDiamond { 
        sourceUrl 
      } 
      greyDiamond { 
        sourceUrl 
      } 
      greenUpwardsArrow { 
        sourceUrl 
      } 
    } 
  } 

  reviews { 
    nodes { 
      id 
      title 
      content 
    } 
  } 
  post(id: "cG9zdDoyNA==") { 
    icons { 
      blueDiamond { 
        sourceUrl 
      } 
      greyDiamond { 
        sourceUrl 
      } 
      openDoubleQuotes { 
        sourceUrl 
      } 
    } 
  }
  navigations{ 
      nodes { 
      title 
      navigation {
        path
      }
    } 
  } 
   

} `;

export const CONTACTPAGE = `query ContactusQuery {
  page(id: "cG9zdDoxMTY=") {
    contactus {
      contactTitle
      contactSubtitle
      contactPoint1
      contactPoint2
      contactPoint3
      contactBg {
        sourceUrl
      }
      contactMail {
        sourceUrl
      }
    }
  }
  addresses {
    nodes {
      title
      content
    }
  }
} `;
