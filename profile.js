const data=[
    {
        name:'aakriti',
        age: 20,
        location: 'miami Fl',
        gender: 'female',
        lookingfor: 'male',
       
        image:'https://randomuser.me/api/portraits/men/83.jpg'
    },

    {
        name:'anjan',
        age: 22,
        location: 'kathmandu',
        gender: 'female',
        lookingfor: 'male',
        image:'https://randomuser.me/api/portraits/women/84.jpg'
    },
    {
        name:'arun',
        age: 27,
        location: 'london',
        gender: 'male',
        lookingfor: 'female',
        image:'https://randomuser.me/api/portraits/women/83.jpg'
        }
];
const Profile= profileIterator(data);

document.getElementById('next').addEventListener('click',nextProfile);

function nextProfile(){
    const currentProfile= Profile.next().value;
    if(currentProfile!== undefined){
    document.getElementById('profileDisplay').innerHTMl=
    

    `
    <ul class= 'list-group'>
    <li class= 'list-group-item'>Name:${currentProfile.name}</li>
    <li class= 'list-group-item'>Age:${currentProfile.age}</li>
    <li class= 'list-group-item'>Location:${currentProfile.location}</li>
    <li class= 'list-group-item'>gender:${currentProfile.gender} and looking for: ${currentProfile.lookingfor}</li>

    </ul>
    `;
  
  

        document.getElementById('imageDisplay').innerHTMl=`
        <img src="${currentProfile.image}">;
        `;
        
    }
else{
    window.location.reload();
}
}
function profileIterator(profiles){

let nextIndex=0;

return {
next:function(){
    return nextIndex < profiles.length ?
    {
       value:profiles[nextIndex++] , done:false
    }:{done:true}
}
};

}


//destructing
// const name=['aakriti','anjan','aarun','hkjdd','jhsdja'];


// const[people1,people2,people3]=name;
// console.log(name);


//maps
// const map1= new Map(); 


// const key1='hello',
// key2 = {},
// key3= function(){};

// map1.set(key1,'tero bau');
// map1.set(key2,'hahahha');
// map1.set(key3,'chandramukhi');

// map1.forEach(function(value,key){
// console.log(`${key}=${value}`)
// });

// const map1 = new Map();


// const key1 = 'hello',
// key2= 100;



// map1.set=(key1, 'helo');
// map1.set=(key2, 45678);
// console.log(map1.size);



//sets


// const set1= new Set();



//  set1.add('hello');
// set1.add(100);
// set1.add(true);


//has function help to chpose from set1
// set1.has(100);
// console.log(set1);


//delete function help to delete from set1
// set1.delete(100);
// console.log(set1);


//foeEach
// set1.forEach((value)=>{


// console.log(value);

// })




//for loop
// for(let item of set1){

//     console.log(item);
// }