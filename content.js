//options sorting
const banner_options = [];
const home_page_options = [];
const sidebar_options = [];
const friends_page_options = [];
const group_page_options = [];

chrome.storage.sync.get(function(options) {
  for (const [key, value] of Object.entries(options)) {
    if (value) {      
      if (key.includes("Banner")) {
        banner_options.push(this[key])
      } else if (key.includes("HomePage")) {
        home_page_options.push(this[key])
      } else if (key.includes("SideBar")) {
        sidebar_options.push(this[key])
      } else if (key.includes("FriendsPage")) {
        friends_page_options.push(this[key])
      } else if (key.includes("GroupsPage")) {
        group_page_options.push(this[key])
      }
    }
  }    
})

function onRemoved() {
  console.log("Zucker Ext - Defunct options removed");
}

function onError(e) {
  console.log(e);
}

const defunctOptions = ["sponsoredAdHomePage", "metaQuestHomePage", "videoSiteWide", "gamingSiteWide", "adsManagerHomePage", "autoClickSeeMoreHomePage", "birthdaysHomePage", 
  "bloodDonationsHomePage", "climateScienceCentreHomePage", "eventsHomePage", "feedsHomePage", "findFriendsHomePage", "fundraisersHomePage", "gamingVideoHomePage", "groupsHomePage",
  "marketplaceHomePage", "memoriesHomePage", "messengerHomePage", "messengerKidsHomePage", "metaQuest3SHomePage", "ordersPaymentsHomePage", "pagesHomePage", "paidPartnershipHomePage",
  "playGamesHomePage", "recentAdActivityHomePage", "reelsHomePage", "removeSeeLessHomePage", "savedHomePage", "videoHomePage"]
const removeDefunctOptions = chrome.storage.sync.remove(defunctOptions);
removeDefunctOptions.then(onRemoved, onError);

//page load and observer settings and operations
function urlChopper(url) {
  const str = "https://www.facebook.com/"
  const newurl = url.replace(str, '')
  return newurl
}

function htmlChopper(xPath) {
  const element = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (element != null) {
    element.remove()
  }  
}
const first_URL = urlChopper(window.location.href)
const config = { childList: true, subtree: true }
let main_page_node = null
let sidebar_node = null
let friends_page_node = null

window.addEventListener("load", () => {
  banner_options.forEach((option) => {
    option()       
  });
  if (first_URL === "") {
    let main_page_node = document.querySelector("[role='main']")
    let sidebar_node = document.querySelector("[role='navigation']")
    home_page_options.forEach((option) => {
      option();
    });
    sidebar_options.forEach((option) => {
      option();
    });
    main_page_observer.observe(main_page_node, config);
    sidebar_observer.observe(sidebar_node, config);
  } else if (first_URL === "friends") {
      let friends_page_node = document.body
      friends_page_options.forEach((option) => {
        option();
      });
      friends_page_observer.observe(friends_page_node, config);
  } else if (first_URL === "marketplace" || first_URL === "marketplace/?ref=app_tab") {

  } else if (first_URL === "groups/feed/" || first_URL === "groups/feed/#") {

  } else if (first_URL === "?filter=all&sk=h_chr") {

  }
});

window.navigation.addEventListener("navigate", (event) => {
  const new_url = urlChopper(event.destination.url)
  console.log("new URL is ", new_url)
  main_page_observer.disconnect();
  sidebar_observer.disconnect();
  friends_page_observer.disconnect();
  if (new_url === "") {
    let main_page_node = document.querySelector("[role='main']")
    let sidebar_node = document.querySelector("[role='navigation']")
    home_page_options.forEach((option) => {
      option();
    });
    sidebar_options.forEach((option) => {
      option();
    });
    main_page_observer.observe(main_page_node, config);
    sidebar_observer.observe(sidebar_node, config);
  } else if (new_url === "friends") {
      let friends_page_node = document.body
      friends_page_options.forEach((option) => {
        option();
      });
      friends_page_observer.observe(friends_page_node, config);
  } else if (new_url === "marketplace" || new_url === "marketplace/?ref=app_tab") {

  } else if (new_url === "groups/feed/" || new_url === "groups/feed/#") {

  } else if (new_url === "?filter=all&sk=h_chr") {

  }
});

let main_page_observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        home_page_options.forEach((option) => {
          option();
        });
      };
    });
  });
});

let sidebar_observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        sidebar_options.forEach((option) => {
          option();
        });
      };
    });
  });
});

