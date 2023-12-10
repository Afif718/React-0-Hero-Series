
function Random(){

    let ranNum = Math.floor(Math.random() * 10 + 1);

    return <h2 style={{'background-color':'gray',
                        'color':'white'}}>Random number is {ranNum}</h2>
}

export default Random;