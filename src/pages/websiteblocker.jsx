import React from 'react'

const Websiteblocker = () => {
    //for downloading extension
    const url = 'http://localhost:3000/extension.rar';
    const download = () => {
        const filename = url.split('/').pop();
        const atag = document.createElement('a');
        atag.href = url;
        atag.setAttribute('download', filename);
        document.body.appendChild(atag);
        atag.click();
        atag.remove();
    }
    return (
        <div className='blocker-main-div'>
            <div className='blocker-container'>
                <header><h1>HOW TO ADD EXTENSION IN CHROME</h1></header>
                <div className='blocker-info'>
                    <span>1.Click on Download button to install zip file.</span>
                    <span> 2.Extract the files.</span>
                    <span>3.Go to chrome EXTENSION MANAGER from settings.</span>
                    <span>4.Enable developer mode.</span>
                    <span>5.Select the load unpacked option.</span>
                    <span> 6.Browse and go to the extracted folder and select ProductiveProBlocker folder.</span>
                    <span>7.YOU ARE READY TO GO!☻</span>
                    <button className='setting' onClick={download}>
                        Download Website Blocker
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Websiteblocker;
