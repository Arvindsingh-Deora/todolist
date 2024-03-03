"use client"
import React, { useState,  } from 'react'




const page = () => {
  const [title , settitle] = useState(" ")
  const [des , setdes] = useState(" ")
  const [maintask , setmaintask] = useState([]);

  const submitHandler = (e) =>{
    e.preventDefault()
    setmaintask([...maintask ,{title,des}]);
    console.log(title)
    console.log(des)
    console.log(maintask);
    settitle("")
    setdes("")
  }
      const deletehandler = (i)=>{
       let copytask = [...maintask]
       copytask.splice(i,1)
       setmaintask(copytask)

     }
        
     const updateHandler = (i) => {
      settitle(maintask[i].title);
      setdes(maintask[i].des);
      setmaintask((renderTask) =>
        prevTasks.map((task, index) =>
          index === i ? { ...task, title, des } : task
        )
      );
    };

    
  
    let renderTask = <h2>No task avaliable</h2>;

  if(maintask.length > 0){
     renderTask = maintask.map((t,i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-8'>
          <div className='flex justify-between mp-5 w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-2xl font-semibold'>{t.des}</h6>

          </div>
          <button  onClick={()=>{
             deletehandler(i)
          }} className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>


           <button onclick ={()=>{
              updateHandler(i)
           }} className='bg-red-400 text-white px-4 py-2 '>Update</button>








        </li>
      );
    });

  }
  return (
    <>
     <h1 className='bg-black
        text-white p-5  '>
       Arvind todo List
     </h1>
       <form onSubmit={submitHandler}>
         <input type = "text" className='text-2xl border border-zinc-800 m-8 px-4 py-5'
            placeholder='Enter your Task ' 
            value = {title} 
            onChange = {(e) =>{
              settitle(e.target.value)

            }
            
            
            } >
            
            
          
         
         </input> 

         <input type = "text" className='text-2xl border border-zinc-800 m-8 px-4 py-5 '
               color='red'placeholder = " Enter your description" 
                 value ={des}
                 onChange = {(e)=>{
                   setdes(e.target.value)

                 }
                
                
                }
               ></input>

                <button 
                 
               className= 'bg-black text-white font-bold rounded m-8 px-4 py-5'
                   > Add more task </button>
       </form>

      <hr />
       <div className="p-8 bg-slate-200">
        <ul>
          {renderTask}
        </ul>
       </div>





       
    
    </>
    
  );
}

export default page
