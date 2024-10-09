export default function Button({ className, text, startIcon, endIcon, isIconOnly = false, onClick }) {
    return (
        <>
            <button onClick={onClick} className={`flex flex-row items-center ${className}`}>
                {startIcon ? (
                    <span>
                        {startIcon}
                    </span>
                ) : null}
                {isIconOnly ? null : (
                    <p>{text}</p>
                )}
                {endIcon ? (
                    <span>
                        {endIcon}
                    </span>
                ) : null}
            </button>
        </>
    )
}