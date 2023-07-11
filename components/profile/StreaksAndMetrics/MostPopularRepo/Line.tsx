function Line() {
    return (
        <svg className="w-full flex-shrink" viewBox="0 0 80 10" xmlns="http://www.w3.org/2000/svg">
            <line x1={0} y1="50%" x2={80} y2="50%" stroke="#64748b" strokeWidth={2} />
        </svg>
    );
}

export default Line;