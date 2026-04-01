const saveButton = document.getElementById('save')

function save_options() {
  //Banner options
  const reelsBanner = document.getElementById('reelsBanner').checked
  //Site options
  const pumkSiteWide = document.getElementById('pumkSiteWide').checked
  //Hompage - news feed options
  const sponsoredAdsHomePage = document.getElementById('sponsoredAdsSiteWide').checked
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
  const autoClickSeeMoreHomePage = document.getElementById('autoClickSeeMoreHomePage').checked
  const removeSeeLessHomePage = document.getElementById('removeSeeLessHomePage').checked
  const groupsHomePage = document.getElementById('groupsHomePage').checked
  const videoHomePage = document.getElementById('videoHomePage').checked  
  const findFriendsHomePage = document.getElementById('findFriendsHomePage').checked
  const memoriesHomePage = document.getElementById('memoriesHomePage').checked
  const gamingVideoHomePage = document.getElementById('gamingVideoHomePage').checked
  const savedHomePage = document.getElementById('savedHomePage').checked
  const eventsHomePage = document.getElementById('eventsHomePage').checked
  const adsManagerHomePage = document.getElementById('adsManagerHomePage').checked
  const bloodDonationsHomePage = document.getElementById('bloodDonationsHomePage').checked
  const climateScienceCentreHomePage = document.getElementById('climateScienceCentreHomePage').checked
  const fundraisersHomePage = document.getElementById('fundraisersHomePage').checked
  const marketplaceHomePage = document.getElementById('marketplaceHomePage').checked
  const messengerHomePage = document.getElementById('messengerHomePage').checked
  const messengerKidsHomePage = document.getElementById('messengerKidsHomePage').checked
  const metaQuest3SHomePage = document.getElementById('metaQuest3SHomePage').checked
  const ordersPaymentsHomePage = document.getElementById('ordersPaymentsHomePage').checked
  const pagesHomePage = document.getElementById('pagesHomePage').checked
  const playGamesHomePage = document.getElementById('playGamesHomePage').checked
  const recentAdActivityHomePage = document.getElementById('recentAdActivityHomePage').checked
  const suggestedPostsGroupsPage = document.getElementById('suggestedPostsGroupsPage').checked
  const suggestedForYouGroupsPage = document.getElementById('suggestedForYouGroupsPage').checked
  const friendsGroupsGroupsPage = document.getElementById('friendsGroupsGroupsPage').checked
  const birthdaysHomePage = document.getElementById('birthdaysHomePage').checked
  const reelsHomePage = document.getElementById('reelsHomePage').checked
  const feedsHomePage = document.getElementById('feedsHomePage').checked

  chrome.storage.sync.set({
    //Banner options
    reelsBanner: reelsBanner,
    //Site options
    pumkSiteWide: pumkSiteWide,
    //Hompage - news feed options
    sponsoredAdsHomePage: sponsoredAdsHomePage,
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
    autoClickSeeMoreHomePage: autoClickSeeMoreHomePage,
    removeSeeLessHomePage: removeSeeLessHomePage,
    groupsHomePage: groupsHomePage,
    videoHomePage: videoHomePage,
    findFriendsHomePage: findFriendsHomePage,
    memoriesHomePage: memoriesHomePage,
    gamingVideoHomePage: gamingVideoHomePage,
    savedHomePage: savedHomePage,
    eventsHomePage: eventsHomePage,
    adsManagerHomePage: adsManagerHomePage,
    bloodDonationsHomePage: bloodDonationsHomePage,
    climateScienceCentreHomePage: climateScienceCentreHomePage,
    fundraisersHomePage: fundraisersHomePage,
    marketplaceHomePage: marketplaceHomePage,
    messengerHomePage: messengerHomePage,
    messengerKidsHomePage: messengerKidsHomePage,
    metaQuest3SHomePage: metaQuest3SHomePage,
    ordersPaymentsHomePage: ordersPaymentsHomePage,
    pagesHomePage: pagesHomePage,
    playGamesHomePage: playGamesHomePage,
    recentAdActivityHomePage: recentAdActivityHomePage,
    suggestedPostsGroupsPage: suggestedPostsGroupsPage,
    suggestedForYouGroupsPage: suggestedForYouGroupsPage,
    friendsGroupsGroupsPage: friendsGroupsGroupsPage,
    birthdaysHomePage: birthdaysHomePage,
    reelsHomePage: reelsHomePage,
    feedsHomePage: feedsHomePage
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
    //Site options
    pumkSiteWide: false,
    //Hompage - news feed options
    sponsoredAdsHomePage: true,
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
    autoClickSeeMoreHomePage: false,
    removeSeeLessHomePage: false,
    groupsHomePage: false,
    videoHomePage: false,
    findFriendsHomePage: false,
    memoriesHomePage: false,
    gamingVideoHomePage: false,
    savedHomePage: false,
    eventsHomePage: false,
    adsManagerHomePage: false,
    bloodDonationsHomePage: false,
    climateScienceCentreHomePage: false,
    fundraisersHomePage: false,
    marketplaceHomePage: false,
    messengerHomePage: false,
    messengerKidsHomePage: false,
    ordersPaymentsHomePage: false,
    pagesHomePage: false,
    playGamesHomePage: false,
    recentAdActivityHomePage: false,
    suggestedPostsGroupsPage: false,
    suggestedForYouGroupsPage: false,
    friendsGroupsGroupsPage: false,
    metaQuest3SHomePage: false,
    birthdaysHomePage: false,
    reelsHomePage: false,
    feedsHomePage: false
}, function(items) {
    //banner options
    document.getElementById('reelsBanner').checked = items.reelsBanner
    //Site options  
    document.getElementById('pumkSiteWide').checked = items.pumkSiteWide
    //Hompage - news feed options
    document.getElementById('sponsoredAdsSiteWide').checked = items.sponsoredAdsHomePage
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
    document.getElementById('autoClickSeeMoreHomePage').checked = items.autoClickSeeMoreHomePage
    document.getElementById('removeSeeLessHomePage').checked = items.removeSeeLessHomePage
    document.getElementById('groupsHomePage').checked = items.groupsHomePage
    document.getElementById('videoHomePage').checked = items.videoHomePage
    document.getElementById('findFriendsHomePage').checked = items.findFriendsHomePage
    document.getElementById('memoriesHomePage').checked = items.memoriesHomePage
    document.getElementById('gamingVideoHomePage').checked = items.gamingVideoHomePage
    document.getElementById('savedHomePage').checked = items.savedHomePage
    document.getElementById('eventsHomePage').checked = items.eventsHomePage
    document.getElementById('adsManagerHomePage').checked = items.adsManagerHomePage
    document.getElementById('bloodDonationsHomePage').checked = items.bloodDonationsHomePage
    document.getElementById('climateScienceCentreHomePage').checked = items.climateScienceCentreHomePage
    document.getElementById('fundraisersHomePage').checked = items.fundraisersHomePage
    document.getElementById('marketplaceHomePage').checked = items.marketplaceHomePage
    document.getElementById('messengerHomePage').checked = items.messengerHomePage
    document.getElementById('messengerKidsHomePage').checked = items.messengerKidsHomePage
    document.getElementById('metaQuest3SHomePage').checked = items.metaQuest3SHomePage
    document.getElementById('ordersPaymentsHomePage').checked = items.ordersPaymentsHomePage
    document.getElementById('pagesHomePage').checked = items.pagesHomePage
    document.getElementById('playGamesHomePage').checked = items.playGamesHomePage
    document.getElementById('recentAdActivityHomePage').checked = items.recentAdActivityHomePage
    document.getElementById('suggestedPostsGroupsPage').checked = items.suggestedPostsGroupsPage
    document.getElementById('suggestedForYouGroupsPage').checked = items.suggestedForYouGroupsPage
    document.getElementById('friendsGroupsGroupsPage').checked = items.friendsGroupsGroupsPage  
    document.getElementById('birthdaysHomePage').checked = items.birthdaysHomePage
    document.getElementById('reelsHomePage').checked = items.reelsHomePage 
    document.getElementById('feedsHomePage').checked = items.feedsHomePage            
  });
}
  
document.addEventListener('DOMContentLoaded', restore_options)
saveButton.addEventListener('click', save_options)