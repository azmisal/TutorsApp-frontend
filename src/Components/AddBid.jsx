import React, { useState } from 'react'
import { Select, Input, InputGroup, InputRightAddon, Textarea, Button } from '@chakra-ui/react'
import { MdKeyboardArrowDown } from "react-icons/md";

import "./Style/AddBid.css"
const AddBid = () => {

    const [bid, setBid] = useState({
        username: "",
        language: "",
        cost: "",
        subject: "",
        syllabus: "",
        standard: "",
        remarks: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBid((prevBid) => ({
            ...prevBid,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Bid Submitted");
        console.log(bid);
    }

    return (
        <div className='addBid'>
            <form className="bidBox"onSubmit={handleSubmit}>
                <h1 className="bidHead">Add Bid</h1>
                
                <label htmlFor="language">Language</label>
                <select placeholder='Select Language' icon={<MdKeyboardArrowDown className='downArrowIcon' size={'sm'}/>} size={'sm'} name='language' value={bid.language} onChange={handleChange} required>
                    <option value='english'>English</option>
                    <option value='hindi'>Hindi</option>
                    <option value='malayalam'>Malayalam</option>
                    <option value='tamil'>Tamil</option>
                    <option value='kannada'>Kannada</option>
                    <option value='spanish'>Spanish</option>
                    <option value="other">Other</option>

                </select>
                <label htmlFor="subject">Subject</label>

                <Input
                    type='text'
                    placeholder='Subject name'
                    size={'sm'}
                    name='subject'
                    value={bid.subject}
                    onChange={handleChange}
                    required
                />
                <InputGroup>
                    <Input
                        type='number'
                        placeholder='Enter your bid'
                        size={'sm'}
                        name='cost'
                        value={bid.cost}
                        onChange={handleChange}
                        required
                    />
                    <InputRightAddon>$</InputRightAddon>
                </InputGroup>
                <select size={'sm'} name='standard' value={bid.standard}onChange={handleChange} required>
                <option value="" disabled>Select Class</option>
                    <option value='class 1'>class 1</option>
                    <option value='class 2'>class 2</option>
                    <option value='class 3'>class 3</option>
                    <option value='class 4'>class 4</option>
                    <option value='class 5'>class 5</option>
                    <option value='class 6'>class 6</option>
                    <option value="class 7">class 7</option>
                    <option value="class 8">class 8</option>
                    <option value="class 9">class 9</option>
                    <option value="class 10">class 10</option>
                    <option value="class 11">class 11</option>
                    <option value="class 12">class 12</option>
                </select>

                <Input
                    type='text'
                    placeholder='Eg : CBSE'
                    size={'sm'}
                    name='syllabus'
                    value={bid.syllabus}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="remarks" >Remark</label>
                <Textarea placeholder="Present Yourself" size={'sm'} name='remarks' value={bid.remarks} onChange={handleChange} required/>

                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}

export default AddBid

