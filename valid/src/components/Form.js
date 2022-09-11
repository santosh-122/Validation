import React,{useState,useRef} from 'react';
import ErrorModule from './ErrorModule';
import Card from './Card';
import classess from './Form.css'

const Form = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    // const formet = nameInputRef.current.value;
    //     const enteredTitle = ageInputRef.current.value;
    // const [formet,setState]   = useState('');
    //  const [enteredTitle,setEntered] = useState('')
     const [error,setError] = useState();
    const onSubmitHandler = (e)=>  {
        e.preventDefault();
        const formet = nameInputRef.current.value;
        const enteredTitle = ageInputRef.current.value;
        const userList = {
            formet,
            enteredTitle,
            id:Math.random().toString()
        }  
        
        if (formet.length !== 0 && enteredTitle.length !== 0) {
            if(+enteredTitle >= 1){
            //    console.log(userList)
               props.pampinchali(userList)
               nameInputRef.current.value = '';
               ageInputRef.current.value = '';
            }
            else{
                setError({
                    title:'Invalid input',
                    message:'please enter correct age'
                })
            }
        }
        else{
            setError({
                title:'Invalid input',
                message:'please enter the  fields'
            })
        }
    }
    // const Handler = (e) => {
    //     setState(e.target.value)
    // }
    // const ageHandler = (e) => {
    //     setEntered(e.target.value)
    // }
    const errorHandler = () =>{
        setError(null);
        nameInputRef.current.value = '';
       ageInputRef.current.value = '';
    };
    
  return (
    <div>
    {error && <ErrorModule title = {error.title} message={error.message} onConfirm ={errorHandler} />}
    <Card className={classess.input}>
      <form onSubmit={onSubmitHandler}>
        <input type="text" ref={ nameInputRef} placeholder="Name" /><br/>
        <input type="number" ref={ ageInputRef} placeholder="age" /><br/>
        <button type='submit'>ADD</button>
      </form>
    
    </Card>
    </div>
  );
}

export default Form;
