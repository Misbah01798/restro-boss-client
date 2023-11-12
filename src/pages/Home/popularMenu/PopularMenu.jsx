import { useEffect, useState } from "react"
import SectionTitle from "../../../components/section/SectionTitle"
import MenuItem from "../../../shared/menuItem/MenuItem";
import useMenu from "../../../hooks/usemenu";


const PopularMenu = () => {
  const [menu]=useMenu();
  const popular =menu.filter(item => item.category === 'popular');
  // const [menu, setMenu] =useState([]);

  //   useEffect(()=>{
  //       fetch('menu.json')
  //       .then(res => res.json())
  //       .then(data =>{
  //         const popularItem =data.filter(item =>item.category ==='popular');
  //         setMenu(popularItem);
  //       })
  //   }, [])
  return (
    <section className="mb-12">
    <SectionTitle subHeader="From Our Menu" 
     header='Popular Items'>

    </SectionTitle>
    <div className="gap-10 grid md:grid-cols-2">
      {
        popular.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
      }
    </div>
      
    </section>
  )
}

export default PopularMenu
