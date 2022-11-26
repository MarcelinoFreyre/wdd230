let t = parseFloat(document.getElementById('temperature').textContent);
let s = parseFloat(document.getElementById('windChill').textContent);
let windchill = '';



console.dir(t)
console.dir(s)

if (t <= 50 && s < 3){
    windchill = windChill(t,s);
} else{
      windchill = 'N/A';
    
}

function windChill(t, s){
    {
      windchill = Math.round(35.74 + (0.6215 * t) - (35.75 * (Math.pow(s,0.16))) + (0.4275 * t * (Math.pow(s,0.16)))); 
      return windchill;
    }
}

document.querySelector('#windChill').innerHTML = ` ${windchill} &#8457;`;

// let f = 35.74 + 0.6215 * t - (35.75 * math.pow(s, 0.16)) + (0.4275 * t * math.pow(s, 0.16))

let c = document.getElementById('c')

// console.log(f)

// c.innerText = f