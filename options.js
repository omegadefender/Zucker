const saveButton = document.getElementById('save')

function save_options() {
  //Banner options
  const reelsBanner = document.getElementById('reelsBanner').checked
  //Hompage - news feed options
  const sponsoredAdsHomePage = document.getElementById('sponsoredAdsSiteWide').checked
  const pumkHomePage = document.getElementById('pumkSiteWide').checked
  const joinHomePage = document.getElementById('joinHomePage').checked
  const storiesHomePage = document.getElementById('storiesHomePage').checked
  const reelsAndShortVideosHomePage = document.getElementById('reelsAndShortVideosHomePage').checked    
  const suggestedForYouHomePage = document.getElementById('suggestedForYouHomePage').checked    
  const followHomePage = document.getElementById('followHomePage').checked
  const paidPartnershipHomePage = document.getElementById('paidPartnershipHomePage').checked
  const videoPlaylistHomePage = document.getElementById('videoPlaylistHomePage').checked
  const isInHomePage = document.getElementById('isInHomePage').checked
  const isAtHomePage = document.getElementById('isAtHomePage').checked
  const andHomePage = document.getElementById('andHomePage').checked  
  const albumHomePage = document.getElementById('albumHomePage').checked
  const addedANewPhotoToTheAlbumHomePage = document.getElementById('addedANewPhotoToTheAlbumHomePage').checked
  //Side bar options on the Home page (navigation) 
  const autoClickSeeMoreSideBar = document.getElementById('autoClickSeeMoreSideBar').checked
  const removeSeeLessSideBar = document.getElementById('removeSeeLessSideBar').checked
  const findFriendsSideBar = document.getElementById('findFriendsSideBar').checked
  const groupsSideBar = document.getElementById('groupsSideBar').checked
  const videoSideBar = document.getElementById('videoSideBar').checked  
  const memoriesSideBar = document.getElementById('memoriesSideBar').checked
  const gamingVideoSideBar = document.getElementById('gamingVideoSideBar').checked
  const savedSideBar = document.getElementById('savedSideBar').checked
  const eventsSideBar = document.getElementById('eventsSideBar').checked
  const adsManagerSideBar = document.getElementById('adsManagerSideBar').checked
  const bloodDonationsSideBar = document.getElementById('bloodDonationsSideBar').checked
  const climateScienceCentreSideBar = document.getElementById('climateScienceCentreSideBar').checked
  const fundraisersSideBar = document.getElementById('fundraisersSideBar').checked
  const marketplaceSideBar = document.getElementById('marketplaceSideBar').checked
  const messengerSideBar = document.getElementById('messengerSideBar').checked
  const messengerKidsSideBar = document.getElementById('messengerKidsSideBar').checked
  const metaQuest3SSideBar = document.getElementById('metaQuest3SSideBar').checked
  const ordersPaymentsSideBar = document.getElementById('ordersPaymentsSideBar').checked
  const pagesSideBar = document.getElementById('pagesSideBar').checked
  const playGamesSideBar = document.getElementById('playGamesSideBar').checked
  const recentAdActivitySideBar = document.getElementById('recentAdActivitySideBar').checked
  const birthdaysSideBar = document.getElementById('birthdaysSideBar').checked
  const reelsSideBar = document.getElementById('reelsSideBar').checked
  const feedsSideBar = document.getElementById('feedsSideBar').checked
  //Friends Page
  const pumkFriendsPage = document.getElementById('pumkSiteWide').checked
  //Groups Page
  const suggestedPostsGroupsPage = document.getElementById('suggestedPostsGroupsPage').checked
  const suggestedForYouGroupsPage = document.getElementById('suggestedForYouGroupsPage').checked
  const friendsGroupsGroupsPage = document.getElementById('friendsGroupsGroupsPage').checked

  chrome.storage.sync.set({
    //Banner options
    reelsBanner: reelsBanner,
    //Hompage - news feed options
    sponsoredAdsHomePage: sponsoredAdsHomePage,
    pumkHomePage: pumkHomePage,
    joinHomePage: joinHomePage,
    storiesHomePage: storiesHomePage,
    reelsAndShortVideosHomePage: reelsAndShortVideosHomePage,
    suggestedForYouHomePage: suggestedForYouHomePage,        
    followHomePage: followHomePage,
    paidPartnershipHomePage: paidPartnershipHomePage,
    videoPlaylistHomePage: videoPlaylistHomePage,
    isInHomePage: isInHomePage,
    isAtHomePage: isAtHomePage,
    andHomePage: andHomePage,
    albumHomePage: albumHomePage,
    addedANewPhotoToTheAlbumHomePage: addedANewPhotoToTheAlbumHomePage,
    //Side bar options on the Home page (navigation) 
    autoClickSeeMoreSideBar: autoClickSeeMoreSideBar,
    removeSeeLessSideBar: removeSeeLessSideBar,
    findFriendsSideBar: findFriendsSideBar,
    groupsSideBar: groupsSideBar,
    videoSideBar: videoSideBar,    
    memoriesSideBar: memoriesSideBar,
    gamingVideoSideBar: gamingVideoSideBar,
    savedSideBar: savedSideBar,
    eventsSideBar: eventsSideBar,
    adsManagerSideBar: adsManagerSideBar,
    bloodDonationsSideBar: bloodDonationsSideBar,
    climateScienceCentreSideBar: climateScienceCentreSideBar,
    fundraisersSideBar: fundraisersSideBar,
    marketplaceSideBar: marketplaceSideBar,
    messengerSideBar: messengerSideBar,
    messengerKidsSideBar: messengerKidsSideBar,
    metaQuest3SSideBar: metaQuest3SSideBar,
    ordersPaymentsSideBar: ordersPaymentsSideBar,
    pagesSideBar: pagesSideBar,
    playGamesSideBar: playGamesSideBar,
    recentAdActivitySideBar: recentAdActivitySideBar,
    birthdaysSideBar: birthdaysSideBar,
    reelsSideBar: reelsSideBar,
    feedsSideBar: feedsSideBar,
    //Friends Page
    pumkFriendsPage: pumkFriendsPage,
    //Groups Page
    suggestedPostsGroupsPage: suggestedPostsGroupsPage,
    suggestedForYouGroupsPage: suggestedForYouGroupsPage,
    friendsGroupsGroupsPage: friendsGroupsGroupsPage    
  }, function() {
    const status = document.getElementById('status')
    status.style.visibility = 'visible'
    setTimeout(function() {
      status.style.visibility = 'hidden'
    }, 10000);
  });
}
  
