import { useState } from "react"
function reactForm() {
    const [form, setform] = useState({});

    const handleChanges = (e)=>{
        setform({...form,[e.target.name]:e.target.value});
    }
    return(
        <>
            <input type="text" name="email" value={form.email?form.email:""} onChange={handleChanges}/>
            <input type="text" name="phone" value={form.phone?form.phone:""} onChange={handleChanges}/>
        </>
    )
}