const MeesRating = ({ mees }: IProps) => {
    return mees ? (
        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="green"
                className="w-8 h-8"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
        </span>
    ) : (
        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="red"
                className="w-8 h-8"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </span>
    );
};

interface IProps {
    mees: boolean;
}

export default MeesRating;
