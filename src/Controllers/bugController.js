import bugModel from '../Models/bugModel'

export function retrieveBugs(){
    let data = [];

    data.push(new bugModel({
        _id:2345678,
        name:"crash on load",
        details:"crashes after 3 seconds",
        steps:"Open application and it will crash",
        version:"v2.0",
        assigned:"Nick Rivera",
        creator: "Randy Ramerez",
        priority:1,
        time:"23.38",
    }))
    data.push(new bugModel({
        _id:2345679,
        name:"wont load",
        details:"crashes after 3 seconds",
        steps:"Open application and it will crash",
        version:"v2.0",
        assigned:"Nick Rivera",
        creator: "Randy Ramerez",
        priority:3,
        time:"23.20",
    }))

    let sorted = data.sort((a, b) =>{return a.property -b.property})
    return sorted;
}