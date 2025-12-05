const mlModal = document.querySelector('#mlModal');
const closeModal = document.querySelector('#closeModal');
closeModal.addEventListener('click', () => mlModal.close());

const mltitle = document.querySelector('#mltitle');
const mldetails = document.querySelector('#mldetails');

// Modal 1 - not for profit
const ml1Btn = document.querySelector('#ml1Btn');
ml1Btn.addEventListener('click', () => {
    mltitle.innerHTML = "Non Profit Membership"
    mldetails.innerHTML = `<p>Benefits include:</p>
    <ul>
    <li>You'll have our invitations for our promotions and special events</li>
    <li>Get access to all our content</li>
    </ul>
    <p>COST: Free</p>
    `
    mlModal.showModal();
});

// Modal 2 - Exclusivve Membership
const ml2Btn = document.querySelector('#ml2Btn');
ml2Btn.addEventListener('click', () => {
    mltitle.innerHTML = "Exclusive Membership"
    mldetails.innerHTML = `<p>Benefits include:</p>
    <ul>
    <li>Discount tickets to all Board Games</li>
    <li>Free shipping and exclusive merchandise</li>
    <li>You'll get an exclusive stamp and pins</li>
    <li>You'll have our invitations for our promotions and special events</li>
    <li>Get access to all our content and get all new content with early access</li>
    <li>Access to exclusive content from our stores around the world</li>
    </ul>
    <p>COST: $40 annual</p>
    `
    mlModal.showModal();
});

// Modal 3 - Silver Membership
const ml3Btn = document.querySelector('#ml3Btn');
ml3Btn.addEventListener('click', () => {
    mltitle.innerHTML = "Silver Membership"
    mldetails.innerHTML = `<p>Benefits include:</p>
    <ul>
    <li>Discount tickets to all Board Games</li>
    <li>Access to exclusive content from our stores around the world</li>
    <li>You'll have our invitations for our promotions and special events</li>    
    </ul>
    <p>COST: $20 annual</p>
    `
    mlModal.showModal();
});

// Modal 4 - Gold Membership
const ml4Btn = document.querySelector('#ml4Btn');
ml4Btn.addEventListener('click', () => {
    mltitle.innerHTML = "Gold Membership"
    mldetails.innerHTML = `<p>Benefits include:</p>
    <ul>
    <li>Discount tickets to all Board Games</li>
    <li>You'll get an exclusive stamp and pins</li>
    <li>Access to exclusive content from our stores around the world</li>
    <li>You'll have our invitations for our promotions and special events</li> 
    <li>Get access to all our content and get all new content with early access</li>
    </ul>
    <p>COST: $30 annual</p>
    `
    mlModal.showModal();
});

//ADD A HIDDEN DATE
document.querySelector('#today').value = new Date();