function restore_options() {
  chrome.storage.sync.get({
    //Banner Options
    reelsBanner: false,
    //Hompage - news feed options
    sponsoredAdsHomePage: true,
    pumkHomePage: false,
    joinHomePage: true,
    storiesHomePage: false,
    reelsAndShortVideosHomePage: false,      
    suggestedForYouHomePage: false,        
    followHomePage: false,
    paidPartnershipHomePage: false,
    videoPlaylistHomePage: false,
    isInHomePage: false,
    isAtHomePage: false,
    andHomePage: false,
    albumHomePage: false,
    addedANewPhotoToTheAlbumHomePage: false,
    //Side bar options on the Home page (navigation)     
    autoClickSeeMoreSideBar: false,
    removeSeeLessSideBar: false,
    findFriendsSideBar: false,
    groupsSideBar: false,
    videoSideBar: false,    
    memoriesSideBar: false,
    gamingVideoSideBar: false,
    savedSideBar: false,
    eventsSideBar: false,
    adsManagerSideBar: false,
    bloodDonationsSideBar: false,
    climateScienceCentreSideBar: false,
    fundraisersSideBar: false,
    marketplaceSideBar: false,
    messengerSideBar: false,
    messengerKidsSideBar: false,
    ordersPaymentsSideBar: false,
    pagesSideBar: false,
    playGamesSideBar: false,
    recentAdActivitySideBar: false,
    metaQuest3SSideBar: false,
    birthdaysSideBar: false,
    reelsSideBar: false,
    feedsSideBar: false,
    //Friends Page
    pumkFriendsPage: false,
    //Groups Page
    suggestedPostsGroupsPage: false,
    suggestedForYouGroupsPage: false,
    friendsGroupsGroupsPage: false    
}, function(items) {
    //banner options
    document.getElementById('reelsBanner').checked = items.reelsBanner
    //Hompage - news feed options
    document.getElementById('sponsoredAdsSiteWide').checked = items.sponsoredAdsHomePage
    document.getElementById('pumkSiteWide').checked = items.pumkHomePage || items.pumkFriendsPage
    document.getElementById('joinHomePage').checked = items.joinHomePage
    document.getElementById('storiesHomePage').checked = items.storiesHomePage
    document.getElementById('reelsAndShortVideosHomePage').checked = items.reelsAndShortVideosHomePage        
    document.getElementById('suggestedForYouHomePage').checked = items.suggestedForYouHomePage    
    document.getElementById('followHomePage').checked = items.followHomePage
    document.getElementById('paidPartnershipHomePage').checked = items.paidPartnershipHomePage    
    document.getElementById('videoPlaylistHomePage').checked = items.videoPlaylistHomePage
    document.getElementById('isInHomePage').checked = items.isInHomePage
    document.getElementById('isAtHomePage').checked = items.isAtHomePage
    document.getElementById('andHomePage').checked = items.andHomePage
    document.getElementById('albumHomePage').checked = items.albumHomePage
    document.getElementById('addedANewPhotoToTheAlbumHomePage').checked = items.addedANewPhotoToTheAlbumHomePage
    //Side bar options on the Home page (navigation) 
    document.getElementById('autoClickSeeMoreSideBar').checked = items.autoClickSeeMoreSideBar
    document.getElementById('removeSeeLessSideBar').checked = items.removeSeeLessSideBar
    document.getElementById('findFriendsSideBar').checked = items.findFriendsSideBar
    document.getElementById('groupsSideBar').checked = items.groupsSideBar
    document.getElementById('videoSideBar').checked = items.videoSideBar    
    document.getElementById('memoriesSideBar').checked = items.memoriesSideBar
    document.getElementById('gamingVideoSideBar').checked = items.gamingVideoSideBar
    document.getElementById('savedSideBar').checked = items.savedSideBar
    document.getElementById('eventsSideBar').checked = items.eventsSideBar
    document.getElementById('adsManagerSideBar').checked = items.adsManagerSideBar
    document.getElementById('bloodDonationsSideBar').checked = items.bloodDonationsSideBar
    document.getElementById('climateScienceCentreSideBar').checked = items.climateScienceCentreSideBar
    document.getElementById('fundraisersSideBar').checked = items.fundraisersSideBar
    document.getElementById('marketplaceSideBar').checked = items.marketplaceSideBar
    document.getElementById('messengerSideBar').checked = items.messengerSideBar
    document.getElementById('messengerKidsSideBar').checked = items.messengerKidsSideBar
    document.getElementById('metaQuest3SSideBar').checked = items.metaQuest3SSideBar
    document.getElementById('ordersPaymentsSideBar').checked = items.ordersPaymentsSideBar
    document.getElementById('pagesSideBar').checked = items.pagesSideBar
    document.getElementById('playGamesSideBar').checked = items.playGamesSideBar
    document.getElementById('recentAdActivitySideBar').checked = items.recentAdActivitySideBar
    document.getElementById('birthdaysSideBar').checked = items.birthdaysSideBar
    document.getElementById('reelsSideBar').checked = items.reelsSideBar 
    document.getElementById('feedsSideBar').checked = items.feedsSideBar
    //Groups Page
    document.getElementById('suggestedPostsGroupsPage').checked = items.suggestedPostsGroupsPage
    document.getElementById('suggestedForYouGroupsPage').checked = items.suggestedForYouGroupsPage
    document.getElementById('friendsGroupsGroupsPage').checked = items.friendsGroupsGroupsPage             
  });
}
  
document.addEventListener('DOMContentLoaded', restore_options)
saveButton.addEventListener('click', save_options)