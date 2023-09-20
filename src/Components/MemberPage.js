
import img2 from './Images/img2.png'
function MemberPage() {

  const hrms=['H','U','M','A','N',' ','R','E','S','O','U','R','C','E',' ','M','A','N','A','G','E','M','E','N','T',' ','S','Y','S','T','E','M'];

  const eachMember=[
    {img:img2,name:"Md. Sohail Ansari",roll:211720200026,regi:16202039948,msg:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel corporis ullam voluptates, atque eligendi maxime cum ipsam, ad suscipit quos earum, ea officiis dolor! Laudantium eveniet facere earum? Odio tenetur quis at temporibus laboriosam asperiores minus doloremque vel dignissimos aperiam."},
    {img:img2,name:"Md. Sohail Ansari",roll:211720200026,regi:16202039948,msg:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel corporis ullam voluptates, atque eligendi maxime cum ipsam, ad suscipit quos earum, ea officiis dolor! Laudantium eveniet facere earum? Odio tenetur quis at temporibus laboriosam asperiores minus doloremque vel dignissimos aperiam."},
    {img:img2,name:"Md. Sohail Ansari",roll:211720200026,regi:16202039948,msg:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel corporis ullam voluptates, atque eligendi maxime cum ipsam, ad suscipit quos earum, ea officiis dolor! Laudantium eveniet facere earum? Odio tenetur quis at temporibus laboriosam asperiores minus doloremque vel dignissimos aperiam."},
    {img:img2,name:"Md. Sohail Ansari",roll:211720200026,regi:16202039948,msg:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel corporis ullam voluptates, atque eligendi maxime cum ipsam, ad suscipit quos earum, ea officiis dolor! Laudantium eveniet facere earum? Odio tenetur quis at temporibus laboriosam asperiores minus doloremque vel dignissimos aperiam."}
  ]
  return (
    <>
       <div>
            
            <div id="imgDiv" className='  '>
                  <div className='w-60 text-center  mx-auto mt-10'>
                  <img src={img2} alt="" />
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
                  <div>
                      {
                        eachMember.map((item)=>{
                           return (
                            <div className=' mb-20 flex mx-20 items-center p-3  ' id='memberDiv'>
                            <div id='memberImgDiv' className='memberInnderDiv flex-1  p-4'>
                              <img src={item.img} alt="Img" />
                            </div>
                            <div className='flex-1  pl-8 mt-8 ' >
                                 <p className='text-xl'><strong>Name : </strong> <span>{item.name}</span></p>
                                 <p className='text-xl'><strong>University Roll No. : </strong> <span>{item.roll}</span></p>
                                 <p className='text-xl'><strong>Registration No. : </strong> <span>{item.regi}</span></p>
                                 <p className='mt-4'><strong>Message : </strong>{item.msg}</p>
                            </div>
                         </div>
                           )
                        })
                      }
                  </div>

            </div>
           
       </div>
    </>
  )
}

export default MemberPage
