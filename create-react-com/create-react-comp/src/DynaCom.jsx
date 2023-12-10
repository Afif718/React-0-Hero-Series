function DynaCom(){

    let fName = "Afif";
    let lName = "Ahamed";

    let fullName = ()=> {
        return `My full Name is ${fName} ${lName}. `
    }
    return <h4>{fullName()}</h4>
}

export default DynaCom;