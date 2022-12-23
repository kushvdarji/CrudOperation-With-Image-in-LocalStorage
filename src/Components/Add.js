import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Add() {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mobile, setMobile] = useState("");
  const [pass, setPass] = useState("");
  const [file, setFile] = useState("");
  const [error, setError] = useState(false);
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };
  const handleMobileChange=(e)=>
  {
    setMobile(e.target.value);
  }
  const handlePassChange=(e)=>
  {
    setPass(e.target.value);
  }
//handle file upload control
const Fileupload = (e)=>{
  setFile(URL.createObjectURL(e.target.files[0]));
  console.log(e.target.files[0]);
}

  const handleSubmit = (event) => {
    if (!title || !desc || !mobile || !pass || !file) {
    } else {
      console.log({ title, desc });
      const _blogs =
        localStorage.getItem("blogs") &&
        localStorage.getItem("blogs").length > 0
          ? JSON.parse(localStorage.getItem("blogs"))
          : [];
      localStorage.setItem(
        "blogs",
        JSON.stringify([..._blogs, { title, desc,mobile,pass,file }])
        );
        navigate("/");
      // if (title <= 3 || desc <= 3) {
      //   setError(true);
      // }
      // if(mobile<=3){
      //   setError(true);
      // }
      // if (setError == true) {
      //   event.currentTarget.disabled = true;
      // }

    }
  };
  const downkey=["e", "E", "+", "-", "."];
  const exceptThisSymbols = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "*",
    "+",
    "-",
    "/",
  ];
  return (
    <div>
      <form style={{ marginTop: "25px" }}>
        <h1>Add Form</h1>

        {/* file uplaod */}
        <TextField
        type="file"
          variant="outlined"
          className="kush"
          style={{ marginTop: "35px" }}
          onChange={(e)=>Fileupload(e)}
        />

        <br />
        <br />
        {error || file.length <1 ? (
          <small
            style={{ textAlign: "center", margin: "auto", display: "block" }}
          >
            File cannot be Empty
          </small>
        ) : (
          ""
        )}
        <TextField
          label="Title"
          variant="outlined"
          className="kush"
          style={{ marginTop: "35px" }}
          value={title}
          onChange={(e) => handleTitleChange(e)}
          onKeyDown={(e) =>
            exceptThisSymbols.includes(e.key) && e.preventDefault()
          }
        />
        <br />
        <br />
        {error || title.length > 15 ? (
          <small
            style={{ textAlign: "center", margin: "auto", display: "block" }}
          >
            Title cannot be more than 15
          </small>
        ) : (
          ""
        )}
        <br />
        <TextField
        type="text"
          label="Description"
          variant="outlined"
          className="kush"
          style={{ marginTop: "15px" }}
          value={desc}
          onChange={(e) => handleDescChange(e)}
          onKeyDown={(e) =>
            exceptThisSymbols.includes(e.key) && e.preventDefault()
          }
        />{" "}
        <br />
        <br />
        {error || desc.length > 20 ? (
          <small
            style={{ textAlign: "center", margin: "auto", display: "block" }}
          >
            Description cannot be more than 20
          </small>
        ) : (
          ""
        )}
        <TextField
          type="number"
          label="Mobile No."
          variant="outlined"
          className="kush"
          style={{ marginTop: "35px" }}
          value={mobile}
          onChange={(e) => handleMobileChange(e)}
          onKeyDown={(e) =>
            downkey.includes(e.key) && e.preventDefault()
          }
        />
        <br />
        <br />
        {error || mobile.length > 10 ? (
          <small
            style={{ textAlign: "center", margin: "auto", display: "block" }}
          >
            Mobile cannot be more than 10
          </small>
        ) : (
          ""
        )}
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          className="kush"
          style={{ marginTop: "35px" }}
          value={pass}
          onChange={(e) => handlePassChange(e)}
          onKeyDown={(e) =>
            downkey.includes(e.key) && e.preventDefault()
          }
        />
        <br />
        <br />
        {error || pass.length > 10 ? (
          <small
            style={{ textAlign: "center", margin: "auto", display: "block" }}
          >
            Password cannot be more than 10
          </small>
        ) : (
          ""
        )}
      </form>
      <br />
      <Button
        variant="contained"
        style={{ marginTop: "30px" }}
        onClick={handleSubmit}
        disabled={
          title.length < 3 ||
          desc.length < 3 ||
          title.length > 15 ||
          desc.length > 20||
          mobile.length<10||
          mobile.length>10||
          pass.length<8||
          pass.length>10||
          file.length==0
        }
      >
        Submit
      </Button>
    </div>
  );
}
export default Add;
