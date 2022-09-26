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
      section3Title 
      section3Tagline 
      section3Subtitle 
      section3Buttondata 
      section3Bg { 
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
    } 
  } 
}`;

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

//For HomePage Section2
export const HOMEPAGESECTION2 = `query HomeSection_2_Query { 

  page(id: "cG9zdDo1") { 

    title 

    homepage_customfields { 

      section2Title 

      section2Content 

      section2Bg { 

        sourceUrl 

      } 

      section2Buttondata 

    } 

  } 

  post(id: "cG9zdDoyNA==") { 

    icons { 

      greenUpwardsArrow { 

        sourceUrl 

      } 

    } 

  } 

}`;
