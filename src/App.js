import { useState } from "react";

export default function Todolist() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState(false);
  const [req,setreq]=useState(true);

  function onSubmit(obj) {
    if((obj.mainInput.trim||obj.finalDate.true)!==' '){
    setreq(true)
    }
   
    if(setreq(true)){
      setList([...list,obj]);
      setForm(false);
    }
   
  }

  return (
    <>
    <div className="container" style={{
      backgroundColor:'black',
      marign:'0px',
      paddingTop:'  5px',
      paddingBottom:'600px'
    }}>
    <div style={{
      marginLeft:'29em',
      
    }}>
      <h1 style={{
        fontSize:'60px',
        color:'white'
      }}>TO DO LIST</h1>
      <div>
        <Button style={{
          padding:'10px',
          paddingRight:'15px',
          paddingLeft:'15px',
          borderRadius:'30px',
          borderStyle:'none',
          backgroundColor:'#00F752',
          transition:'background-color 0.3s'

        }}onClick={() => setForm(true)}><b>+ Give tasks to do</b></Button>
      </div>
      </div>
      {form && <Formdialog onSubmit={onSubmit} onClose={()=>setForm(false)}/>}
      <table style={{
          marginTop: '20px',
          color: 'white',
          borderCollapse: 'collapse',
          width: '70%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          { (Object.keys(list).length===0)?null:(
          <thead>
            <tr>
              <th>Main Task</th>
              <th>Importance</th>
              <th>Final Date</th>
            </tr>
          </thead>
          )
               } 

          <tbody>
            {list.map((obj, index) => (
              <tr key={index} style={{ border: '1px solid white' }}>
                
                <td style={{maxWidth:'70%',textOverflow:'ellipsis',padding:'7px',fontWeight:'bold'}}>{obj.mainInput}</td>
                <td style={{maxWidth:'15%',
                     color:obj.importance==='very important'?'red':(obj.importance==='not important'?'green':'yellow'), padding:'7px'       }}>{obj.importance}</td>
                <td style={{maxWidth:'15%', padding:'7px'}}>{obj.finalDate}</td>
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     
    </>
  );
}

function Button({ onClick, children,style }) {
  return <button style={style} onClick={onClick}>{children}</button>;
}

function Formdialog({ onSubmit ,onClose}) {
  const [obj,setobj]=useState({
    mainInput:' ',
    importance:'very important',
    finalDate:' '

  })
  
function handleclose(){
  setobj({
    mainInput:' ',
    importance:'very important',
    finalDate:' '
  })
  onClose();
}
  function handlechange(event){
     const {name,value}=event.target;
     
     setobj((bj)=>({...bj,[name]:value}))
  }
  return (
    <>
    <div style={{position:'absolute', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.7)' }}>
      
      <form style={{
        margin: '40px',
        border: '4px solid green',
        marginTop: '100px',
        display:'flex',
        flexDirection:'column',
        width:'400px',
        marginLeft:'500px',
        padding:'30px'
       
       
        
       
      }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={handleclose} style={{
          background:'transparent',
          border:'none',
          color:'white',
          marginRight: 0,
          cursor: 'pointer',


                          }}>
   &#10006;
</Button>
</div>

        <div style={{
           padding:'0px',
        }}>
          
        <div style={{
          padding:'20px'
        }}>
        <label style={{
          padding: '20px',
          color:'white',
          fontSize:'1.7rem',
          fontWeight:'bold'
        }} htmlFor="mainInput">Main Task</label>
        <input style={{
          padding:'5px'
        }} onChange={handlechange} type="text" id="mainInput" name="mainInput" required />
           </div>
           <div style={{
          padding:'20px'
        }}>
        <label style={{
          padding: '20px',
          color:'white',
          fontSize:'1.7rem',
          fontWeight:'bold'
        }} htmlFor="importance">Importance</label>
        <select style={{
          padding:'5px'
        }}onChange={handlechange} id="importance" name="importance">
          <option value="very-important">Very Important</option>
          <option value="important">Important</option>
          <option value="not-important">Not Important</option>
        </select>
        </div>
        <div style={{
          padding:'20px'
        }}>
        <label style={{
          padding: '20px',
          color:'white',
          fontSize:'1.7rem',
          fontWeight:'bold'
        }} htmlFor="finalDate">Final Date</label>
        <input style={{
          marginRight: '30px',
          padding:'5px'
          
        }} onChange={handlechange} type="date" id="finalDate" name="finalDate" required />
          </div>
          <div style={{
          padding:'20px',
          marginLeft:'20px'
        }}>
        <Button 
          
        onClick={() => onSubmit(obj)} style={{ display: 'block',
        padding:'10px',
        paddingRight:'12px',
        paddingLeft:'12px',
        borderRadius:'30px',
        borderStyle:'none',
        backgroundColor:'#00F752',
        fontWeight:'bold'
        }}>
          Submit
        </Button>
        </div>
        </div>
      </form>
      </div>
    </>
  );
}
