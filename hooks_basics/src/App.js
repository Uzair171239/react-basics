import React from "react";
import Accordion from "./components/Accordion";

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

class App extends React.Component{
    render(){
        return (
             <div><Accordion items={item} /></div>
        );
    }
}

export default App;