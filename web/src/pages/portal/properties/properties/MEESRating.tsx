const MeesRating = ({ mees }: IProps) => {
    return mees === '' ? (
        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
            </svg>
        </span>
    ) : mees ? (
        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
        </span>
    ) : (
        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </span>
    );
};

interface IProps {
    mees: string;
}

export default MeesRating;
