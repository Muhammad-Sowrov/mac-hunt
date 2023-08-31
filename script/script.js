// const loadPhone = async() => {
//     const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
//     const data = await res.json();
//     const phones = data.data;
//     // console.log(phones);
//     displayPhones(phones);
// }
// const displayPhones = phones => {
//     // console.log(phones);
//     phones.forEach(phone =>{
//         console.log(phone);
//     })
// }

// loadPhone();




const loadPhone = async()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);

}

const displayPhones = phones => {
    // console.log(phones);
    const phoneContainer = document.getElementById('phone-container');
    phones.forEach(phone =>{
        console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card w-96 bg-slate-400 shadow-xl ';
        phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
                      <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center text-sky-950">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>${phone.slug}?</p>
            <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `
        phoneContainer.appendChild(phoneCard);
    })
}


loadPhone();