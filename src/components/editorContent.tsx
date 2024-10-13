

export const Editor:React.FC<{children:React.ReactNode}> = ({children}) => {

    return(
        <div className="w-full min-h-screen flex">
            {children}
        </div>
    )
}

