let text = "i'm gaving up my heart to you, every time you looking at me"
let convert = text.split(" ")

let Resault = convert.map((props)=>{
    return props.charAt(0).toUpperCase() + props.slice(1);
})

console.log(Resault.join(' '));
