import React, {useState} from "react";
import Dropdown from "./components/Dropdown";
// import Search from "./components/Search";
// import Accordion from "./components/Accordion";

const item = [
    {
        title: 'What is react?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is favourite js library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'Youn use React by creating component'
    }
]

const option = [
    {
        label: "The color red",
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'The color blue',
        value: 'blue'
    }
];

export default () => {
    const [selected, setSelected] = useState(option[0]);
        return (
            //  <div><Accordion items={item} /></div>
            //  <div><Search /></div>
             <div><Dropdown 
                        selected={selected}
                        onSelectedChange={ setSelected } 
                        options={option} 
                        />
                        </div>
        );
    
}