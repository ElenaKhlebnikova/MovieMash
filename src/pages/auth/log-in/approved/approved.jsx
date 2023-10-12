import { useEffect } from 'react';

import { createSessionId } from '../../../../api';
import useFetchAuthUser from '../../../../hooks/use-fetch-auth-user';

const Approved = () => {
    const queryParams = new URLSearchParams(window.location.search);

    useEffect(() => {
        const request_token = queryParams.get('request_token');
        createSessionId(request_token);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const user = useFetchAuthUser();
    console.log(user);

    return <div> Hi, {user && user.username} 👋</div>;
};

export default Approved;
