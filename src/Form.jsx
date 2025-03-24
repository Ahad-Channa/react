import { useState } from "react";

function Form() {
    const [str, setStr] = useState('');
    const [email, setEmail] = useState('');
    const [occupation, setOccupation] = useState('');
    const [gender, setGender] = useState('');
    const [languages, setLanguages] = useState([]);

    function handleLanguageChange(e) {
        const { value, checked } = e.target;
        
        if (checked) {
            setLanguages([...languages, value]);
        } else {
            setLanguages(languages.filter(lang => lang !== value));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        window.alert(`Name: ${str}\nEmail: ${email}\nOccupation: ${occupation}\nGender: ${gender}\nLanguages: ${languages.join(", ")}`);
    }

    return (
        <>
            <form >
                <div>
                    <label>Name: </label>
                    <input type="text" name="text" value={str} onChange={(e) => setStr(e.target.value)} />
                </div>
                <br />
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <br />
                <div>
                    <label>Occupation: </label>
                    <select name="occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Html">Html</option>
                        <option value="CSS">CSS</option>
                        <option value="JavaScript">JavaScript</option>
                    </select>
                </div>
                <br />
                
                <legend>Gender:</legend>
                <label>Male</label>
                <input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)} checked={gender === "male"} />
                
                <label>Female</label>
                <input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} checked={gender === "female"} />
                
                <label>Other</label>
                <input type="radio" name="gender" value="other" onChange={(e) => setGender(e.target.value)} checked={gender === "other"} />
                <br />

                <label className="form-label">Languages:</label>
                <div>
                    <div>
                        <input type="checkbox" name="languages" value="html" onChange={handleLanguageChange} checked={languages.includes("html")} />
                        <label htmlFor="html">HTML</label>
                    </div>
                    <div>
                        <input type="checkbox" name="languages" value="css" onChange={handleLanguageChange} checked={languages.includes("css")} />
                        <label htmlFor="css">CSS</label>
                    </div>
                    <div>
                        <input type="checkbox" name="languages" value="javascript" onChange={handleLanguageChange} checked={languages.includes("javascript")} />
                        <label htmlFor="javascript">Javascript</label>
                    </div>
                </div>
                <br />

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>

            <br /><br />
            <h3>Name: {str}</h3>
            <h3>Email: {email}</h3>
            <h3>Occupation: {occupation}</h3>
            <h3>Gender: {gender}</h3>
            <h3>Languages: {languages.join(", ")}</h3>
        </>
    );
}

export default Form;
