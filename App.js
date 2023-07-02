import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import data from "./data"
export default function App(){
    const cards = data.map(item =>{
        return (
            <Main 
                key = {item.id}
                {...item}
            />
        )
    })
    return (
        <div>
            <Header />

            <Footer />
            <section className="cards-list">
                {cards}
            </section>
        </div>
        
    )
}