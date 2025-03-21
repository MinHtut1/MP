'use client';

function Button({onClick})
{
    return (
        <button onClick={onClick} type="button">Buttom</button>
    );
}

export default function CustomeButton()
{
    const handler = (event) =>{
        console.log("Button click",event);
    };
    return (<div>
        Custome Button
        <Button onClick={handler} />
    </div>);
}