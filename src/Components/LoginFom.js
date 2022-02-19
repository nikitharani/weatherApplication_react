import React,{useState}  from 'react';


export default function LoginForm({Login,Error}) {
  const [details, setDetails]=useState({name:'ipgautomotive',password:'carmaker'});

  const submitHandler = e=>{
    e.preventDefault();
    Login(details);
  }

  return (
    <div >
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {(Error!=="")?(<div className='error'>{Error}</div>):''}

         <div className='form-group'>
            <label htmlFor="name">UserName</label>
            <input type="text" name ="name" id="name" value={details.name} onChange={e=>setDetails({...details, name:e.target.value})}/>
          </div>
          <div className='form-group'>
            <label htmlFor="password">Password</label>
            <input type="text" name ="password" id="password" value={details.password} onChange={e=>setDetails({...details, password:e.target.value})}/>
          </div>
          <input type="submit" value="LOGIN"/>

      </div>

    </form>
    </div>
  )
}

