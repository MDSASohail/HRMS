import {Route,Routes,Link,Outlet} from 'react-router-dom'
import img2 from '../Images/sohail.png'
import shruti from '../Images/shruti.jpeg'
import taba from '../Images/tabassum.jpeg'
import jubair from '../Images/jubair.jpeg'
import bushra from '../Images/bushra.jpeg'
import logo from '../Images/img2.png'
function MemberPage() {

  const hrms=['H','U','M','A','N',' ','R','E','S','O','U','R','C','E',' ','M','A','N','A','G','E','M','E','N','T',' ','S','Y','S','T','E','M'];
  const msgforMem=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel corporis ullam voluptates, atque eligendi maxime cum ipsam, ad suscipit quos earum, ea officiis dolor! Laudantium eveniet facere earum? Odio tenetur quis at temporibus laboriosam asperiores minus doloremque vel dignissimos aperiam."
  const data=[
    {img:img2,name:"Md. Sohail Ansari",roll:211720200026,regi:16202039948,msg:msgforMem},
    {img:shruti,name:"Shruti",roll:211720200026,regi:16202039948,msg:msgforMem},
    {img:jubair,name:"Jubair",roll:211720200026,regi:16202039948,msg:msgforMem},
    {img:bushra,name:"Bushra",roll:211720200026,regi:16202039948,msg:msgforMem},
    {img:taba,name:"Tabassum",roll:211720200026,regi:16202039948,msg:msgforMem},

  ]

  const smallPhoto=[
    {path:'/sohail',img:img2},
    {path:'/shruti',img:shruti},
    {path:'/jubair',img:jubair},
    {path:'/bushra',img:bushra},
    {path:'/tabassum',img:taba}

  ]
  
  return (
    <>
       <div>
            
            <div id="imgDiv" className='  '>
                  <div className='w-60 text-center  mx-auto mt-10'>
                  <img src={logo} alt="" />
                  </div>
                  <div className='mt-10 text-center font-bold heading hide text-blue-600'>
                    <p className='smallDevice'>MAULANA MAZHARUL HAQUE ARABIC AND PERSIAN UNIVERSITY</p>
                  </div>
                  <div>
                    <p className='text-2xl text-center font-bold  my-2 text-white rounded-md'><marquee behavior="scroll" direction="left">Z.A Islamia College of Technology And Management</marquee></p>
                  </div>
                  <div className='mt-8 text-xl font-bold text-center'>
                    <p>A Project On</p>
                  </div> 
                  <div className='mt-8 text-center smallDevice'>
                      {hrms.map(item=>{
                        return <span className='hrms'>{item}</span>
                      })}
                  </div>
                  <div className='mt-8 mb-8 text-xl font-bold text-center'>
                    All Team Members
                  </div>
                  <div id="photpDiv" className='flex flex-wrap justify-center'>
                     
                     {
                        smallPhoto.map((item)=>{
                            return(
                                <>
                                    <div className='w-40  m-4 border-2 rounded-full photo-color overflow-hidden'>
                                           <Link to={`/home/member${item.path}`}>
                                               <img src={item.img} alt=""className='cursor-pointer'/>
                                             </Link>
                                      </div>
                                </>
                            )
                        })
                     }
                     
                  </div>
                  <div id="showDetail">
                    
                           <Routes>
                               <Route path='/sohail' element={<EachMember data={data[0]}/>}></Route>
                               <Route path='/shruti' element={<EachMember data={data[1]}/>}></Route>
                               <Route path='/bushra' element={<EachMember data={data[3]}/>}></Route>
                               <Route path='/jubair' element={<EachMember data={data[2]}/>}></Route>
                               <Route path='/tabassum' element={<EachMember data={data[4]}/>}></Route>
                           </Routes>
                  </div>
                  <footer className='h-60 text-blue-600  flex justify-center items-center'>
                    <div>
                         <h1 className='text-2xl font-bold mb-2'>With Love From All Members</h1>
                         <p className='text-2xl mb-2'><strong>Course : </strong> BCA</p>
                         <p className='text-2xl mb-2'><strong>Session : </strong> 2020-2023</p>
                    </div>
                  </footer>
                 

            </div>
           
       </div>
    </>
  )
}


function EachMember({data})
{
    const item=data;
    return(
        <>
            <div  className=' mb-20 flex mx-20 items-center p-3  ' id='memberDiv'>
                            <div id='memberImgDiv' className='  flex-1  '>
                              <img id='memberImg' src={item.img} alt="Img" className='w-full h-full cover mx-auto'/>
                            </div>
                            <div className='flex-1  pl-8 mt-8 memberDetailDiv' >
                                 <p className='text-xl'><strong>Name : </strong> <span>{item.name}</span></p>
                                 <p className='text-xl'><strong>University Roll No. : </strong> <span>{item.roll}</span></p>
                                 <p className='text-xl'><strong>Registration No. : </strong> <span>{item.regi}</span></p>
                                 <p className='mt-4'><strong>Message : </strong>{item.msg}</p>
                            </div>
                         </div>
        </>
    )
}

export default MemberPage
