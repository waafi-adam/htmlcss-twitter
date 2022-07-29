// ============================================
// DATA OBJECTS AND ASSIGNMENTS
// ============================================
const navProfileContainer = document.querySelector('.nav-profile')
const tweetSection = document.querySelector('.bottom-section')
const coverPhotoContainer = document.querySelector('.cover-photo')
const profilePhotoContainer = document.querySelector('.profile-photo')
var users = {
  user1: {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL:
      'https://pbs.twimg.com/profile_images/1404334078388670466/DgO3WL4S_400x400.jpg',
    coverPhotoURL:
      'https://pbs.twimg.com/profile_images/1404334078388670466/DgO3WL4S_400x400.jpg',
    tweets: [
      {
        text: 'I admit to judging books by their cover',
        timestamp: '2/10/2021 00:01:20',
      },
      {
        text: 'Starship to the moon',
        timestamp: '2/09/2021 18:37:12',
      },
      {
        text: 'Out on launch pad, engine swap underway',
        timestamp: '2/09/2021 12:11:51',
      },
    ],
    suggestedUsers: [
      {
        userName: '@Tesla',
        displayName: 'Tesla',
        avatarURL:
          'https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_400x400.png',
      },
      {
        userName: '@NASA',
        displayName: 'NASA',
        avatarURL:
          'https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg',
      },
      {
        userName: '@KingJames',
        displayName: 'LeBron James',
        avatarURL:
          'https://pbs.twimg.com/profile_images/1010862750401253377/Rof4XuYC_400x400.jpg',
      },
    ],
  },
  user2: {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL:
      'https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg',
    coverPhotoURL:
      'https://pbs.twimg.com/profile_banners/50393960/1626063534/600x200',
    tweets: [
      {
        text: 'Everybody asks, how is the next Windows coming   along? But nobody asks how is Bill? :/',
        timestamp: '2/10/2021 00:01:20',
      },
      {
        text: 'Should I start tweeting memes? Let me know in a  comment.',
        timestamp: '2/09/2021 18:37:12',
      },
      {
        text: 'In 2020, I read a book every hour.',
        timestamp: '2/09/2021 12:11:51',
      },
    ],
    suggestedUsers: [
      {
        userName: '@Tesla',
        displayName: 'Tesla',
        avatarURL:
          'https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_400x400.png',
      },
      {
        userName: '@NASA',
        displayName: 'NASA',
        avatarURL:
          'https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg',
      },
      {
        userName: '@KingJames',
        displayName: 'LeBron James',
        avatarURL:
          'https://pbs.twimg.com/profile_images/1010862750401253377/Rof4XuYC_400x400.jpg',
      },
    ],
  },
}

// ============================================
// FUNCTIONS
// ============================================
// const urlParams = new URLSearchParams(window.location.search);
// console.log(urlParams)
// const myParam = urlParams.get('myParam');
// function getParameterByName(name, url = window.location.href) {
//     name = name.replace(/[\[\]]/g, '\\$&');
//     var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
//         results = regex.exec(url);
//     if (!results) return null;
//     if (!results[2]) return '';
//     return decodeURIComponent(results[2].replace(/\+/g, ' '));
// }
// var activeUser = getParameterByName('user');
// if (activeUser === null){activeUser = "user2"};

// var queryString = window.location.href;
// // console.log(queryString);
// var url = new URL(queryString)
// var activeUser = url.get('user')
// console.log(activeUser)

// const params = new URLSearchParams(window.location.search);
// activeUser = params.get('user');
// console.log(activeUser)
// if (activeUser === null){activeUser = "user2"};

function JavascriptgetURLParameterValues(parameterName, url) {
  if (!url) url = window.location.href
  parameterName = parameterName.replace(/[\[\]]/g, '\\><')
  var regularExpression = new RegExp(
      '[?&]' + parameterName + '(=([^&#]*)|&|#|$)'
    ),
    results = regularExpression.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}
var activeUser = JavascriptgetURLParameterValues('user')
if (activeUser === null) {
  activeUser = 'user2'
}

function buildNavProfile() {
  var navProfile = `<h1>${users[activeUser].displayName} <i class="fas fa-badge-check"></i> </h1>
        <p>${users[activeUser].tweets.length} Tweets</p>`
  navProfileContainer.innerHTML = navProfile
}

function buildProfileImages() {
  document.querySelector(
    '.cover-photo'
  ).style.backgroundImage = `url(${users[activeUser].coverPhotoURL})`
  document.querySelector(
    '.profile-photo'
  ).style.backgroundImage = `url(${users[activeUser].avatarURL})`
}

function buildProfileDetails() {
  const profileDetails = `<h1> ${users[activeUser].displayName} <i class="fas fa-badge-check"></i></h1>
                        <p>${users[activeUser].userName}</p>
                        <p><i class="far fa-calendar-alt"></i> Joined ${users[activeUser].joinedDate}</p>
                        <p><span class="bold">${users[activeUser].followerCount}</span> Following</p>
                        <p><span class="bold">${users[activeUser].followerCount}</span> Followers</p>`
  document.querySelector('.profile-details').innerHTML = profileDetails
}

function buildTweeter() {
  var tweetContainer = []
  for (tweet of users[activeUser].tweets) {
    tweetContainer.push(
      `<div class="tweet-container">
                <div class="tweet-profilePic" style="background-image:url(${users[activeUser].avatarURL})""></div>
                <div class="tweet-profileContent">
                    <div class="tweet-profile">
                        <h2>${users[activeUser].displayName} <iclass="fas fa-badge-check"></iclass=></h2>
                        <p>${users[activeUser].userName} . ${tweet.timestamp}</p>
                    </div>
                    <div class="tweet-content">
                        <p>${tweet.text}</p>
                    </div>
                </div>
            </div>`
    )
  }
  tweetSection.innerHTML = tweetContainer.join('')
}

function buildSuggestionSection() {
  var content = []
  console.log(users[activeUser].suggestedUsers)
  for (suggestedUser of users[activeUser].suggestedUsers) {
    content.push(
      `<div class="suggestedUser-container">
                <div class="suggestedUser-avatar"></div>
                <div class="suggestedUser-cotent>
                    <div>
                        <h2>${suggestedUser.displayName}</h2>
                        <p>${suggestedUser.userName}</p>
                    </div>
                    <button class="btn btn-follow">Follow</button>
                </div>
            </div>`
    )
  }
  document.querySelector('.users-container').innerHTML = content.join('')
}

// ============================================
// FUNCTION CALLS
// ============================================
buildNavProfile()
buildProfileImages()
buildProfileDetails()
buildTweeter()
buildSuggestionSection()