let friends_page_observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        friends_page_options.forEach((option) => {
          option();
        });
      }
    });
  });
});

//Banner options
function reelsBanner() {
  const xPath = "//a[contains(@aria-label, 'Reels')]/ancestor::li"
  htmlChopper(xPath)  
}

//SiteWide options
function sponsoredAdsSiteWide(url) {
  if (url.includes('?filter=all&sk=h_chr')){
    //Feeds
    const xPath = "//div[contains(@class, 'sponsored_ad')]/ancestor::div[contains(@class, 'x1lliihq')]"
    htmlChopper(xPath) 
  } else if (url.includes('marketplace')) {
      //marketplace
      const marketplace_items = document.querySelector('div[aria-label="Collection of Marketplace items"]') 
      let browse_feed_array = []
      browse_feed_array = marketplace_items.querySelectorAll('div[class=""]')
      browse_feed_array.forEach((upsell_feed => {
        const xpath_text = ".//a[contains(@href, '/ads/about/?entry_product=ad_preferences')]/ancestor::div[1]"
        const xpath_image = ".//a[contains(@href, '/ads/about/?entry_product=ad_preferences')]/ancestor::div[5]/div[2]/div"
        const html_text = document.evaluate(xpath_text, upsell_feed, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
        const html_image = document.evaluate(xpath_image, upsell_feed, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
        if (html_text != null) {
          html_text.remove()
          html_image.remove()
        }
      }))
    }
}

function pumkSiteWide(url) {  
  let xpath = ""
  let html = null
  xpath = "//span[text() = 'People you may know']/ancestor::div[7]"
  html = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (html != null) {
    html.remove()
  }    
}

//Home Page News Feed (main) Options
function sponsoredAdsHomePage() {
  const xPath_feed = "//a[contains(@href, '/ads/about')]/ancestor::div[contains(@class, 'x1lliihq')][2]"
  //split the right rail into a seperate function    
  const xPath_right_rail = "//span[text() = 'Sponsored']/ancestor::div[8]"
  htmlChopper(xPath_feed)
  htmlChopper(xPath_right_rail)
}

function pumkHomePage() {
  const xPath = "//span[text() = 'People you may know']/ancestor::div[contains(@class, 'x1lliihq')]"
  htmlChopper(xPath)
}

function joinHomePage() {
  const xPath = "//span[text() = 'Join']/ancestor::div[25]"
  htmlChopper(xPath)
}

function storiesHomePage() {
  const xPath = "//a[contains(@href, '/stories/create/')]/ancestor::div[10]"
  htmlChopper(xPath)
}

function reelsAndShortVideosHomePage() {
  const xPath = "(//span[text() = 'Reels']/ancestor::div[contains(@class, 'x1lliihq')])[1]"
  htmlChopper(xPath)
}

function suggestedForYouHomePage() {
  const xPath = "//span[text() = 'Suggested for you']/ancestor::div[contains(@class, 'x1lliihq')]"
  htmlChopper(xPath)
}

function followHomePage() {
  const xPath = "//span[text() = 'Follow']/ancestor::div[24]"
  htmlChopper(xPath)
}

function paidPartnershipHomePage() {
  const xPath = "//span[text() = 'Paid partnership']/ancestor::div[contains(@class, 'x1lliihq')]"
  htmlChopper(xPath)
}

function videoPlaylistHomePage() {
  const xPath = "//span[text() = ' posted a video to the playlist ']/ancestor::div[contains(@class, 'x1lliihq')]"
  htmlChopper(xPath)
}

function isInHomePage() {
  const xPath = "//span[text() = ' is in ']/ancestor::div[contains(@class, 'x1lliihq')]"
  htmlChopper(xPath)
}

function isAtHomePage() {
  const xPath = "//span[text() = ' is at ']/ancestor::div[contains(@class, 'x1lliihq')]"
  htmlChopper(xPath)
}

function andHomePage() {
  const xPath = "//span[text() = ' and ']/ancestor::div[contains(@class, 'x1lliihq')]"
  htmlChopper(xPath)
}

function albumHomePage() {
  const xPath = "//span[text() = 'Album ']/ancestor::div[contains(@class, 'x1lliihq')]"
  htmlChopper(xPath)
}

function addedANewPhotoToTheAlbumHomePage() {
  const xPath = "//span[text() = ' added a new photo to the album ']/ancestor::div[contains(@class, 'x1lliihq')]"
  htmlChopper(xPath)
} 

//Side bar options on the Home page (navigation) 
function autoClickSeeMoreSideBar() {
  const xPath = "//span[text() = 'See more']/ancestor::div[6]"
  htmlChopper(xPath)
}

function removeSeeLessSideBar() {
  const xPath = "//span[text() = 'See less']/ancestor::div[contains(@data-visualcompletion, 'ignore-dynamic')][1]"
  htmlChopper(xPath)
}

function findFriendsSideBar() {
  const xPath = "//span[text() = 'Find friends']/ancestor::li"
  htmlChopper(xPath)
}

function groupsSideBar() {
  const xPath = "//span[text() = 'Groups']/ancestor::li"
  htmlChopper(xPath)
}

function videoSideBar() {
  const xPath = "//span[text() = 'Video']/ancestor::li"
  htmlChopper(xPath)
}

function memoriesSideBar() {
  const xPath = "//span[text() = 'Memories']/ancestor::li"
  htmlChopper(xPath)
}

function gamingVideoSideBar() {
  const xPath = "//span[text() = 'Gaming video']/ancestor::li"
  htmlChopper(xPath)
}

function savedSideBar() {
  const xPath = "//span[text() = 'Saved']/ancestor::li"
  htmlChopper(xPath)
}

function eventsSideBar() {
  const xPath = "//span[text() = 'Events']/ancestor::li"
  htmlChopper(xPath)
}

function adsManagerSideBar() {
  const xPath = "//span[text() = 'Ads Manager']/ancestor::li"
  htmlChopper(xPath)
}

function bloodDonationsSideBar() {
  const xPath = "//span[text() = 'Blood Donations']/ancestor::li"
  htmlChopper(xPath)
}

function climateScienceCentreSideBar() {
  const xPath = "//span[text() = 'Climate Science Centre']/ancestor::li"
  htmlChopper(xPath) 
}

function fundraisersSideBar() {
  const xPath = "//span[text() = 'Fundraisers']/ancestor::li"
  htmlChopper(xPath) 
}

function marketplaceSideBar() {
  const xPath = "//span[text() = 'Marketplace']/ancestor::li"
  htmlChopper(xPath)
}

function messengerSideBar() {
  const xPath = "//span[text() = 'Messenger']/ancestor::li"
  htmlChopper(xPath) 
}

function messengerKidsSideBar() {
  const xPath = "//span[text() = 'Messenger Kids']/ancestor::li"
  htmlChopper(xPath) 
}

function metaQuest3SSideBar() {
  const xPath = "//span[text() = 'Meta Quest 3S']/ancestor::li"
  htmlChopper(xPath)
}

function ordersPaymentsSideBar() {
  const xPath = "//span[text() = 'Orders and payments']/ancestor::li"
  htmlChopper(xPath)
}

function pagesSideBar() {
  const xPath = "//span[text() = 'Pages']/ancestor::li"
  htmlChopper(xPath) 
}

function playGamesSideBar() {
  const xPath = "//span[text() = 'Play games']/ancestor::li"
  htmlChopper(xPath)
}

function recentAdActivitySideBar() {
  const xPath = "//span[text() = 'Recent ad activity']/ancestor::li"
  htmlChopper(xPath)
}

function birthdaysSideBar() {
  const xPath = "//span[text() = 'Birthdays']/ancestor::li"
  htmlChopper(xPath)
}

function reelsSideBar() {
  const xPath = "//span[text() = 'Reels']/ancestor::li"
  htmlChopper(xPath)  
}

function feedsSideBar() {
  const xPath = "//span[text() = 'Feeds']/ancestor::li"
  htmlChopper(xPath)  
}

//Friends Page
function pumkFriendsPage() {
    const xPath = "//span[text() = 'People you may know']/ancestor::div[9]"
    htmlChopper(xPath)  
}

//Groups Feed options
function suggestedPostsGroupsPage() {
  const xPath = "//span[text() = 'Suggested post from a public group']/ancestor::div[19]"
  const html = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (html != null) {
    html.remove()
  }
}

function suggestedForYouGroupsPage() {
  const xPath = "//span[text() = 'Suggested for you']/ancestor::div[17]"
  const html = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (html != null) {
    html.remove()
  }
}

function friendsGroupsGroupsPage() {
  const xPath = "//span[text() = \"Friends' groups\"]/ancestor::div[]"
  const html = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (html != null) {
    html.remove()
  }
}