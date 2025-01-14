import React from 'react';
import './Styles/StudentDash.css';
import Profile from '../Assets/profile.webp';
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from '@chakra-ui/react'
const StudentDash = () => {
  const studentName = 'John Doe';
  const studentEmail = 'johndoe2001@gmail.com';
  

  // Mock data array
  const bids = [
    {
      language: 'English',
      subject: 'Math',
      cost: '$50/hour',
      standard:'7',
      syllabus: 'CBSE',
      remarks: 'Experienced tutor with 5 years of teaching. kjagdsku sdsagdk sagdkusagd sdgjg dkasgdkas hgakdasjdg kasdg kasdjasgdjas jd kjas gdkasdjgkasjddfkasuyasdkja guygfk gaef kdjfhbflhgjfngghg kjfj h hdsu kj j',
    },
    {
      language: 'French',
      subject: 'History',
      standard:'7',
      cost: '$40/hour',
      syllabus: 'Kerala Syllabus',
      remarks: 'Specialized in modern history.sddiu h ouahdfku gss iyga yagwi hyfh iuhas ivuhasdkjh gahcjg kfja fadfadfg adjfgad kf ag fya fk agigfjyagfjafgajdg asdg asj dasdgjsgdshdjasf dsajd asjhdg sajdsj',
    },
    {
      language: 'Spanish',
      standard:'7',
      subject: 'Science',
      cost: '$45/hour',
      syllabus: 'ICSE',
      remarks: 'Interactive sessions with experiments.d;jbad;adfad ado oadfaief a h;ouo fhaoh o[wdDJF dsf OHA FO J;IFH SDOH S9d osdsf dahfo  doafh idsuj fodos fhdsu hfdsiufh dsiufh dsiufh ds9uh dsiuifdsh vh9u n',
    },
  ];

  return (
    <div className="studentDash">
      <div className="stuDashNav">
        <div className="stuProfile">
          <img src={Profile} className="dp" alt="Profile" />
          <div className="studet">
            <h1 className="stuName">{studentName}</h1>
            <h2 className="stuEmail">{studentEmail}</h2>
          </div>
        </div>
      </div>
      <div className="stuDashContent">
        <div className="bidPart">
          <div className="bidHeadAdd">
        <h1 className="stuBidsHead">Your Bids</h1>
        <a href="/addBid"><Button className='addButt'>Add</Button></a>
        </div>
        <div className="bidsContainer">
          {bids.map((bid,index)=>(
            <div className="bidCard">
              <div className="topOfBid">
                <div className="topLeftOfBid">
              <p className="bidSubject">Subject: <span className='bidSub'>{bid.subject}</span></p>
              <p className="bidSyllabus">Syllabus: <span className='bidSub'>{bid.syllabus}</span></p>
              <p className="bidLanguage">Language: <span className='bidSub'>{bid.language}</span></p>
              <p className="bidLanguage">Class: <span className='bidSub'>{bid.standard}</span></p>

              </div>
              <div className="topRightOfBid">
              <p className="bidCost">Cost: <span className='cost'>{bid.cost}</span></p>
              </div>
              </div>
              <p className="bidRemarks">Remarks: <br/> <span className='remark'>{bid.remarks}</span></p>
            </div>
          ))

          }

        </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDash;
