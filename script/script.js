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




const loadPhone = async(searchText)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);

}

const displayPhones = phones => {
    // console.log(phones);
    const phoneContainer = document.getElementById('phone-container');
    // CLEAR CONTAINER
    phoneContainer.textContent = '',
    // // show all

    showAll = document.getElementById('show-all-container');
    if(phones.length > 10){
        showAll.classList.remove('hidden');
    }
    else{
        showAll.classList.add('hidden');
    }
    // only show 10 phone
    // console.log(phones.length);
    phones = phones.slice(0,10);
    phones.forEach(phone =>{
        console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card bg-slate-400 shadow-xl ';
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
    });
    loadSpin(false);
}

// search
const handleSearch = () =>{
    loadSpin(true)
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhone(searchText);
    
}

const loadSpin = (isLoading) =>{
    const load = document.getElementById('spinner');
    // load.classList.remove('hidden')
    if(isLoading){
        load.classList.remove('hidden');
    }
    else{
        load.classList.add('hidden')
    }
}
// loadPhone();