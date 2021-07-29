import { Button } from "./Button"


const Header = ({title}) => {
    const onClick = () => {
        console.log('Clicked')
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button 
            color="green" 
            text="hello" 
            onClick={onClick} 
            />
        </header>
    )
}

export default Header
