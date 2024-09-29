import SearchInput from "../SearchInput/SearchInput"

export default function Header(props) {
    return (
        <div className="header"> 
            <h1>{props.heading}</h1>
            <SearchInput />
        </div>
    )
}