"use client"
export default function Footer () {
    return(
        <>
            <style jsx scoped>
                {`
                    p{
                        display:flex;
                        justify-content: center;
                        align-items:center;
                        background-color:red;
                        color:black;
                        height:200px;
                    }
                `}
            </style>
            <p>footer</p>
        </>
    )
}