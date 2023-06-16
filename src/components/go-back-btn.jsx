import { useNavigate } from 'react-router-dom';

const GoBackBtn = () => {
    const navigate = useNavigate();

    return (
        <div className="sticky top-0 text-left my-5 ml-5">
            <button
                className="text-5xl font-bold self-start"
                onClick={() => navigate(-1)}
            >
                &larr;
            </button>
        </div>
    );
};

export default GoBackBtn;
