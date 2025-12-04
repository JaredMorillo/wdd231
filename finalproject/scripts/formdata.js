const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('nickname'));
console.log(myInfo.get('email'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('position'));
console.log(myInfo.get('comment'));



//build the message
document.querySelector('#results').innerHTML = `
    <p>Application submission from ${myInfo.get('first')} ${myInfo.get('last')}</p>
    <p>The ${myInfo.get('nickname')} and ${myInfo.get('position')} position</p>
    <p><p> Phone: ${myInfo.get('phone')} </p>
    <p>Email: ${myInfo.get('email')}</p>
    <p>Comment: ${myInfo.get('comment')}</p>`

