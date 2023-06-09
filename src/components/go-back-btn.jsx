import { useNavigate } from 'react-router-dom';

function GoBackBtn() {
    const navigate = useNavigate();
    // used navigate function directly on the onClick handler
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
}

export default GoBackBtn;
