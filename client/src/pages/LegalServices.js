import React from 'react'
import { useState } from 'react'
import useFetch from '../components/hooks/useFetch';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

import "./ITservices.css"

const LegalServices = () => {

    const [selectedTrainer, setSelectedTrainer] = useState("");

    const {data, loading, error} = useFetch('http://localhost:8000/services');

    const handleTrainerChange = (e)=>{
        setSelectedTrainer(e.target.value);
    }

    const filteredServiceTile = data.map((item)=>{
        if(item.type==="Legal-Consultancy" && (selectedTrainer === "" || item.professional === selectedTrainer))
        return <div className="serviceContainer" key={item.id}>
                    <h2>{item.type}</h2>
                    <h1>{item.name}</h1>
                    <h3>{item.duration} hours</h3>
                    <h3>Trainer: {item.professional}</h3>
                    <p>Rating: {item.rating}</p>
                    <h3>{item.price} €</h3>
                </div>
    })  

    const deliverDropdown = ()=> {
        const doubleCons = data.map((item)=>{
            if(item.type==="Legal-Consultancy")
            return item.professional  
        })
        
        const singleCons = doubleCons.filter((x, i) => doubleCons.indexOf(x) === i);

        const dropdown = singleCons.map((item)=>{
            return <option>{item}</option>
        })

        return dropdown;
    }

  return (
    <div>
        <Navbar />
        <Header />
        <div className="servicesContainer">
        <div className="headline">Legal-Consultancy</div>
        <p>Select your Trainer</p>
        <select value={selectedTrainer} onChange={handleTrainerChange}>
            <option value="">All Trainers</option>
            {deliverDropdown()}
        </select>
            <div className="servicesBoxContainer">
                {filteredServiceTile}
            </div>
        </div>
    </div>
  )
}

export default LegalServices