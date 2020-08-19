import React from 'react';

var firstname='Hakim';
var lastname='Barouni';

const  FullName = () =>{
    return (
    <div>
    {`your full name is :${firstname} ${lastname}`}
    </div>
    );
}

export default FullName ;