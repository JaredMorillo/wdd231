//use dom content loaded to delay the script until all the HTML has been loaded.
document. addEventListener ('DOMContentLoaded', () => {


const cards = document.querySelector('#members');

const path = './data/games.json';

//function to fetch data
async function getMembers() {
  try {
      const response = await fetch(path);
      const data = await response.json();
      console.log(data.members);
      displayMembers(data.members);
  } catch (error) {
      console.error('Error fetching members:', error);
  }
}
getMembers();



const displayMembers = (allMembers) => {
  allMembers.forEach((member) => {
    const myGame = document.createElement('h2')
    myGame.textContent= member.game;
    const myAuthor = document.createElement('p')
    myAuthor.textContent = member.author
    const myURL = document.createElement('p')
    myURL.innerHTML = `<a href="${member.url}" target="_blank">Website</a>`
    const myLogo = document.createElement('img')
    myLogo.src=`./images/${member.logopath}`
    myLogo.setAttribute('loading', 'lazy')
    myLogo.setAttribute('width', '300')
    myLogo.setAttribute('height', '200')
    myLogo.setAttribute('alt', `${member.name}`)
    const myLevel = document.createElement('p')
    switch(member.level) {
      case 2:
        myLevel.textContent="Level = Silver"
        break;
        case 3:
          myLevel.textContent="Level = Gold"
        break;
      default:
        myLevel.textContent="Level is Exclusive"
    }
    
    const mySection = document.createElement('section')
    mySection.appendChild(myLogo)
    mySection.appendChild(myGame)
    mySection.appendChild(myAuthor)
    mySection.appendChild(myURL)
    mySection.appendChild(myLevel)
    cards.appendChild(mySection)
  });
}

const setGrid = document.querySelector('#btnGrid')
const setList = document.querySelector('#btnList')
setGrid.addEventListener('click',() => {
  setGrid.className="active"
  setList.className=""
  cards.className='grid'
})
setList.addEventListener('click',() => {
  setList.className="active"
  setGrid.className=""
  cards.className='list'
})

}) // end Content Loader