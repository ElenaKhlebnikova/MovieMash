import { useQuery } from '@tanstack/react-query';
import { getUserInformation } from '../api';

const useFetchAuthUser = () => {
    const { data: user } = useQuery({
        queryKey: [document.cookie],
        queryFn: getUserInformation,
    });
    if (user === 'NOT_AUTH') {
        window.location.replace('http://localhost:5173/log-in');
    }

    return user;
};

export default useFetchAuthUser;
