export const TOKEN_QUERY = `mutation LoginUser { 
  login( input: { 
    clientMutationId: "uniqueId", 
    username: "bluepineapple_user", 
    password: "Bluepineapple@123" 
  } ) { 
    refreshToken 
  } 
} `;
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
      
      section3BgFlip { 
        sourceUrl 
      }
      section4Title 
      section4Bg { 
        sourceUrl 
      } 
       
    } 
  } 
  services(where: {status: PRIVATE}) { 
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
  products(where: {status: PRIVATE}) { 
    nodes { 
      title 
      products { 
        overview 
        logo{
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

  reviews(where: {status: PRIVATE}) { 
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

export const CONTACTPAGE = `query ContactUsQuery { 
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
  addresses(where: {status: PRIVATE}) { 
    nodes { 
      title 
      content 
    } 
  }
}`;
