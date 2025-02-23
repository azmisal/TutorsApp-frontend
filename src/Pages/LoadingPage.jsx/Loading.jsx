import React from 'react'
import LoadingScreen from 'react-loading-screen';


const Loading = () => {
    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="LoadingScreen">
            <LoadingScreen loading={true}
                bgColor='#f1f1f1'
                spinnerColor='#9ee5f8'
                textColor='#676767'
                logoSrc='/logo.png'
                text='Here an introduction sentence (Optional)' />
        </div>
    )
}

export default Loading