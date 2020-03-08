import React from 'react';
import Header from './components/Header'
import './App.css';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Footer from './components/Footer';
const paragraphe = ["We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.","We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."]
const paragraphe1=[{background:"rgb(0, 204, 177)", h5:"For patients", p: "Find a doctor, book a visit and solve any health-related doubt", img:"https://www.docplanner.com/img/screen-marketplace@2x.png"},{background:"rgb(61, 131, 223)", h5:"For doctors", p: "Save time managing visits and cut no-shows by half", img:"https://www.docplanner.com/img/screen-saas@2x.png"}]
const paragraphe2=[{image:"https://www.docplanner.com/img/flag.png",title:"Leader in 10 countries",p:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"},{image:"https://www.docplanner.com/img/visits.png",title:"1.5 million appointments",p:"booked last month"},{image:"https://www.docplanner.com/img/patients.png",title:"30 million unique patients",p:"visit us every month"},{image:"https://www.docplanner.com/img/doctors.png",title:"2 million active doctors",p:"trust in our solutions"}]
const paragraphe3=[{image:"https://www.docplanner.com/images/warsaw.png",title:"Warsaw",button:"See Openings"},
{image:"https://www.docplanner.com/images/barcelona.png",title:"Barcelona",button:"See Openings"},
{image:"https://www.docplanner.com/images/istanbul.png",title:"Istanbul",button:"See Openings"},
{image:"https://www.docplanner.com/images/rome.png",title:"Rome",button:"See Openings"},
{image:"https://www.docplanner.com/images/mexico-city.png",title:"Mexico City",button:"See Openings"},
{image:"https://www.docplanner.com/images/curitiba.png",title:"Curitiba",button:"See Openings"}]
function App() {
  return (
    <div className="App">
      <Header/>
      <Section1 tab={paragraphe} tab1={paragraphe1}/>
      <Section2/>
      <Section3 tab2={paragraphe2}/>
      <Section4 tab3={paragraphe3}/>
      <Footer/>
    </div>
  );
}
export default App;