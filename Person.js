// function Person(props) {
//     let voteText = props.age >= 18 ? "Please go vote!" : "You must be 18";

//     let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);

//     return (
//       <div>
//         <p>Learn some information about this person:</p>
//         <ul>
//           <li>Name: {props.name.slice(0, 6)}</li>
//           <li>Age: {props.age}</li>
//           <ul>
//             Hobbies
//             {hobbies}
//           </ul>
//         </ul>
//         <h3>{voteText}</h3>
//       </div>
//     );
//   }


const Person = (props) => {
    let reply;
    if (props.age < 18) {
        reply = "You must be 18"
    } else if (props.age > 18)
        reply = "Please Go Vote!"
    return (
        <div div >
            <b>
                Learn some information about this person
            </b>
            <p>
                <b>Person:</b> How old are you?
            </p>
            <p>
                <b>You:</b> I am {props.age} years old
            </p>
            <p>
                <b>Person:</b> {reply}
            </p>
        </div >
    )
}
