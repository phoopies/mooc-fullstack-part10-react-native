import { useQuery } from "@apollo/client";
import { GET_AUTHORIZED_USER } from "../graphql/queries";
// import useSignIn from "./useSignIn";
// import useSignOut from "./useSignOut";

const useAuthorizedUser = () => {
    // const [signIn] = useSignIn();
    // const [signOut] = useSignOut();

    const { data, loading } = useQuery(GET_AUTHORIZED_USER, {
        fetchPolicy: "cache-and-network",
    })

    return {user : data ? data.me : undefined, loading, /*signIn, signOut*/};
}

export default useAuthorizedUser;