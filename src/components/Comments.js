import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck ,faCircleUser} from '@fortawesome/free-regular-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { setCommentarr } from '../utils/CommentstateSlice';


const Comments = () => {
    const [comment,setComment]=useState('');
    const arr=useSelector(store=>store.commentstate.commentarr)
    const dispatch=useDispatch();
    let username=["Sachin","Ankit","Priyanka","Ajit","Keshav"]

   const addComment=()=>{
      dispatch(setCommentarr(comment))
      setComment('')
      
   }

  return (
    <div className='my-2'>
        <p className='font-bold '>Comments</p>
        {
            arr.map((item)=>{
                
                    const user=Math.floor(Math.random()*5);

                
                return <p className='p-2'>
                    
                    <FontAwesomeIcon icon={faCircleUser} /><span className='mx-2 font-bold'>{username[user]}</span>
                    <FontAwesomeIcon icon={faCircleCheck} color='blue' className='mx-2'/>
                    {item}
                    </p>
            })
        }
        <div className='w-full my-3 border-2 rounded-lg'>
        <input type="text" placeholder='Add a comment....' value={comment} onChange={(e)=>setComment(e.target.value)} className='w-[80%]'/>
        <button onClick={addComment} className='border-l-2 pl-4'>Send</button>
        </div>
        
    </div>
  )
}

export default Comments