import React, {useState} from 'react'
import './SAPost.css'

export default function SAPost() {
  const [data,setData]=useState();
  console.log(data)
  return (
    <div>
              <div className="main1">
            <div className="uploadimage">
                <label htmlFor="imgs" >Upload</label>
            </div>
            <input id="imgs" type="file" accept="image/png, image/jpeg,.txt,.doc" onChange={(e)=>setData(e.target.files)} />
        </div>
    </div>
  )
}
