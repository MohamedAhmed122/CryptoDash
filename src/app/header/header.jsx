import React from 'react'
import './HeaderStyle.css'
export default function header() {
    return (
       <div className='wrapper'>
           <div className='bg' style={{backgroundImage: 'url("https://about.twitter.com/content/dam/about-twitter/company/brand-resources/en_us/OTB_Company_Blue.png.img.fullhd.medium.png")'}} /> 
           <div style={{display: 'flex'}}>
               <div className='link'>
                     <img className='img-profile' src='https://pyxis.nymag.com/v1/imgs/df7/03a/fadaaa0f5db5df1704c7097d5025161f86-rihanna.rsquare.w1200.jpg' alt='' />
               </div>
               <div className='merg'>
                   <div className='name'>
                      <p><span style={{fontSize: 15}}>Hosted by</span> Rihana</p>
               <div className='profile-state'>
                   <p>Party in make Love Pizza  </p>
               </div>
                   </div>
               </div>
           </div>
           <div>
               <div className='attendees'>
                   <img alt='' src='https://i.pinimg.com/originals/80/1e/70/801e70a79f7a71b1602969bc31cf99cd.jpg' />
                   <img alt='' src='https://i.pinimg.com/originals/80/1e/70/801e70a79f7a71b1602969bc31cf99cd.jpg' />
                   <img alt='' src='https://i.pinimg.com/originals/80/1e/70/801e70a79f7a71b1602969bc31cf99cd.jpg' />
               </div>
               <div className='description'>
                   <div className='des-text'>
                       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, a. Amet reprehenderit molestias fuga harum. Iste velit </p>
                   </div>
                   <div className='btn-group'>
                        <button>View</button>
                   </div>
               </div>
           </div>
       </div>
    )
}
