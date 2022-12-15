import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { CustomeInput } from '../components/CustomCard/CustomeInput';
import { Layout } from '../components/TopNav/Layout';

export const Register =() => {
  const [form, setForm] = useState({});

    const inputFields = [
        {
          label: "Name",
          placeholder: "Same Smith",
          required: true,
          name: "name",
          type: "text",
        },
        {
          label: "Email",
          placeholder: "your@gmail.com",
          required: true,
          name: "email",
          type: "email",
        },
        {
          label: "password",
          placeholder: "1234",
          required: true,
          name: "pin",
          type: "number",
          min: 1000,
          max: 9999,
        },
      ];

      const handleOnChange =(e) =>{
           const {name,value} = e.target;

           setForm({
            ...form,
            [name]:value,
          })  
      };

      const handleOnSubmit = (e) =>{
        e.preventDefault();
        console.log(form);
      }
      
  return (
  
  <Layout>

    <Form className='login-page' onSubmit={handleOnSubmit}>
        <h2> Register Page Here </h2>
        <hr/>
        {inputFields.map((item, i) => (
          <CustomeInput key={i} {...item} 
         onChange={handleOnChange}
           />
        ))}
      
      <Button variant="primary" type="submit">
        Register
      </Button>

      
      <div className="text-end">
           New here? <Link to="/
           "> login </Link>
          </div>
    </Form>
    </Layout>
  );
}


