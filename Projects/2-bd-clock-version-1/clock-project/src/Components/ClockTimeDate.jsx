

const ClockTimeDate = () =>{

    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() +1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let scs = date.getSeconds();
    let amOrPM = hours >=12? "PM": "AM";
  
    hours = (hours%12) || 12;
  
    let customDate =  `${day}/${month}/${year}`
  
  
  let customTime = `${hours}:${mins}:${scs} ${amOrPM}`;

    return <p className="lead">The current time: {customDate} - {customTime}</p>;
        

}

export default ClockTimeDate;