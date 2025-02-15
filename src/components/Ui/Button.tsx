
export default function Button({ onClick, children, ...props }: { onClick?: React.MouseEventHandler<HTMLButtonElement> } & React.ButtonHTMLAttributes<HTMLButtonElement>) {

    return (
        <button
            className="px-6 py-3 bg-emerald-700 hover:bg-emerald-600 transition-colors duration-200 text-white rounded-lg disabled:bg-emerald-900 disabled:text-slate-300"
            onClick={onClick || (() => { })}
            {...props}
        >
            {children}
        </button>
    )
}