import { useQuery } from '@apollo/react-hooks';
import { gql } from '@apollo/react-hooks';
import { GET_AUTHORIZED_USER } from '../graphql/queries';
import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizeUser = (variables) => {
  const { data, loading, refetch, ...result } = useQuery(GET_AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
    // Other options
    variables,
  });

  return {
    authorizedUser: data ? data.authorizedUser : null,
    loading,
    refetch,
    ...result,
  };
};

export default useAuthorizeUser;
