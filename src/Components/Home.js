import React,{useState,useEffect}from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
    let navigate=useNavigate();
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
      const blogs=localStorage.getItem('blogs')
      setBlogs(JSON.parse(blogs))
    }, [])

    const handleDelete=(blogOutIndex)=>
    {
        const _blogs=blogs.filter((blog,blogInIndex)=>
        {
            if(blogInIndex!==blogOutIndex){
                return blog
            }
        })
        setBlogs(_blogs)
        localStorage.setItem('blogs',JSON.stringify(_blogs))
    }

    const handleEdit=(blogIndex)=>
    {
        localStorage.setItem('editIndex',blogIndex)
        navigate("/edit")
    }

  return (
    <div>
    <br/>
    <table
        className='container'
        style={{ borderRadius: "5px", textAlign: "left" }}
      >
        <tr style={{ backgroundColor: "lightblue"}}>
            <th>Images</th>
            <th>Title</th>
            <th>Desc</th>
            <th>Mobile No.</th>
            <th>Password</th>
            <th>Actions</th>
        </tr>
      {
        blogs && blogs.length>0
        ?
        blogs.map((blog,blogIndex)=>{
            return(
                <>
                    <tr>
                        <td><img src={blog?.file} style={{height:"80px",width:"80px"}}/></td>
                        <td>{blog?.title}</td>
                        <td>{blog?.desc}</td>
                        <td>{blog?.mobile}</td>
                        <td>{blog?.pass}</td>
                        <Button style={{borderRadius:"20px",margin:"auto",textAlign:"center",marginTop:"30px"}} variant='contained' onClick={()=>handleEdit(blogIndex)}>Edit</Button> &nbsp;
                        <Button variant='contained' style={{borderRadius:"20px",backgroundColor:"red", marginTop:"30px"}} onClick={()=>handleDelete(blogIndex)} >Delete</Button>

                    </tr>
                </>
            )
        })
        :
        "No  data"
      }
      </table>
      <br/>
      <br/>
      <br/>

      <Button variant='contained' onClick={()=>
      {
        navigate("/add")
      }}>Add</Button>
    </div>
  )
}

export default Home
