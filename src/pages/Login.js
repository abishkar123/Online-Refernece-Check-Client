import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { CustomeInput } from '../components/CustomCard/CustomeInput';
import { Layout } from '../components/TopNav/Layout';

export const Login =() => {
  const[ form, SetForm] = useState({});
    // const [form, setForm] = useState({
    //     email: "prem.acharya@hotmail.com",
    //     pin: 3333,
    //   });

    const handleOnChange =(e)=>{
      const{ value,name} = e.target;
      console.log(form);

      SetForm({
        ...form,
        [name]:value,
      });

    };

    const handleOnSubmit = (e) =>{
      e.preventDefault();
      console.log(form);
    }



    const inputFields = [
        {
          label: "Email",
          placeholder: "your@gmail.com",
          required: true,
          name: "email",
          type: "email",
        //   value: form.email,
        },
        {
          label: "password",
          placeholder: "1234",
          required: true,
          name: "pin",
          type: "number",
        //   value: form.password,
        },
      ];
    
  return (
    <Layout>
    <Form className='login-page' onSubmit={handleOnSubmit}>
        <h2> login Page Here </h2>
        <br />
      
        {inputFields.map((item, i) => (
          <CustomeInput key={i} {...item} 
         onChange={handleOnChange}
           />
        ))}
      
      <Button variant="primary" type="submit">
        Login
      </Button>

      
      <div className="text-end">
           New here? <Link to="/register"> register </Link>
          </div>
    </Form>
    </Layout>
  );
}


